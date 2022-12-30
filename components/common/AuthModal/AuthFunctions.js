import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,  signInWithRedirect  } from "firebase/auth";

export const registerUser = async(username, email, password) => {
    const auth = getAuth();
    try{
        //Looks like we don't need to send the firebase config file 
        const data = await createUserWithEmailAndPassword(auth, email, password, username)
        console.log(data)
    } catch (err){
        console.log(err.message)
    }
}
export const loginUser = async (email, password) => {
    const auth = getAuth();
    try{
        const data  = await signInWithEmailAndPassword(auth, email, password)
        console.log(data)
    } catch (err){
        console.log(err.message)
    }
}