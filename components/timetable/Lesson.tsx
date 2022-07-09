import { CellData } from "lib/site/timetable/parse";
import { FunctionComponent } from "react";
import style from "./timetable.module.scss";

type LessonProps = {
	row: number
	data: CellData
}
 
const Lesson: FunctionComponent<LessonProps> = ({data,row}) => {

	const [roomSummary, ...roomDetails] = data.room.split("-")
	const [module, ...moduleDetails] = data.name.split("-")
	const [type, ...noIdea] = data.lessonType.split(" ")

	return ( 
	<>
		<div className={style.lesson} style={{gridColumnStart: data.spanBegin+1, gridColumnEnd: data.spanEnd+1, gridRowStart: row+1}}>
			<li>{data.timeframe}</li>
			<details>
				<summary>{roomSummary}</summary>
				<div>{roomDetails.join("-")}</div>
			</details>
			<details>
				<summary>{module}</summary>
				{moduleDetails.join("-")}
			</details>
			
{
noIdea && noIdea[0]
? 			<details>
				<summary>{type}</summary>
				{ noIdea.join(" ")}
			</details>
: 			<li>{type}</li>
}

			<li>{data.group}</li>
		</div>
	</>
	);
}
 
export default Lesson;