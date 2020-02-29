import React from 'react'
import { Link } from 'react-router-dom'
import { player } from '../../assets'



const Menu = () => {
    return (
        <div className=" Menu container justify-content-center w-80">

            <div className="container text-center w-80 center m-3">
                <img className=" w-50" src={player} alt="logo" />
                <h1>Handball Statistics</h1>
            </div>
            <ul className="m-0 p-0">
                <li className="w-100">
                    <Link to="teams" className="btn btn-dark mt-4 p-3 w-100">Teams</Link>
                </li>
                <li className="w-100">
                    <Link to="match/new" className="btn btn-dark mt-4 p-3 w-100">New Match</Link>
                </li>
                <li className="w-100">
                    <Link to="match" className="btn btn-dark mt-4 p-3 w-100">Historial</Link>
                </li>
            </ul>


        </div>
    )
}
export default Menu;