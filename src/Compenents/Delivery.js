import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {TableRow, TableCell} from "@material-ui/core";


const Delivery = (props) => {

    const editDelivery = () => {
        props.onChange(props.index)
    }

    const deleteDelivery = () => {
        props.onDelete(props.index)
    }

    return (
        <TableRow >
            {props.children}
            <TableCell className={'item-buttons'} style={{borderBottom: 'none', padding: '5px'}}>
                <IconButton onClick={editDelivery} size={'small'} style={{color: '#ffffff', background: '#ee4d47', marginRight: '5%'}}>
                    <EditIcon/>
                </IconButton>
                <IconButton onClick={deleteDelivery} size={'small'} style={{color: '#ffffff', background: '#ee4d47'}}>
                    <DeleteIcon/>
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

export default Delivery