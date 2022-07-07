import { TimetableData } from "lib/site/timetable";
import { FunctionComponent } from "react";
import Day from "./Day";
import style from "./timetable.module.scss";

type TimetableProps = TimetableData



const Timetable: FunctionComponent<TimetableProps> = (props) => {

	return ( 
	<div className={style.week}>
		{props.days.map((day,i)=><Day row={i} key={day.date} data={day}/>)}
	</div>
	)

}
 
export default Timetable;