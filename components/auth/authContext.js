import { createContext, useContext, useEffect, useState } from "react";
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from "../../firebase/firebase";

// The curly bracket content does not appear to affect the user value
const AuthContext = createContext({})
//The hook that provides the user 
export const useAuth = () => useContext(AuthContext)

//The context wrapper that will enable a component to use the hook
export const AuthContextWrapper = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(()=> {
        // Unsubscribe is a function that must be used on clean up
        const unsubscribe = onAuthStateChanged(auth, (userNew) => {
            if(userNew!=null){
                setUser({
                    uid: user.uid,
                })
            }else{
                setUser(null)
            }
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])
    return (
        <AuthContext.Provider value={{user}}>
            {
                (loading)
                // Display splash screen here instead
                ? (<>Loading AuthWrapper</>)
                : (children)
            }
        </AuthContext.Provider>
    )
}

// The wrapper function wraps the entire page as the name implies and on every 
// load checks whether the user is defined. It they are, the user value will be set.