import { useQuery } from "react-query"

export default function useLoader<T>(key: string | string[], dataFetcher: (...args: unknown[])=>Promise<T>) : {status: string, data: undefined} | {data: T, status: undefined} {
	
	const {isLoading, isError, isIdle, error, data} = useQuery(key, dataFetcher)
	
	if (isLoading) {
		return {status: "Loading", data: undefined}
	}
	else if (isError) {
		return {status: (error as any).toString(), data: undefined}
	}
	else if (isIdle) {
		return {status: "Idle", data: undefined}
	}
	else {
		return {data: data, status: undefined}
	}
}