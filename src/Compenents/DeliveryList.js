import React from 'react';
import Delivery from "./Delivery";

const eachDelivery = (item) => {
    return (
        <Delivery delivery={item}/>
    )
}

const DeliveryList = ({deliveryData}) => {

    return (
        <div>
            <table className="delivery-table">
                <tbody>
                    {deliveryData.map(eachDelivery)}
                </tbody>
            </table>
        </div>
    )
}

export default DeliveryList;