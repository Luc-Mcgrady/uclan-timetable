import { CellData } from "lib/site/timetable/parse";
import { FunctionComponent } from "react";
import style from "./timetable.module.scss";

type LessonProps = {
	row: number
	data: CellData
}
 
const Lesson: FunctionComponent<LessonProps> = ({data,row}) => {
	return ( 
	<>
		<div className={style.lesson} style={{gridColumnStart: data.spanBegin+1, gridColumnEnd: data.spanEnd+1, gridRowStart: row+1}}>{data.name}</div>
	</>
	);
}
 
export default Lesson;