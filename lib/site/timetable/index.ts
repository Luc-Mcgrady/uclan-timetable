import fetchTimetableSite from "./fetch"
import parseTimetableHtml from "./parse"

export default async function getTimetable(email: string, password: string) {
	const html = await fetchTimetableSite(email, password)
	return parseTimetableHtml(html)
}