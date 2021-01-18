import React from 'react';
import DeliveryList from "./DeliveryList";
import Deliveries from "../Data/deliveries.json";

const DataComponent = () => {
    return (
        <div className='data-container'>
            <DeliveryList deliveries={Deliveries}/>
        </div>
    )
}

export default DataComponent