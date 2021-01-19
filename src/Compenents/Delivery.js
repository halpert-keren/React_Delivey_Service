import React from 'react';

const Delivery = (props) => {

    const editDelivery = () => {
        props.onChange(props.index)
    }

    const deleteDelivery = () => {
        props.onDelete(props.index)
    }

    return (
        <tr>
            {props.children}
            <td>
                <button onClick={editDelivery}>edit</button>
                <button onClick={deleteDelivery}>delete</button>
            </td>
        </tr>
    )
}

export default Delivery