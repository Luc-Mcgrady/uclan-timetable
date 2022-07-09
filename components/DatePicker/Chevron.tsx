import { FunctionComponent, PropsWithChildren, SetStateAction } from "react";
import { DateCallback } from ".";
import style from "./picker.module.scss";

type ChevronProps = PropsWithChildren<{
	setDate: DateCallback
	amount: number
}>
 
const Chevron: FunctionComponent<ChevronProps> = ({children, setDate, amount}) => {
	return ( 
		<div className={style.chevron} onClick={()=>setDate(date=>
			{
				date.setDate(date.getDate()+amount)

				return new Date(date)
			}	
		)}>{children}</div>
	);
}
 
export default Chevron;