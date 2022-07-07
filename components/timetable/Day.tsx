import { DayData } from "lib/site/timetable/parse";
import { FunctionComponent } from "react";
import Lesson from "./cell";
import style from "./timetable.module.scss";

type DayProps = {
	data: DayData
	row: number
}
 
const Day: FunctionComponent<DayProps> = ({data, row}) => {
	return ( 
	<>
		<div className={style.header} style={{gridRowStart: row+1}}>{data.date}</div>
		{data.cells.map(data=><Lesson key={data.name} row={row} data={data}/>)}
	</> 
	);
}
 
export default Day;