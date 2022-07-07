import jsdom from "jsdom"

export interface Lesson {
	cellType: "lesson"
	name: string
	timeframe: string
	room: string
	lessonType: string
}

interface Empty {
	cellType: "empty"
}

export type CellData = (Lesson | Empty) & {span: number}

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
	let emptys = 0;
	for (const lesson of lessondom) {

		if (lesson.classList.contains("TimeTableEmptyCell")) { // If its an empty cell increment the count of empty cells
			emptys++
		}
		else { // If its not an empty cell
			if (emptys) { // If there is a backlog of empty cells
				cells.push({
					cellType: "empty",
					span: emptys
				})
				emptys = 0;
			}

			cells.push({
				cellType: "lesson",
				span: lesson.colSpan,
				timeframe: lesson.querySelector("strong:nth-child(1)")?.textContent as string,
				name: lesson.querySelector("span:nth-child(3)")?.textContent?.trim() as string,
				room: lesson.querySelector("strong:nth-child(5)")?.textContent as string,
				lessonType: lesson.querySelector("strong:nth-child(8)")?.textContent as string,
			})
		}
	}
	
	if (emptys) { // If there are reamaining empty cells
		cells.push({
			cellType: "empty",
			span: emptys
		})
	}

	return {day, date, cells}
}

export default function parseTimetableHtml(html: string) {
	const dom = new jsdom.JSDOM(html)

	const days = [...dom.window.document.querySelectorAll("tr.otherDay")].map(parseDay)
	return days;
}