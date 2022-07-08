import { FunctionComponent } from "react";
import style from "../timetable.module.scss";

interface TimeHeadingProps {
	position: number
	width: number
	hour: number
	offset?: number
}
 
const TimeHeading: FunctionComponent<TimeHeadingProps> = ({position, width, hour, offset=0}) => {

	const truePos = position * width + offset

	return ( 
		<div className={style.time} style={{gridColumnStart: truePos, gridColumnEnd: truePos+width}}>
			{`${hour.toString().padStart(2,"0")}:00`}
		</div> );
}
 
export default TimeHeading;