import React, { Fragment } from 'react';

const Read = (props) => {
    console.log(props)

    return (
        <Fragment>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">LastName</th>
                        <th scope="col">-</th>
                    </tr>
                </thead>
                <tbody>
                    {props.list.map((user, index) =>

                        <tr key={user.id} >
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.lastname}</td>
                            <td>
                            </td>
                        </tr>)}
                </tbody>
            </table>
        </Fragment>
    );
}

export default Read;