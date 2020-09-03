import React, { useState, useEffect } from 'react';
import './App.css';

import Create from './componentes/create'
import Delete from './componentes/delete'
import Update from './componentes/update'
import Read from './componentes/read'
import Tabs from './componentes/tabs';
import { firebase } from './firebase'


function App() {

  const [user, setUser] = useState()
  const [users, setUsers] = useState([])

  useEffect(() => {
    const db = firebase.firestore()
    const obtenerDatos = async () => {
      try {
        const data = await db.collection('tareas').get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setUsers(arrayData)
      } catch (error) {
      }
    }
    obtenerDatos()
  }, [])

  const addUser = (user) => {
    setUsers([
      ...users,
      user
    ])
  }

  const deleteUser = (user) => {
    setUser(user)
    delete_firebase()
  }

  const delete_firebase = async () => {
    const db = firebase.firestore()

    try {
      await db.collection('tareas').doc(user.id).delete()
      setUsers(users.filter(item => item.id !== user.id))
      setUser()
    } catch (error) {
      console.log(error)
    }
  }

  const updateUser = (user) => {
    setUsers(users.map(item => (
      item.id === user.id ? user : item
    )))
  }

  return (
    <div className="App">
      <section id="tabs" className="project-tab">
        <div className="container">
          <div className="row justify-content-center p-3">
            <h1 className="text">Gestión de usuarios con pestañas</h1>
            <div className="col-md-9 p-5 frame-color">
              <Tabs></Tabs>
              <br />
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-add" role="tabpanel" aria-labelledby="nav-add-tab">
                  <Create addUser={addUser}></Create>
                </div>
                <div className="tab-pane fade" id="nav-update" role="tabpanel" aria-labelledby="nav-update-tab">
                  <Update list={users} updateUser={updateUser}></Update>
                </div>
                <div className="tab-pane fade" id="nav-delete" role="tabpanel" aria-labelledby="nav-delete-tab">
                  <Delete list={users} deleteUser={deleteUser}></Delete>
                </div>
                <div className="tab-pane fade" id="nav-list" role="tabpanel" aria-labelledby="nav-list-tab">
                  <Read list={users}></Read>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
