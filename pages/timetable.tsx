import axios, { AxiosRequestConfig } from "axios";
import DatePicker from "components/DatePicker";
import Timetable from "components/timetable";
import formatDate from "lib/formatDate";
import useLoader from "lib/hooks/Loader";
import _ from "lodash";
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

const TimetableLoader: FunctionComponent<TimetableLoaderProps> = ({...props}) => {

	const {data, status} = useLoader(["timetable", props.auth, props.date], fetchData(props));

	if (status) {
		return <Timetable days={_.times(5, i=>({cells: [], date: status, day: i.toString()}))}/>
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
				{"We're all still stuck with the sites loading times. Though this site does cache the timetable locally for a day."}
			</div>
			<br />
			<div>
				{"Use this button if you suspect something has been changed on your timetable (end of year, new module etc.)"} <br />
				<button onClick={()=>{
					window.localStorage.removeItem("loader")
				}}>
					Clear Cache
				</button>
				<br/>
				{"I accept no responsibility if you miss lessons because you were using this cached version of their website"}
			</div>
		</>
	)
}
 
export default TimetablePage;