import { NavLink } from "react-router-dom";

export default function List({ img, name, block, link }) {
    return (
        <NavLink to={link} className="element flexBlock">
            <div className="leftBlock flexBlock">
                <div className="element-logo">
                    <img src={img} alt="" />
                </div>
                <div className="element-name">
                    <h2>{name}</h2>
                </div>
            </div>
            <div className="element-block">
                {block}
            </div>
        </NavLink>
    )
}