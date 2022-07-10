import basicAuth from "lib/auth/basicAuth";
import { FunctionComponent, useRef } from "react";

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

			let name = username.current?.value as string
			if (!name.includes("@")) {
				name += "@uclan.ac.uk"
			}

			window.localStorage.setItem("email",name)
			window.localStorage.setItem("auth", basicAuth(username.current?.value as string, password.current?.value as string))

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
		<h5>If you ever feel compelled to log out empty the 2 boxes and hit submit, Im too lazy to make it into a button.</h5>
	</> );
}
 
export default Login;