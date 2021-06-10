import React, { useState } from "react";

export default function MainPage() {
    const [selectedId, setSelectedId] = useState(1);


    return (
        <div className="col">
            { selectedId < 0 ? (
                <div>
                    <div style={{ marginTop: 30, marginBottom: 30, fontSize: 30 }} className="row white-text center-items">
                        Каталог марок
                    </div>

                    <div style={{}} className="manufacturer-card mercedes-card">
                        <div className="row center-items manuf-title">
                            Mercedes-Benz
                        </div>
                    </div>

                    <div style={{}} className="manufacturer-card bmw-card">
                        <div className="row center-items manuf-title">
                            <div>BMW</div>
                        </div>
                    </div>

                    <div style={{}} className="manufacturer-card audi-card">
                        <div className="row center-items manuf-title">
                            Audi
                        </div>
                    </div>

                </div>
            ) : (
                <div>
                    <div style={{ marginTop: 30, marginBottom: 30, fontSize: 30 }} className="row white-text">
                        <div className="catalog-title">Каталог Mercedes-Benz</div>
                    </div>
                    <div style={{}} className="manufacturer-card c-class">
                        <div className="row center-items manuf-title">
                            Mercedes-Benz C 220 AMG
                        </div>
                    </div>

                    <div style={{}} className="manufacturer-card e-class">
                        <div className="row center-items manuf-title">
                            Mercedes-Benz E 220
                        </div>
                    </div>

                    <div style={{}} className="manufacturer-card s-class">
                        <div className="row center-items manuf-title">
                            Mercedes-Benz S 500
                        </div>
                    </div>
                </div>
            )}

        </div>)
}