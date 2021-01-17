import React, { useState } from 'react';
import './styles/DeliveryService.css'
import DataComponent from "./DataComponent";
import Truck from "./Truck";

const DeliveryService = () => {
    return (
        <div className={'main-container'}>
            < DataComponent />
            < Truck />
        </div>
    )
}

export default DeliveryService