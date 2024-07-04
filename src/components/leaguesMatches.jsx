import { useParams } from "react-router-dom";
import useApi from "../api/"
import Pagination from "./templates/pagination";
import { useEffect, useState } from "react";
export default function LaguesMatches(params) {
    const id = useParams().id;
    const [loaded, error, items, ajax] = useApi({ url: `competitions/${id}/matches` });

    const [to, setto] = useState("");
    const [from, setfrom] = useState("");

    function filterDate({ to, from }) {
        if (to && from) {
            ajax({ url: `competitions/${id}/matches?dateFrom=${to}&dateTo=${from}` })
        }
    }

    useEffect(() => {
        filterDate({ to: to, from: from })
    }, [to, from])

    return (
        <div className="container">
            {error ? (
                <p>{String(error)}</p>
            ) : !loaded ? (
                <p>Загрузка</p>
            ) : (

                <>
                    <div className="ligueInfo">
                        <h1>Матчи лиги <span>"{items.competition.name}"</span></h1>
                    </div>
                    <div className="ligi_date flexBlock">
                        <div className="flexBlock">
                            <h4>От:</h4>

                            <input className="toFrom" type="date" onChange={(event) => setto(event.target.value)} />
                        </div>
                        <div className="flexBlock">
                            <h4>До:</h4>{" "}
                            <input className="toFrom" type="date" onChange={(event) => setfrom(event.target.value)} />
                        </div>
                    </div>

                    <div className="list-element">
                        <Pagination
                            items={items.matches}
                            itemsPerPage={9}
                        />

                    </div>
                </>
            )}

        </div>
    )
}


