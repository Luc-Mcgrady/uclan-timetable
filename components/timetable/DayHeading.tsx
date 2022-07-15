import React, { FunctionComponent } from "react";
import { DayProps, yOffset } from "./Day";
import style from "./timetable.module.scss";

type DayHeadingProps = DayProps



const DayHeading: FunctionComponent<DayHeadingProps> = ({row, data}) => {
	
	function HeadingBox({children} : React.PropsWithChildren<{}>) {
		return <div className={style.header} style={{gridRowStart: row+yOffset}}>{children}</div>
	}

	if (data.day === undefined || data.date === undefined) {
		return <HeadingBox></HeadingBox>
	}

	return ( 
		<HeadingBox>
			<div>{data.day.split(" ")[0]}</div>
			<div>{data.date}</div>
		</HeadingBox>
	);
}
 
export default DayHeading;