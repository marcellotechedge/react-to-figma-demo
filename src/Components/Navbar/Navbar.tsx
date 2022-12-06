import { Button } from "../Button/Button";
import "./Navbar.css";

interface NavbarProps {

}

export const Navbar = (props: NavbarProps) => {
    return  <div className="navbar">
                <div className="navbar-menu">
                    <Link label="Homepage" active/>
                    <Link label="Travel Plans"/>
                    <Link label="Flights"/>
                    <Link label="Hostels"/>
                    <Link label="Your Plan"/>
                </div>
                <div className="navbar-cta">
                    <Button type="inverted" label="Sign in"/>
                    <Button type="primary" label="Sign up"/>
                </div>
            </div>
}

interface LinkProps {
    label: string;
    active?: boolean;
}


export const Link = (props: LinkProps) => {
    return  <a className={`navbar-link ${props.active ? "active" : ""}`}>
                {props.label}
            </a>
}