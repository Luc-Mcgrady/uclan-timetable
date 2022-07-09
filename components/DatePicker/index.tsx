import formatDate from "lib/formatDate";
import { FunctionComponent, SetStateAction } from "react";
import Chevron from "./Chevron";

export type DateCallback = React.Dispatch<SetStateAction<Date>>

interface DatePickerProps {
	date: Date
	dateUpdate: DateCallback
}
 
const DatePicker: FunctionComponent<DatePickerProps> = ({date, dateUpdate: updateDate}) => {
	

	return ( 
		<>
			<Chevron setDate={updateDate} amount={-7}>{'<'}</Chevron>
			<input value={(date).toISOString().substring(0,10)} type={"date"} onChange={(e)=>{
				
				let date = e.target.valueAsDate;
				date = date ? date : new Date 
				
				date.setDate(date.getDate() - (date.getDay() + 6) % 7) // Gets the last monday
				// https://stackoverflow.com/questions/35088088/javascript-for-getting-the-previous-monday
				
				updateDate(date)
			}}/>
			<Chevron setDate={updateDate} amount={7}>{'>'}</Chevron>
		</>
	);
}
 
export default DatePicker;