import React from "react";
import Dehaze from "@mui/icons-material/Dehaze";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { slide as Menu } from "react-burger-menu";
import "./Navigation.css";

function Navigation() {
    return (
        <>
            {/* Remove inline-styling on successful CSS */}
            {/* Navigation Bar / Header */}
            <div style={{ border: "2px solid red" }}>
                <div>
                    <Dehaze />
                    <ul>
                        <li>Who are we?</li>
                        <li>Work with us</li>
                        <li>Business</li>
                        <li>Events</li>
                    </ul>
                </div>
                <h1>City Sights YYC</h1>
                <div>POINTS</div>
                <div>
                    <AccountCircle />
                </div>
            </div>
        </>
    );
}

export default Navigation;
