import React from 'react';
import Delivery from "./Delivery";

const DeliveryList = ({deliveryData}) => {

    return (
        <div>
            <table className="delivery-table">
                <tbody>
                    {deliveryData.map(<Delivery delivery={this}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default DeliveryList;