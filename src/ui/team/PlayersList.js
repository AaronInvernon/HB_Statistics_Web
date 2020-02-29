import React from 'react';


const PlayerList = () =>
    <table className="PlayerList table table-striped">
        <thead>
            <tr>
                <th>#</th>
                <th>Names</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>1</th>
                <td> 
                    <form className="PlayerForm ">
                        <label>JAcob </label>
                        <button className="btn btn-danger" type="">
                           <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                    </form>
                </td>
            </tr>
            <tr>
                <th>2</th>
                <td>
                    <form className="PlayerForm ">
                        <label>JAcob </label>
                        <button className="btn btn-danger" type="">
                           <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                    </form>
                </td>
            </tr>
            <tr>
                <th>3</th>
                <td>
                    <form className="PlayerForm">
                        <label>Larry </label>
                        <button className="btn btn-danger" type="">
                           <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                    </form>
                </td>
            </tr>
        </tbody>
    </table>

export default PlayerList;