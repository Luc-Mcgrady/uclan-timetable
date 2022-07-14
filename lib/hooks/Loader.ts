import { useQuery } from "react-query"

type Key = string | string[]

function stringifyKey(key: Key) {

	if (typeof key === "object") {
		return key.join("_")
	}
	return key

}

export default function useLoader<T>(key: Key, dataFetcher: ()=>Promise<T>) : {status: string, data: undefined} | {data: T, status: undefined} {
	
	const cacheKey = "loader_" + stringifyKey(key)

	const withCache = async () => {

		const cache = window.localStorage.getItem(cacheKey)

		if (!cache) {
			return await dataFetcher()
		}
		else {
			window.localStorage.setItem(cacheKey, JSON.stringify(data))
			return JSON.parse(cache)
		}
	}

	const {isLoading, isError, isIdle, error, data} = useQuery(key, withCache)
	
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