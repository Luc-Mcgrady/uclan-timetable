import axios, { AxiosRequestConfig } from "axios";
import DatePicker from "components/DatePicker";
import Timetable from "components/timetable";
import formatDate from "lib/formatDate";
import useLoader from "lib/hooks/Loader";
import Link from "next/link";
import { FunctionComponent, useEffect, useId, useState } from "react";

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
		const data = response.data

		return data
	}

	return inner
}

const TimetableLoader: FunctionComponent<TimetableLoaderProps> = (props) => {

	const {data, status} = useLoader(["timetable", ...Object.values(props)], fetchData(props));

	if (status) {
		return <>
			<h1>{status}</h1>
			<Timetable days={[]}/>
		</>
	}

	return ( 
		<Timetable {...data}/>
	);

}

const TimetablePage: FunctionComponent<{}> = () => {

	const [email, setEmail] = useState("");
	const [auth, setAuth] = useState("");
	const [date, setDate] = useState(new Date);
	
	const dateLabel = useId();

	useEffect(() => {
		const email = window.localStorage.getItem("email") 
		const auth = window.localStorage.getItem("auth") 

		setEmail(email ? email : "")
		setAuth(auth ? auth : "")
	}, [])

	if (!email || !auth) {
		return <>Your not <Link href="/login">logged in</Link></>
	}

	return (
		<>
			<form>
				<h1 id={dateLabel}>Timetable for: {email}</h1>
				<DatePicker date={date} dateUpdate={setDate}/>
			</form>
			
			<div>
				<TimetableLoader {...{email, auth,date: formatDate(date)}}/>
			</div>

			<div>
				{"We're all still stuck with the sites loading times though"}
			</div>
		</>
	)
}
 
export default TimetablePage;