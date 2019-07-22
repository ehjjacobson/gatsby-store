import React, { Component } from 'react'
// import {link} from 'gatsby'
import logo from "../../images/ic-bell.svg"
import { MdShoppingCart} from 'react-icons/md';
import "./Styles.css";

export default class Navbar extends Component {
    render() {
        return (
            <div className="Styles">
                <div className="Styles-header">
                    <div className="Styles-cart">
                    <MdShoppingCart />
                    </div>
                    <img src={logo} className="Styles-logo" alt="logo" />
                </div>
            </div>
        )
    }
}
