import { FunctionComponent, PropsWithChildren, SetStateAction } from "react";
import { DateCallback } from ".";

type ChevronProps = PropsWithChildren<{
	setDate: DateCallback
	amount: number
}>
 
const Chevron: FunctionComponent<ChevronProps> = ({children, setDate, amount}) => {
	return ( 
		<div onClick={()=>setDate(date=>
			{
				date.setDate(date.getDate()+amount)

				return new Date(date)
			}	
		)}>{children}</div>
	);
}
 
export default Chevron;