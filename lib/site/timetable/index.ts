import fetchTimetableSite from "./fetch"
import parseTimetableHtml, { Day } from "./parse"

export interface Timetable {
	days: Day[]
}

export default async function getTimetable(email: string, password: string) {
	const html = await fetchTimetableSite(email, password)
	return {days: parseTimetableHtml(html)}
}