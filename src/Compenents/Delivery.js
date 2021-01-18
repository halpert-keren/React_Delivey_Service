import React, { Component } from 'react';

class Delivery extends Component {
    constructor(props) {
        super(props)

        this.edit = this.edit.bind(this)
        this.delete = this.delete.bind(this)
    }

    edit() {
        this.props.onChange(this.props.index)
    }

    delete() {
        this.props.onDelete(this.props.index)
    }

    render() {
        return(
            <tr>
                {this.props.children}
                <td>
                    <button onClick={this.edit}>edit</button>
                    <button onClick={this.delete}>delete</button>
                </td>
            </tr>
        )
    }
}

export default Delivery