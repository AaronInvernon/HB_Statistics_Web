import React from 'react';

const handleSubmit = (event, modalFn) => {
    event.preventDefault()
    modalFn()
}

const PlayerTable = ({ showModal }) =>
    <table className="PlayerTable table table-striped">
        <thead>
            <tr>
                <th>#</th>
                <th>Names</th>
                <th> </th>
                <th>#</th>
                <th>Names</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>1</th>
                <td>
                    <form className="PlayerForm" onSubmit={event => handleSubmit(event, showModal)}>
                        <label>Mark </label>
                        <button className="btn btn-success" type="submit">
                            <i className="fa fa-futbol-o" aria-hidden="true"></i>
                        </button>
                    </form>
                </td>
                <td></td>
                <td>5</td>
                <td>
                    <form className="PlayerForm">
                        <label>Otto </label>
                        <button className="btn btn-success" type="">
                            <i className="fa fa-futbol-o" aria-hidden="true"></i>
                        </button>
                    </form>
                </td>
            </tr>
            <tr>
                <th>2</th>
                <td>
                    <form className="PlayerForm ">
                        <label>JAcob </label>
                        <button className="btn btn-success" type="">
                            <i className="fa fa-futbol-o" aria-hidden="true"></i>
                        </button>
                    </form>
                </td>
                <td></td>
                <td>15</td>
                <td>
                    <form className="PlayerForm">
                        <label>Thornton </label>
                        <button className="btn btn-success" type="">
                            <i className="fa fa-futbol-o" aria-hidden="true"></i>
                        </button>
                    </form>
                </td>
            </tr>
            <tr>
                <th>3</th>
                <td>
                    <form className="PlayerForm">
                        <label>Larry </label>
                        <button className="btn btn-success" type="">
                            <i className="fa fa-futbol-o" aria-hidden="true"></i>
                        </button>
                    </form>
                </td>
                <td></td>
                <td>24</td>
                <td>
                    <form className="PlayerForm">
                        <label>Thornton </label>
                        <button className="btn btn-success" type="">
                            <i className="fa fa-futbol-o" aria-hidden="true"></i>
                        </button>
                    </form>
                </td>
            </tr>
        </tbody>
    </table>

export default PlayerTable;