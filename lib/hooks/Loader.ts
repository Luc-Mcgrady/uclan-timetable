import Cache from "lib/cache"
import { useEffect, useMemo, useRef, useState } from "react"

type Key = string | string[]

function stringifyKey(key: Key) {

	if (typeof key === "object") {
		return key.join("_")
	}
	return key

}

export default function useLoader<T>(key: Key, dataFetcher: ()=>Promise<T>) : {status: string, data: undefined} | {data: T, status: undefined} {
	
	const loaderCache = useMemo(()=>new Cache<T>("loader"), [])
	const cacheKeyMutable = useRef("")
	const cacheKey = stringifyKey(key)
	cacheKeyMutable.current = cacheKey

	const [result, setResult] = useState(undefined);
	const [error, setError] = useState(undefined);

	useEffect(() => {

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

		setResult(undefined)
		setError(undefined)

		withCache().then(()=>setResult(loaderCache.Data[cacheKeyMutable.current])).catch(setError)

		}
		, [cacheKey]
	)
	
	
	if (error !== undefined) {
		return {status: (error as any).toString(), data: undefined}
	}
	else if (result === undefined) {
		return {status: "Loading", data: undefined}
	}
	else {
		return {data: result, status: undefined}
	}
}