import axios, { AxiosRequestConfig } from "axios";
import Timetable from "components/timetable";
import basicAuth from "lib/auth/basicAuth";
import { FunctionComponent } from "react";
import { useQuery } from "react-query";

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
	
	const {isLoading, isError, error, data} = useQuery(["timetable","test"], fetchData)
	
	if (isLoading) {
		return <>Loading</>
	}
	else if (isError) {
		return <>{(error as any).toString()}</>
	}

	return ( 
	<>
		<Timetable {...data}/>
	</> 
	);
}
 
export default TimetablePage;