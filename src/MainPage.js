import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function MainPage(props) {
    const [selectedId, setSelectedId] = useState(-1);
    const [data, setData] = useState(null);
    const titleRef = useRef();

    useEffect(async () => {
        const { data } = await axios.get("http://localhost:1337/manufacturers");
        console.log(data)
        setData(data);
    }, [])


    return (
        <div ref={titleRef} className="col">
            { selectedId < 0 ? (
                <div>
                    <div style={{ marginTop: 30, marginBottom: 30, fontSize: 30 }} className="row white-text center-items">
                        Каталог марок
                    </div>

                    {/* <div onClick={() => { setSelectedId(1) }} style={{}} className="manufacturer-card mercedes-card">
                        <div className="row center-items manuf-title">
                            Mercedes-Benz
                        </div>
                    </div> */}

                    { data && data.map(item => {
                        return (
                        <div onClick={() => { setSelectedId(item.id); titleRef.current.scrollIntoView() }} className="manufacturer-card mercedes-card"
                            style={{
                                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(http://localhost:1337" + item.Image.url + ")"
                            }}>
                            <div className="row center-items manuf-title">
                                { item.Name }
                            </div>
                        </div>
                    )
                    }) }



                </div>
            ) : (
                <div>
                    <div style={{ marginTop: 30, marginBottom: 30, fontSize: 30 }} className="row white-text">
                        <div className="catalog-title">{ data && data.filter(x => x.id == selectedId).length ? 
                           "Каталог " + data.filter(x => x.id == selectedId)[0].Name : ""  }</div>
                    </div>
                    { data && data.filter(x => x.id == selectedId).length && 
                            data.filter(x => x.id == selectedId)[0].cars && data.filter(x => x.id == selectedId)[0].cars.map(item => {
                                return (
                                <div onClick={() => {
                                    props.setCar(item)
                                }} className="manufacturer-card"
                                    style={{
                                        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(http://localhost:1337" + item.Image.url + ")"
                                    }}>
                                    <div className="row center-items manuf-title">
                                        { item.Name }
                                    </div>
                                </div>
                                )
                    }) }

                </div>
            )}

        </div>)
}