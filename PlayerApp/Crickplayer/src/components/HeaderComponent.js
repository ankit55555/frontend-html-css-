import React from 'react'
import {Link} from "react-router-dom";
export default function HeaderComponent() {
    return (
        <div  className="navbar">
            <h1 className="title">Player App</h1>
            <navbar>
                <ul>
                    <li>
                        <Link to='/'>Add Players</Link>
                    </li>
                    <li>

                        <Link to='/show'>Show Players</Link>
                    </li>
                </ul>
            </navbar>
        </div>
    )
}
