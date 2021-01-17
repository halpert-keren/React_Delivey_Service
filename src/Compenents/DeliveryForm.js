import React, {useState} from 'react';

const DeliveryForm = () => {
    return (
        <form>
            <input type={'date'} name={'date'} placeholder={'Date'}/>
            <input type={'text'} name={'name'} placeholder={'Name'}/>
            <input type={'text'} name={'city'} placeholder={'City'}/>
            <button id={'submit'}><p>Save</p></button>
        </form>
    )
}

export default DeliveryForm