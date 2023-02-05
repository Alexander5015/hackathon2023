import React from "react";
import Dehaze from "@mui/icons-material/Dehaze";
import Close from "@mui/icons-material/Close";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { stack as Menu } from "react-burger-menu";
import "./Navigation.css";


function Navigation() {

    return (<>
        <div className="headerContainer">
            <div className="midHeaderFlex">
                <div className="menuFlex">
                    <br/><Menu width={150} customBurgerIcon={<Dehaze />}
                    customCrossIcon={<Close />} className="menu">
                    <a id="home" className="menu-item" href="/">Who are we?</a>
                    <a id="about" className="menu-item" href="/about">Work with us</a>
                    <a id="contact" className="menu-item" href="/contact">Buisness</a>
                    <a id="Events" className="menu-item" href="/contact">Events</a>
                </Menu>
                </div>
                <h1>City Sights YYC</h1>
            </div>
            <div className="midHeaderFlex">
                <div>POINTS</div>
                <div>
                    <AccountCircle />
                </div>
            </div>
        </div>
    </>
        // <>
        //     {/* Remove inline-styling on successful CSS */}
        //     {/* Navigation Bar / Header */}
        //     <div style={{ border: "2px solid red" }}>
        //         <div>
        //             <Dehaze/>
        //             <ul>
        //                 <li>Who are we?</li>
        //                 <li>Work with us</li>
        //                 <li>Business</li>
        //                 <li>Events</li>
        //             </ul>
        //         </div>
        //         <h1>City Sights YYC</h1>
        //         <div>POINTS</div>
        //         <div>
        //             <AccountCircle />
        //         </div>
        //     </div>
        // </>
    );
}

export default Navigation;
