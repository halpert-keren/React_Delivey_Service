import React from 'react';
import { Route } from 'react-router-dom';
import DeliveryService from "../Compenents/DeliveryService";

const ReactRouter = () => {
    return (
        <>
            <Route exact path="/" component={ DeliveryService }/>
        </>
    )
}

export default ReactRouter