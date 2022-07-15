import { TimetableData } from "lib/site/timetable";
import { FunctionComponent } from "react";
import Day from "./Day";
import Timeline from "./Timeline";
import style from "./timetable.module.scss";

type TimetableProps = TimetableData



const Timetable: FunctionComponent<TimetableProps> = ({days}) => {

	return ( 
	<div className={style.week} style={{gridTemplateRows: `2rem repeat(${days.length}, 8rem)`}}>
		<Timeline startHour={9} endHour={17}/>
		{days.map((day,i)=><Day row={i} key={day.date} data={day}/>)}
	</div>
	)

}
 
export default Timetable;