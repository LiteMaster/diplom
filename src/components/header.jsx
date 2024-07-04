import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="container flexBlock sb">
                <div className="logo">
                    Soccer Stat
                </div>
                <nav className="nav flexBlock">
                    <NavLink className="header-link" to={"/"} >Главная</NavLink>
                    <NavLink className="header-link" to={"/leagues"} >Лиги</NavLink>
                    <NavLink className="header-link" to={"/teams"} >Команды</NavLink>
                </nav>
            </div>
        </header>
    )
}