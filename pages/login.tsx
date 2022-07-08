import { FunctionComponent, useRef } from "react";
import nookies from "nookies"
import basicAuth from "lib/auth/basicAuth";

interface LoginProps {
	
}
 
const Login: FunctionComponent<LoginProps> = () => {
	
	const username = useRef<HTMLInputElement>(null)
	const password = useRef<HTMLInputElement>(null)
	
	return ( 
	<>
		<h1>Log in once instead of once every page load.</h1>

		<form
		onSubmit={(e)=>{
			nookies.set(null, "email", username.current?.value as string)
			nookies.set(null, "auth", basicAuth(username.current?.value as string, password.current?.value as string))

			window.location.replace("/timetable")
			e.preventDefault()
		}}>
			<label htmlFor="">Username: </label>
			<input type="text" ref={username}/>
			<label htmlFor="">Password: </label>
			<input type="password" ref={password}/>
			<input type="submit" />
		</form>

		<h5>Your login is stored in your cookies so you never have to do it again. {"(on this device)"}</h5>
	</> );
}
 
export default Login;