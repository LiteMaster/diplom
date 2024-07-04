import { NavLink } from "react-router-dom";

export default function Main(params) {
    return (
        <div className="container">
            <div className="flexBlock main-card">
                <div className="cart">
                    <img src={process.env.PUBLIC_URL+"/img/leagues.jpg"} alt="" />
                    <NavLink className="header-link" to={"/leagues"} >Лиги</NavLink>
                </div>
                <div className="cart">
                    <img src={process.env.PUBLIC_URL+"/img/teams.jpg"} alt="" />
                    <NavLink className="header-link" to={"/teams"} >Команды</NavLink>
                </div>
            </div>
        </div>
    )
}