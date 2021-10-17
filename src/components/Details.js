import React, { Component } from 'react'

export default class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        let {firstName, lastName, description, address} = this.props.details
        return (
                    <div id="info-content">
                        <div><b>User selected:</b> {`${firstName} ${lastName}`}</div>
                        <div>
                            <b>Description: </b>
                            <textarea cols="50" rows="5" value={description}>
                                
                            </textarea>
                        </div>
                        <div><b>Address:</b> {address.streetAddress} </div>
                        <div><b>City:</b> {address.city} </div>
                        <div><b>State:</b> {address.state} </div>
                        <div><b>Zip:</b> {address.zip} </div>
                    </div>
        )
    }
}
