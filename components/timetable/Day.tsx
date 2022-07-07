import { DayData } from "lib/site/timetable/parse";
import { FunctionComponent } from "react";
import Lesson from "./Lesson";
import style from "./timetable.module.scss";

type DayProps = {
	data: DayData
	row: number
}
 
const yOffset = 2

const Day: FunctionComponent<DayProps> = ({data, row}) => {
	return ( 
	<>
		<div className={style.header} style={{gridRowStart: row+yOffset}}>
			<div>{data.day}</div>
		</div>
		{data.cells.map(data=><Lesson key={data.name} row={row+yOffset-1} data={data}/>)}
	</> 
	);
}
 
export default Day;