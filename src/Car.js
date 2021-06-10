import React from "react";
import { FaTachometerAlt, GiCarSeat, FaCar, FaClock, FaParking, FaGasPump } from "react-icons/all"

export default function Car(props) {

    return (
        <div className="col">
            <div style={{}} className="col manufacturer-card mercedes-card">
                <div className="row center-items manuf-title">
                    Mercedes-Benz E220
                </div>
                <div style={{ height: "70%" }}></div>
                <div style={{background: "rgba(0, 0, 0, 0.75)", height: "30%"}} className="col center-items">
                    <div className="row spc-between" style={{ width: "50%", height: "30%" }}>
                        <div className=" " style={{color: "white", fontSize: "30px"}}>
                            <FaCar />
                            &nbsp;
                            2.2л
                        </div>
                        <div style={{color: "white", fontSize: "30px"}}>
                            <GiCarSeat />
                            &nbsp;
                            5
                        </div>
                        <div style={{color: "white", fontSize: "30px"}}>
                            <FaTachometerAlt />
                            &nbsp;
                            240 км/год
                        </div>
                    </div>
                    <div className="row spc-between" style={{ width: "50%", height: "30%" }}>
                        <div style={{color: "white", fontSize: "30px"}}>
                            <FaClock />
                            &nbsp;
                            6.4 с
                        </div>
                        <div style={{color: "white", fontSize: "30px"}}>
                            <FaParking />
                            &nbsp;
                            АКПП 7-G Tronic
                        </div>
                        <div style={{color: "white", fontSize: "30px"}}>
                            <FaGasPump />
                            &nbsp;
                            6.2л/100км
                        </div>
                    </div>
                    <div className="row center-items" style={{ width: "50%", height: "30%" }}>
                        <a className="select-btn" href="#">Обрати</a>
                    </div>
                </div>
            </div>

        </div>
    )
}