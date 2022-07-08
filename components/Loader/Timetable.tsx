import axios, { AxiosRequestConfig } from "axios";
import Timetable from "components/timetable";
import basicAuth from "lib/auth/basicAuth";
import { FunctionComponent } from "react";
import { useQuery } from "react-query";

function fetchData (request: TimetableLoaderProps) {
	const config : AxiosRequestConfig = {
		method: "PUT",
		headers: {
			Authorization: basicAuth(request.email, request.password)
		},
		data: {
			email: request.email,
			date: request.date
		}
	}

    async function fetch() {
        const response = await axios("/api/timetable", config)
        return response.data
    }
	return fetch
}

type Date = `${number}-${number}-${number}`

type TimetableLoaderProps = {
    email: string
    password: string
    date: Date
}
 
const TimetableLoader: FunctionComponent<TimetableLoaderProps> = (props) => {
	const {isLoading, isError, error, data} = useQuery(["timetable","test"], fetchData(props))
	
	if (isLoading) {
		return <>Loading</>
	}
	else if (isError) {
		return <>{(error as any).toString()}</>
	}

	return ( 
	<>
		<Timetable {...data?.data}/>
	</> 
	);
}
 
export default TimetableLoader;