import { useRouter } from "next/router";
import { useEffect } from "react";
import PermissionCheck from "../common/SplashScreen/PermissionCheck";
import { useAuth } from "./authContext";


const RouteProtector = ({children}) => {
    const {user} = useAuth()
    const router = useRouter()
    // A use effect is used as we need the component to re-render evry time the router/user changes
    useEffect(() => {
        if(user===null){
            setTimeout(()=>{
                router.push('/login')
            }, 500)
        }
    }, [router, user])
    return (
        <>
            {   
                // There's a null here, as the route checker is within a useEffect, there's a chance for the component to mount
                (user===null) 
                ? <PermissionCheck/> 
                : children
            }
        </>
    );
}

export default RouteProtector;