import axios, { AxiosRequestConfig } from "axios";
import Timetable from "components/timetable";
import useLoader from "lib/hooks/Loader";
import { FunctionComponent, useEffect, useId, useRef, useState } from "react";

type TimetableLoaderProps = {
	email: string,
	auth: string,
	date: string
}

function fetchData ({email, auth, date}: TimetableLoaderProps) {
	const testConfig : AxiosRequestConfig = {
		method: "PUT",
		headers: {
			Authorization: auth
		},
		data: {
			email: email,
			date: date
		}
	}

	async function inner() {
		const response = await axios("/api/timetable", testConfig)
		return response.data
	}

	return inner
}

const TimetableLoader: FunctionComponent<TimetableLoaderProps> = (props) => {

	const {data, status} = useLoader(["timetable", ...Object.values(props)], fetchData(props));

	if (status) {
		return <>{status}</>
	}

	return ( 
		<Timetable {...data}/>
	);

}

const TimetablePage: FunctionComponent<{}> = () => {

	const [email, setEmail] = useState("");
	const [auth, setAuth] = useState("");
	const [date, setDate] = useState("");
	
	const dateLabel = useId();

	useEffect(() => {
		const email = window.localStorage.getItem("email") 
		const auth = window.localStorage.getItem("auth") 

		setEmail(email ? email : "")
		setAuth(auth ? auth : "")
	}, [])
	
	const dateInput = useRef<HTMLInputElement>(null)

	if (!email || !auth) {
		return <>Your not logged in</>
	}

	return (
		<>
			<form>
				<h1 id={dateLabel}>Timetable for: {email}</h1>
				<input defaultValue={(new Date).toISOString().substring(0,10)} aria-labelledby={dateLabel} type={"date"} onChange={(e)=>{setDate(e.target.value)}}/>
			</form>
			
			<div>
				<TimetableLoader {...{email, auth, date}}/>
			</div>

			<div>
				{"We're all still stuck with the sites loading times though"}
			</div>
		</>
	)
}
 
export default TimetablePage;