import {useAuth0} from '@auth0/auth0-react'

export const LoginButton = () =>{

    const {loginWithRedirect} = useAuth0();


    return (

        <>
            <button onClick={()=> loginWithRedirect('http://localhost:5173/')}>LOGIN</button>
        
        </>
    )


}