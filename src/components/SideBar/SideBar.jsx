import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.scss'
import logo from "../../Image/Logo.png"


const SideBar = () => {
    return (
        <div id='sideBar'>
            <ul>
                <li className='dashboard'>
                   <img width="120" className='p-1' src={logo} alt="" />
                </li>
                <li className="product">
                    <Link to="/restaurants">Restaurants</Link>
                </li>
            </ul>
        </div>
    )
}

export default SideBar