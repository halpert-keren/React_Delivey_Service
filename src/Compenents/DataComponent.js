import React, {Component} from 'react';
import DeliveryForm from "./DeliveryForm";
import Deliveries from "../Data/deliveries.json";
import DeliveryList from "./DeliveryList";

class DataComponent extends Component {
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

    render() {
        return (
            <div className={'scene'}>
                <div className={'content-area'}>
                    <DeliveryList deliveries={this.state.deliveries} delete={this.delete} fillInput={this.fillInput} />
                    <DeliveryForm formInputs={this.state.formInputs} editing={this.state.editing} onAdd={this.add}
                                  onEdit={this.update}/>
                </div>
            </div>
        )
    }
}

export default DataComponent