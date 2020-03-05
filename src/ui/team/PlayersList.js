import React from 'react';


const PlayerList = ({ list }) =>
    <table className="PlayerList table table-striped">
        <thead>
            <tr>
                <th>#</th>
                <th>Names</th>
            </tr>
        </thead>
        <tbody>

            {list.map((player, i) => (
                <tr key={i}>
                    <td>{player.number}</td>
                    <td>{player.name}</td>
                    <td className="btn btn-danger" type="">
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>

export default PlayerList;