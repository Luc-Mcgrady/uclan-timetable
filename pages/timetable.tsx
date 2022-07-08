import axios, { AxiosRequestConfig } from "axios";
import Timetable from "components/timetable";
import basicAuth from "lib/auth/basicAuth";
import useLoader from "lib/hooks/Loader";
import { FunctionComponent } from "react";

async function fetchData () {
	const testConfig : AxiosRequestConfig = {
		method: "PUT",
		headers: {
			Authorization: basicAuth(process.env.NEXT_PUBLIC_EMAIL as string, process.env.NEXT_PUBLIC_PASSWORD as string)
		},
		data: {
			email: process.env.NEXT_PUBLIC_EMAIL as string,
			date: "2021-10-04"
		}
	}

	const response = await axios("/api/timetable", testConfig)
	return response.data
}

interface TimetablePageProps {
	
}

const TimetablePage: FunctionComponent<TimetablePageProps> = () => {

	const {data, status} = useLoader(["test"], fetchData);

	if (status) {
		return <>{status}</>
	}

	return (
	<>
		<Timetable {...data}/>
	</>
	)

}
 
export default TimetablePage;