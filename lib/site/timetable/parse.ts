interface Lesson {
	cellType: "lesson"
	name: string
	timeframe: string
	room: string
	lessonType: string
}

interface Empty {
	cellType: "empty"
}

type Cell = (Lesson | Empty) & {span: number}

interface Day {
	day: string,
	date: string,
	cells: Cell[]
}

const parser = new DOMParser

function parseDay(row: Element) : Day {
	
	const headerdom = row.querySelector("th")
	
	const day = headerdom?.textContent as string
	const date = headerdom?.querySelector("span")?.textContent as string

	const lessondom = row.querySelectorAll("td")

	let cells: Cell[] = []
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
			}

			cells.push({
				cellType: "lesson",
				span: lesson.rowSpan,
				timeframe: lesson.querySelector("strong:nth-child(1)")?.textContent as string,
				name: lesson.querySelector("span:nth-child(3)")?.textContent as string,
				room: lesson.querySelector("strong:nth-child(5)")?.textContent as string,
				lessonType: lesson.querySelector("strong:nth-child(8)")?.textContent as string,
			})
		}
	}
	
	return {day, date, cells}
}

export default function parseTimetableHtml(html: string) {
	const dom = parser.parseFromString(html, "text/html")

	const days = [...dom.querySelectorAll("tr.otherDay")].map(parseDay)
	return days;
}