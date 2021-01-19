import React, {Component} from 'react';

class DeliveryForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: props.formInputs.name,
            city: props.formInputs.city,
            date: props.formInputs.date,
        }

        this.inputChanged = this.inputChanged.bind(this)
        this.save = this.save.bind(this)
        this.submitBtn = this.submitBtn.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (this.props.formInputs !== prevProps.formInputs) {
            this.setState({
                name: this.props.formInputs.name,
                city: this.props.formInputs.city,
                date: this.props.formInputs.date,
            })
        }
    }

    inputChanged(event) {
        event.preventDefault();
        const key = event.target.name
        const value = event.target.value
        this.setState({
            [key]: value
        })
    }

    save(event) {
        event.preventDefault()

        if (this.state.name === 'Name') {
            alert("Please enter Name")
            return;
        }
        if (this.state.city === 'City') {
            alert("Please enter City")
            return;
        }
        if (this.state.date === '') {
            alert("Please enter Date")
            return;
        }

        const newDelivery = {
            name: this.state.name,
            date: this.state.date,
            city: this.state.city
        }
        this.setState({
            name: 'Name',
            date: '',
            city: 'City'
        })

        if (this.props.editing === true) {
            this.props.onEdit(newDelivery, this.props.formInputs.id)
        } else {
            newDelivery.id = null
            this.props.onAdd(newDelivery)
        }
    }

    submitBtn() {
        if (this.props.editing === true)
            return (<p>Update</p>)
        else
            return (<p>Save</p>)
    }

    render() {
        return (
            <div className={'delivery-form'}>
                <input type={'date'} name={'date'} value={this.state.date} onChange={this.inputChanged}/>
                <input type={'text'} name={'name'} value={this.state.name} onChange={this.inputChanged}/>
                <input type={'text'} name={'city'} value={this.state.city} onChange={this.inputChanged}/>
                <button id={'submit'} onClick={this.save}>{this.submitBtn()}</button>
            </div>
        )
    }
}

export default DeliveryForm