import React from 'react'
import { Link } from 'react-router-dom'
import { player } from '../../assets'



const Menu = () => {
    return (
        <div className="container justify-content-center w-80">

            <div className="container text-center w-80 center m-4">
                <img className=" w-50" src={player} alt="logo" />
                <h1>Handball Statistics</h1>
            </div>
            <ul className="m-0 p-0">
                <li className="w-100">
                    <Link to="teams" className="btn btn-dark m-3 p-3 w-100">Teams</Link>
                </li>
                <li className="w-100">
                    <Link to="matches/new" className="btn btn-dark m-3 p-3 w-100">New Match</Link>
                </li>
                <li className="w-100">
                    <Link to="matches" className="btn btn-dark m-3 p-3 w-100">Historial</Link>
                </li>
            </ul>

            {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                Launch demo modal
            </button> */}

        </div>
    )
}
export default Menu;