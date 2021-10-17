import React, { Component } from 'react';
import Details from './Details'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data.map(ele => {
                ele.isActive = false;
                return ele;
            }),
            details: null
        }
    }

    userData;

    handleSelect = (value, count) => {
        this.setState({
            details : value,
            data : this.state.data.map((ele, index) => {
                if(index === count){
                    ele.isActive = true;
                }else{
                    ele.isActive = false;
                }
                return ele
            }),
        });      
    }

    handleSearch = (e) => {
        let input = e.target.value.toLowerCase();
        if(input){

            let filterData = this.state.data.filter(ele => {
                if(ele.firstName.toLowerCase().includes(input)){
                    return ele;
                }else if(ele.lastName.toLowerCase().includes(input)){
                    return ele;
                }else if(ele.email.toLowerCase().includes(input)){
                    return ele;
                }else{
                    return null
                }
            })

            this.setState({
                details : null,
                data : filterData
                })
        }else{
            this.setState({
                data : this.userData
            })
        }
    }
    

    render() {
        this.userData = this.props.data.map(ele => {
            ele.isActive = false;
            return ele;
        });
        return (
            <div className="main-section">
                <div id="table-section">
                    <form action="/">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                        <input type="text" placeholder="Enter something" name="search-box" id="search-box" onChange={ this.handleSearch } />
                    </form>

                    <div id="table-wrapper">

                        <div id="table-headers">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="column1">Id</th>
                                        <th className="column2">FirstName</th>
                                        <th className="column3">LastName</th>
                                        <th className="column4">Email</th>
                                        <th className="column5">Phone</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>

                        <div id="table-data">
                            <table>
                                <tbody>
                                    {
                                        this.state.data.map((ele, index) => {
                                            let{id, firstName, lastName, email, phone, isActive} = ele;
                                            return <tr onClick={ () => this.handleSelect(ele, index) } key={index+1} className={ isActive ? "data-row active" : "data-row" }>
                                            <td className="column1">{id}</td>
                                            <td className="column2">{firstName}</td>
                                            <td className="column3">{lastName}</td>
                                            <td className="column4">{email}</td>
                                            <td className="column5">{phone}</td>
                                        </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>



                <div id="info-wrapper">
                    <h1>Details</h1>
                    <p>Click on a table item to get detailed information</p>
                    {this.state.details ? <Details details={this.state.details}/> : '' }
                </div>

            </div>
        )
    }
}
