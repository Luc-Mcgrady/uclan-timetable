import fetchTimetableSite, { TimetableRequest } from "./fetch"
import parseTimetableHtml, { DayData } from "./parse"

export interface TimetableData {
	days: DayData[]
}

export default async function getTimetable(req: TimetableRequest) {
	const html = await fetchTimetableSite(req)
	return {days: parseTimetableHtml(html)}
}