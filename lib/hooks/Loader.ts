import { useQuery } from "react-query"
import Cache from "lib/cache"
import { useMemo } from "react"
import { TimetableData } from "lib/site/timetable"

type Key = string | string[]

function stringifyKey(key: Key) {

	if (typeof key === "object") {
		return key.join("_")
	}
	return key

}


export default function useLoader<T>(key: Key, dataFetcher: ()=>Promise<T>) : {status: string, data: undefined} | {data: T, status: undefined} {
	
	const loaderCache = useMemo(()=>new Cache<T>("loader"), [])
	const cacheKey = stringifyKey(key)

	const withCache = async () => {

		const cached = loaderCache.Data[cacheKey]

		if (!cached) {
			const data = await dataFetcher()
			loaderCache.setKey(cacheKey, data)
			return data
		}
		else {
			return cached
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