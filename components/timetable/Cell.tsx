import { CellData } from "lib/site/timetable/parse";
import { FunctionComponent } from "react";

type CellProps = CellData
 
const Cell: FunctionComponent<CellProps> = (props) => {
	return ( 
	<>
		<div style={{}}>{props.cellType}</div>
	</>
	);
}
 
export default Cell;