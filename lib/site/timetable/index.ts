import fetchTimetableSite, { TimetableRequest } from "./fetch"
import parseTimetableHtml, { Day } from "./parse"

export interface Timetable {
	days: Day[]
}

export default async function getTimetable(req: TimetableRequest) {
	const html = await fetchTimetableSite(req)
	return {days: parseTimetableHtml(html)}
}