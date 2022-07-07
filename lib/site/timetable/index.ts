import fetchTimetableSite from "./fetch"
import parseTimetableHtml, { Day } from "./parse"

export interface Timetable {
	days: Day[]
}

export default async function getTimetable(email: string, Authorization: string) {
	const html = await fetchTimetableSite(email, Authorization)
	return {days: parseTimetableHtml(html)}
}