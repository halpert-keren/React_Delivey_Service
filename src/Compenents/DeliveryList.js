import React, {Component} from 'react';
import Delivery from "./Delivery";
import DeliveryForm from "./DeliveryForm";
import Deliveries from "../Data/deliveries.json";
import {Table, TableBody, TableCell, TableContainer} from "@material-ui/core";

class DeliveryList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            deliveries: [],
            formInputs: {
                id: null,
                name: 'Name',
                date: '',
                city: 'City'
            },
            editing: false
        }

        this.eachDelivery = this.eachDelivery.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
        this.add = this.add.bind(this)
        this.nextId = this.nextId.bind(this)
        this.fillInput = this.fillInput.bind(this)
    }

    componentDidMount() {
        Deliveries.map(item => this.add({
            id: item.id,
            name: item.name,
            date: item.date,
            city: item.city
        }))
    }

    fillInput(index) {
        this.setState(prevState => ({
            editing: true,
            formInputs: {
                id: prevState.deliveries[index]["id"],
                name: prevState.deliveries[index]["name"],
                city: prevState.deliveries[index]["city"],
                date: prevState.deliveries[index]["date"]
            }
        }))
    }

    update(newDelivery, id) {
        this.setState(prevState => ({
                editing: false,
                deliveries: prevState.deliveries.map(
                    delivery => {
                        if (delivery.id === id) {
                            delivery.name = newDelivery.name
                            delivery.city = newDelivery.city
                            delivery.date = newDelivery.date
                        }
                        return delivery
                    }
                )
            }
        ))
    }

    delete(id) {
        this.setState(prevState => ({
            deliveries: prevState.deliveries.filter((delivery, i) => i !== id)
        }))
    }

    add(newDelivery) {
        this.setState(prevState => ({
            deliveries: [
                ...prevState.deliveries, {
                    id: newDelivery.id !== null ? newDelivery.id : this.nextId(prevState.deliveries),
                    name: newDelivery.name,
                    date: newDelivery.date,
                    city: newDelivery.city
                }]
        }))
    }

    nextId(deliveries = []) {
        let max = deliveries.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id, 0);
        return ++max;
    }

    eachDelivery(item, index) {
        return (
            <Delivery key={item.id} index={index} onChange={this.fillInput} onDelete={this.delete}>
                <TableCell style={{borderBottom: 'none', padding: '5px'}}> {index + 1} </TableCell>
                <TableCell style={{borderBottom: 'none', padding: '5px'}}> {item.date} </TableCell>
                <TableCell style={{borderBottom: 'none', padding: '5px'}}> {item.name} </TableCell>
                <TableCell style={{borderBottom: 'none', padding: '5px'}}> {item.city} </TableCell>
            </Delivery>
        )
    }

    render() {
        return (
            <div className={'scene'}>
                <div className={'content-area'}>
                    <TableContainer className="delivery-table" style={{height: '80%'}}>
                        <Table>
                            <TableBody style={{overflow: 'scroll'}}>
                                {this.state.deliveries.map(this.eachDelivery)}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <DeliveryForm formInputs={this.state.formInputs} editing={this.state.editing} onAdd={this.add}
                                  onEdit={this.update}/>
                </div>
            </div>
        )
    }
}

export default DeliveryList