import { TimetableData } from "lib/site/timetable";
import { FunctionComponent } from "react";

type TimetableProps = TimetableData
 
const Timetable: FunctionComponent<TimetableProps> = (props) => {

	return <>{JSON.stringify(props)}</>

}
 
export default Timetable;