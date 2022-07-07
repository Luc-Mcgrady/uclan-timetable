import { DayData } from "lib/site/timetable/parse";
import { FunctionComponent } from "react";
import Cell from "./cell";

type DayProps = DayData
 
const Day: FunctionComponent<DayProps> = (props) => {
	return ( 
	<>
		<div>{props.date}</div>
		{props.cells.map(data=><Cell {...data}/>)}
	</> 
	);
}
 
export default Day;