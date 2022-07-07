import { TimetableData } from "lib/site/timetable";
import { FunctionComponent } from "react";
import Day from "./Day";
import style from "./timetable.module.scss";

type TimetableProps = TimetableData
 
const Timetable: FunctionComponent<TimetableProps> = (props) => {

	return ( 
	<div className={style.week}>
		{props.days.map(day=><Day key={day.date} {...day}/>)}
	</div>
	)

}
 
export default Timetable;