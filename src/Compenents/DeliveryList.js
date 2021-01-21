import React from 'react';
import Delivery from "./Delivery";
import {Table, TableBody, TableCell, TableContainer} from "@material-ui/core";

const DeliveryList = (props) => {
    const eachDelivery = (item, index) => {
        return (
            <Delivery key={item.id} index={index} onChange={props.fillInput} onDelete={props.delete}>
                <TableCell style={{borderBottom: 'none', padding: '5px'}}> {index + 1} </TableCell>
                <TableCell style={{borderBottom: 'none', padding: '5px'}}> {item.date} </TableCell>
                <TableCell style={{borderBottom: 'none', padding: '5px'}}> {item.name} </TableCell>
                <TableCell style={{borderBottom: 'none', padding: '5px'}}> {item.city} </TableCell>
            </Delivery>
        )
    }

    return (
        <TableContainer className="delivery-table" style={{height: '80%'}}>
            <Table>
                <TableBody style={{overflow: 'scroll'}}>
                    {props.deliveries.map(eachDelivery)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DeliveryList