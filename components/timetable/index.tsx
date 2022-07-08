import { TimetableData } from "lib/site/timetable";
import { FunctionComponent } from "react";
import Day from "./Day";
import Timeline from "./Timeline";
import style from "./timetable.module.scss";

type TimetableProps = TimetableData



const Timetable: FunctionComponent<TimetableProps> = (props) => {

	return ( 
	<div className={style.week}>
		<Timeline startHour={9} endHour={17}/>
		{props.days.map((day,i)=><Day row={i} key={day.date} data={day}/>)}
	</div>
	)

}
 
export default Timetable;