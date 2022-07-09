import { FunctionComponent } from "react";
import NavBarLink from "./NavBarLink";
import style from "./navbar.module.scss"

interface NavBarProps {
	
}
 
const NavBar: FunctionComponent<NavBarProps> = () => {
	return ( 
	<nav className={style.navBar}>
		<NavBarLink href="/" label="Home"/>
		<NavBarLink href="/login" label="Login"/>
		<NavBarLink href="/timetable" label="Timetable"/>
	</nav>
	);
}
 
export default NavBar;