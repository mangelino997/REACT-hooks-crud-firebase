import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form'  //mediante npm install react-hook-form
import { firebase } from '../firebase'


const Update = (props) => {
    const { register, errors, handleSubmit } = useForm();
    const u = {
        id: '',
        name: '',
        lastname: ''
    }
    const [user, setUser] = useState(u)

    const userSelected = (data) => {
        setUser(data)
    }

    const onSubmit = (data, e) => {
        e.preventDefault()
        console.log(data)
        data.id = user.id
        update_firebase(data)
        e.target.reset()
    }

    const update_firebase = async (data) => {
        try {
            const db = firebase.firestore()
            await db.collection('tareas').doc(data.id).update({
                name: data.name,
                lastname: data.lastname
            })
            props.updateUser(data)
            setUser(u)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Fragment>
            <div className="row">
            <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input
                                placeholder="Ingrese nombre de usuario"
                                className="form-control"
                                name="name"
                                defaultValue={user.name}
                                ref={register({
                                    required: {
                                        value: true,
                                        message: 'Nombre es requerido'
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: 'No más de 5 carácteres!'
                                    },
                                    minLength: {
                                        value: 4,
                                        message: 'Mínimo 2 carácteres'
                                    }
                                })}
                            ></input>
                            <span className="text-danger text-small d-block mb-2">
                                {errors?.name?.message}
                            </span>
                        </div>
                        <div className="form-group">
                            <input
                                placeholder="Ingrese apellido de usuario"
                                className="form-control"
                                name="lastname"
                                defaultValue={user.lastname}
                                ref={register({
                                    required: {
                                        value: true,
                                        message: 'Apellido es requerido'
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: 'No más de 5 carácteres!'
                                    },
                                    minLength: {
                                        value: 4,
                                        message: 'Mínimo 2 carácteres'
                                    }
                                })}
                            ></input>
                            <span className="text-danger text-small d-block mb-2">
                                {errors?.lastname?.message}
                            </span>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-success">
                            Editar
                                    </button>
                    </form>
                </div>
                <div className="col-md-6">
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
                                            className="btn btn-success"
                                            onClick={() => userSelected(user)}>
                                            Editar
                                    </button>
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
                
            </div>

        </Fragment>
    );
}

export default Update;