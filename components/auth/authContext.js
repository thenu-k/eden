import { createContext, useContext, useEffect, useState } from "react";
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from "../../firebase/firebase";
import SplashScreen from "../common/SplashScreen/SplashScreen";
import {getAuth, signOut} from 'firebase/auth'

// The curly bracket content does not appear to affect the user value
const AuthContext = createContext({})
//The hook that provides the user 
export const useAuth = () => useContext(AuthContext)

//The context wrapper that will enable a component to use the hook
export const AuthContextWrapper = ({children}) => {
    const [user, setUser] = useState(null)
    // Loading state of auth wrapper
    const [loading, setLoading] = useState(true)
    useEffect(()=> {
        // Unsubscribe is a function that must be used on clean up
        const unsubscribe = onAuthStateChanged(auth, (userNew) => {
            if(userNew!=null){
                setUser({
                    uid: userNew.uid,
                })
            }else{
                setUser(null)
            }
            // Delay Simulator
            setTimeout(()=>{
                setLoading(false)
            }, 1000)
        })
        return () => unsubscribe()
    }, [])
    
    return (
        <AuthContext.Provider value={{user}}>
            {
                (loading)
                ? (<SplashScreen/>)
                : (children)
            }
        </AuthContext.Provider>
    )
}

// The wrapper function wraps the entire page as the name implies and on every 
// load checks whether the user is defined. It they are, the user value will be set.