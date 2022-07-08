import axios, { AxiosRequestConfig } from "axios";
import Timetable from "components/timetable";
import useLoader from "lib/hooks/Loader";
import { FunctionComponent, useId, useState } from "react";
import nookies from "nookies"

type TimetableLoaderProps = {
	email: string,
	password: string,
	date: string
}

function fetchData ({email, password, date}: TimetableLoaderProps) {
	const testConfig : AxiosRequestConfig = {
		method: "PUT",
		data: {
			email: email,
			password: password,
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

	const {email, password} = nookies.get()

	if (!email || !password) {
		return <>Your not logged in</>
	}
	
	const [date, setDate] = useState("");

	const dateLabel = useId();

	return (
		<>
			<form action="">
				<h1 id={dateLabel}>Timetable for: {email}</h1>
				<input aria-labelledby={dateLabel} type={"date"} onChange={(e)=>{setDate(e.target.value)}}/>
			</form>
			
			<div>
				<TimetableLoader {...{email, password, date}}/>
			</div>
		</>
	)
}
 
export default TimetablePage;