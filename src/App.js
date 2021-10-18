import React, { Component } from 'react';
import axios from 'axios';
import Loader from './components/Loader';
import Table from './components/Main';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loader: true,
      data: []
    }
  }

  async componentDidMount() {
    let response = await axios.get('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D');
    this.setState({
      loader: false,
      data: response.data
    })
  }


  render() {
    console.log(this.state.data);
    return (
      <div className="app-section">
        {this.state.loader ? <Loader/> : <Table data={this.state.data}/>}
      </div>
    )
  }
}

