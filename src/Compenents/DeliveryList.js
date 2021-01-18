import React, {Component} from 'react';
import Delivery from "./Delivery";
import DeliveryForm from "./DeliveryForm";

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
        this.props.deliveries.map(item => this.add({
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
                <td> {index + 1} </td>
                <td> {item.name} </td>
                <td> {item.city} </td>
                <td> {item.date} </td>
            </Delivery>
        )
    }

    render() {
        return (
            <>
                <table className="delivery-table">
                    <tbody>
                    {this.state.deliveries.map(this.eachDelivery)}
                    </tbody>
                </table>
                <DeliveryForm formInputs={this.state.formInputs} editing={this.state.editing} onAdd={this.add} onEdit={this.update}/>
            </>
        )
    }
}

export default DeliveryList