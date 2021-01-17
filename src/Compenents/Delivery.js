import React, { useState } from 'react';

const Delivery = ({ delivery }) => {
    return (
        <tr>
            <td>{delivery.id}</td>
            <td>{delivery.date}</td>
            <td>{delivery.name}</td>
            <td>{delivery.city}</td>
        </tr>
    )
}

export default Delivery