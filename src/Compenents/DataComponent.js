import React, { useState } from 'react';
import DeliveryList from "./DeliveryList";
import DeliveryForm from "./DeliveryForm";
import deliveryData from "../Data/deliveries.json"

const DataComponent = () => {
    return (
        <div className={"data-container"}>
            < DeliveryList deliveryData = {deliveryData}/>
            < DeliveryForm />
        </div>
    )
}

export default DataComponent