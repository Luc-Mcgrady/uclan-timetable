import { FunctionComponent } from "react";
import _ from "lodash"
import TimeHeading from "./Heading";

interface TimelineProps {
	startHour: number
	endHour: number
	hourWidth?: number
}

const Timeline: FunctionComponent<TimelineProps> = ({startHour, endHour, hourWidth = 4}) => {
	
	return ( 
		<>
			{_.range(0, endHour-startHour).map(i=>
				<TimeHeading key={i} position={i} width={hourWidth} hour={i+startHour} offset={2}/>
			)}
		</>
	);
}
 
export default Timeline;