import { useState } from "react";
import useApi from "../api/"
import List from "./templates/list";
import { filterInfo } from "./templates/filter";
export default function Lagues(params) {
    const [loaded, error, items] = useApi({ url: 'competitions/' });
    const [find, setFind] = useState("")
    return (
        <div className="container">
            <div className="ligueInfo">
                <h1>Лиги</h1>
                <input type="text" onChange={(e) => setFind(e.target.value)} className="findInfo" placeholder="Начните поиск..." />
            </div>
            <div className="list-element">
                {error ? (
                    <p>{String(error)}</p>
                ) : !loaded ? (
                    <p>Загрузка</p>
                ) : (

                    filterInfo({ mass: items.competitions, value: find }).map((element, index) => (
                        <List
                            key={index}
                            img={element.emblem}
                            name={element.name}
                            block={<div className="element-location">
                                <div className="flexBlock">
                                    <p>{element.area.name}</p>
                                    <img className="flags" src={element.area.flag} alt="" />
                                </div>
                            </div>}
                            link={"/leagues/" + element.id}
                        />
                    ))

                )}

            </div>
        </div>
    )
}


