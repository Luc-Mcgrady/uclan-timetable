import Link from "next/link";
import { FunctionComponent } from "react";
import style from "./navbar.module.scss"

interface NavBarLinkProps {
	href: string
	label: string
}
 
const NavBarLink: FunctionComponent<NavBarLinkProps> = ({href, label}) => {
	return ( 
		<Link href={href}>
			<a className={style.navBarLink}>
				{label}
			</a>
		</Link>
	);
}
 
export default NavBarLink;