import { DayData } from "lib/site/timetable/parse";
import { FunctionComponent } from "react";
import DayHeading from "./DayHeading";
import Lesson from "./Lesson";

export type DayProps = {
	data: DayData
	row: number
}
 
export const yOffset = 2

const Day: FunctionComponent<DayProps> = ({data, row}) => {
	return ( 
	<>
		<DayHeading data={data} row={row}/>
		{data.cells.map(data=><Lesson key={`${data.name}${data.timeframe}`} row={row+yOffset-1} data={data}/>)}
	</> 
	);
}
 
export default Day;