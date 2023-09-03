import React from "react";
import { data } from '../data'
import { render } from "@testing-library/react";
class NavBar extends React.Component {
    render() {
        return (
            <div className="NavBar">
                <div className="search-container">
                    <input/>
                    <button id="search-btn">Search</button>
                </div>
            </div>
        );
    }
}

export default NavBar;
