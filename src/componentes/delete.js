import React, { Fragment } from 'react';
const Delete = (props) => {
    return (
        <Fragment>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">LastName</th>
                        <th scope="col">-</th>
                    </tr>
                </thead>
                <tbody>
                    {props.list.map((user, index) =>

                        <tr key={user.id} >
                            <td>{user.name}</td>
                            <td>{user.lastname}</td>
                            <td>
                                <button
                                    type="submit"
                                    className="btn btn-send"
                                    onClick={()=>props.deleteUser(user)}>
                                    Eliminar
                                    </button>
                            </td>
                        </tr>)}
                </tbody>
            </table>

        </Fragment>
    );
}

export default Delete;