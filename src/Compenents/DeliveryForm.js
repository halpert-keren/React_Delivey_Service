import React, {useEffect, useState} from 'react';

const DeliveryForm = (props) => {
    const [inputName, setName] = useState(props.formInputs.name);
    const [inputDate, setDate] = useState(props.formInputs.name);
    const [inputCity, setCity] = useState(props.formInputs.name);

    useEffect(() => {
        setDate(props.formInputs.date);
    }, [props.formInputs.date]);

    useEffect(() => {
        setName(props.formInputs.name);
    }, [props.formInputs.name]);

    useEffect(() => {
        setCity(props.formInputs.city);
    }, [props.formInputs.city]);

    const save = (event) => {
        event.preventDefault()

        if (inputName === 'Name') {
            alert("Please enter Name")
            return;
        }
        if (inputCity === 'City') {
            alert("Please enter City")
            return;
        }
        if (inputDate === '') {
            alert("Please enter Date")
            return;
        }

        const newDelivery = {
            name: inputName,
            date: inputDate,
            city: inputCity
        }

        setName('Name')
        setCity('City')
        setDate('')

        if (props.editing === true) {
            props.onEdit(newDelivery, props.formInputs.id)
        } else {
            newDelivery.id = null
            props.onAdd(newDelivery)
        }
    }

    const submitBtn = () => {
        if (props.editing === true)
            return (<p>Update</p>)
        else
            return (<p>Save</p>)
    }

        return (
            <div className={'delivery-form'}>
                <input type={'date'} name={'date'} value={inputDate} onChange={e => setDate(e.target.value)}/>
                <input type={'text'} name={'name'} value={inputName} onChange={e => setName(e.target.value)}/>
                <input type={'text'} name={'city'} value={inputCity} onChange={e => setCity(e.target.value)}/>
                <button id={'submit'} onClick={save}>{submitBtn()}</button>
            </div>
        )

}

export default DeliveryForm