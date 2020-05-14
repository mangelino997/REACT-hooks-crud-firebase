import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form'  //mediante npm install react-hook-form
import { firebase } from '../firebase'


const Create = (props) => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        e.preventDefault()
        add_firebase(data)
        e.target.reset()
    }

    const add_firebase = async (data) => {
        try {
            const db = firebase.firestore()
            const res = await db.collection('tareas').add(data)
            data.id = res.id
            console.log(data)
            props.addUser(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input
                        placeholder="Ingrese nombre de usuario"
                        className="form-control"
                        name="name"
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
                    Agregar
                                    </button>
            </form>
        </Fragment>
    );
}

export default Create;