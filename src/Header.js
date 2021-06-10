import React from "react";

export default function Header() {

    return (
        <div id="header">
            <div class="col">
                <div id="nav-block" class="row">
                    <div></div>
                    <a class="hdr-link" href="/">Головна</a>
                    <div class="hdr-sep"></div>
                    <a href="./index.ejs">
                        <img class="hdr-img" src="https://image.flaticon.com/icons/png/512/741/741460.png" width="35px" height="45px" />
                    </a>
                    <div class="hdr-sep"></div>
                    <a class="hdr-link" href="/cart">Профіль</a>
                    <div></div>
                </div>
                <div id="hdr-title-block" class="row flex-1">
                    <a id="hdr-title">Автосалон SuperCar</a>
                    <span>Найкращі та найбільш надійні авто світу!</span>
                </div>
            </div>
        </div>
    )
}