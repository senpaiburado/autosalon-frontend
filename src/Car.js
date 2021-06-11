import React from "react";
import { FaTachometerAlt, GiCarSeat, FaCar, FaClock, FaParking, FaGasPump } from "react-icons/all"
import { Input } from 'react-nice-inputs'

export default function Car(props) {

    return (
        <div className="col">
            <div style={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(http://localhost:1337" + props.Image.url + ")"
                }} className="col manufacturer-card">
                <div className="row center-items manuf-title">
                    {props.Name}
                </div>
                <div style={{ height: "70%" }}></div>
                <div style={{background: "rgba(0, 0, 0, 0.75)", height: "30%"}} className="col center-items">
                    <div className="row spc-between" style={{ width: "50%", height: "30%" }}>
                        <div className=" " style={{color: "white", fontSize: "30px"}}>
                            <FaCar />
                            &nbsp;
                            {props.Engine} куб. см
                        </div>
                        <div style={{color: "white", fontSize: "30px"}}>
                            <GiCarSeat />
                            &nbsp;
                            {props.Chairs}
                        </div>
                        <div style={{color: "white", fontSize: "30px"}}>
                            <FaTachometerAlt />
                            &nbsp;
                            {props.MaxSpeed} км/год
                        </div>
                    </div>
                    <div className="row spc-between" style={{ width: "50%", height: "30%" }}>
                        <div style={{color: "white", fontSize: "30px"}}>
                            <FaClock />
                            &nbsp;
                            {props.TimeTo100} с
                        </div>
                        <div style={{color: "white", fontSize: "30px"}}>
                            <FaParking />
                            &nbsp;
                            {props.Gear}
                        </div>
                        <div style={{color: "white", fontSize: "30px"}}>
                            <FaGasPump />
                            &nbsp;
                            {props.FuelPer100}л/100км
                        </div>
                    </div>
                    <div className="row center-items" style={{ width: "50%", height: "30%" }}>
                        <input placeholder="Ім'я" style={{height: 30, marginLeft: 10}}></input>
                        <input placeholder="Телефон" style={{height: 30, marginLeft: 10}} ></input>
                        <a onClick={() => { window.location.reload() }} className="select-btn" href="#">Обрати</a>
                    </div>
                </div>
            </div>

        </div>
    )
}