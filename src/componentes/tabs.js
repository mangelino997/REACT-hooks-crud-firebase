import React, { Fragment } from 'react';

const Tabs = () => {
    return (
        <Fragment>
            <nav>
                <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-add-tab" data-toggle="tab" href="#nav-add" 
                    role="tab" aria-controls="nav-add" aria-selected="true">Agregar</a>
                    <a className="nav-item nav-link" id="nav-update-tab" data-toggle="tab" href="#nav-update" 
                    role="tab" aria-controls="nav-update" aria-selected="false">Actualizar</a>
                    <a className="nav-item nav-link" id="nav-delete-tab" data-toggle="tab" href="#nav-delete" 
                    role="tab" aria-controls="nav-delete" aria-selected="false">Eliminar</a>
                    <a className="nav-item nav-link" id="nav-list-tab" data-toggle="tab" href="#nav-list" 
                    role="tab" aria-controls="nav-list" aria-selected="false">Listar</a>
                </div>
            </nav>
        </Fragment>
    );
}

export default Tabs;