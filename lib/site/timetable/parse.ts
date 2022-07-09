import jsdom from "jsdom"

export interface Lesson {
	name: string
	timeframe: string
	room: string
	lessonType: string
	group: string

	spanBegin: number // The way its scraped these each represent 1/36 of a day
	spanEnd: number
}

export type CellData = Lesson

export interface DayData {
	day: string,
	date: string,
	cells: CellData[]
}

function parseDay(row: Element) : DayData {
	
	const headerdom = row.querySelector("th")
	
	const day = headerdom?.textContent as string
	const date = headerdom?.querySelector("span")?.textContent as string

	const lessondom = row.querySelectorAll("td")

	let cells: CellData[] = []
	let index = 1;
	for (const lesson of lessondom) {

		if (lesson.classList.contains("TimeTableEmptyCell")) { // If its an empty cell only increment the index
			index++
		}
		else { // If its not an empty cell

			const span = lesson.colSpan;
			const groupRaw = lesson.querySelector("span:nth-child(9)")?.textContent as string

			const groupMatch = groupRaw.match(/Group: (.+)\)/)

			cells.push({
				timeframe: lesson.querySelector("strong:nth-child(1)")?.textContent as string,
				name: lesson.querySelector("span:nth-child(3)")?.textContent?.trim() as string,
				room: lesson.querySelector("strong:nth-child(5)")?.textContent as string,
				lessonType: lesson.querySelector("strong:nth-child(8)")?.textContent as string,
				group: groupMatch ? groupMatch[1] : groupRaw ,

				spanBegin: index,
				spanEnd: index + span,
			})

			index += span
		}
	}

	return {day, date, cells}
}

export default function parseTimetableHtml(html: string) {
	const dom = new jsdom.JSDOM(html)

	const days = [...dom.window.document.querySelectorAll("tr.otherDay")].map(parseDay)
	return days;
}