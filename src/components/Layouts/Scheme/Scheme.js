import React, { Component } from 'react';
import './Main.css'
import '../../../view/css/Scheme_1.css'
import Background from '../../../view/image/Scheme_1.png'

function format_id(item){
    return item.device_id + '_' + item.device_address + '_' + item.device_port + '_' + item.register
}

class Scheme extends Component {
  constructor() {
    super();

    // an example array of items to be paged
    var exampleItems = [...Array(10).keys()].map(i => (
        { 
            id: (i+1),
            device_id: 'P107',
            device_address: '2',
            device_port: '4',
            register: (i+1),
            value: (Math.floor(Math.random() * 100) + 1)
        }
    ));

    this.state = {
        exampleItems: exampleItems
    };
  }

  render() {
    return (
        <div 
            id="body" 
            style={ { backgroundImage: `url(${Background})` } }
        >
            {this.state.exampleItems.map(item =>
                <div key={item.id} id={format_id(item)}>
                    <div>{item.value}</div>
                </div>
            )}
        </div>
    );
  }
}

export default Scheme;
