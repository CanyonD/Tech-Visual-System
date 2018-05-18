import React, { Component } from 'react';
import './Main.css'
// import '../../../view/css/Scheme_1.css'
import Background from '../../../view/image/Scheme_1.png'

function format_id(item){
    return item.device_id + '_' + item.device_address + '_' + item.device_port + '_' + item.register
}

function element_style(item) {
    return {
        color: item.fontColor,
        backgroundColor: item.backgroundColor,
        top: item.location.top,
        left: item.location.left,
        width: item.location.width,
        height: item.location.height
    }
}

class Scheme extends Component {
  constructor() {
    super();

    var schemeItems = [ {
            id: 1,
            device_id: 'P107',
            device_address: '2',
            device_port: '4',
            register: 1,
            value: (Math.floor(Math.random() * 100) + 1),
            class: '',
            fontColor: '',
            backgroundColor: '',
            location: {
                top: '276px',
                left: '4px',
                width: '99px',
                height: '61px'
            }
        },{
            id: 2,
            device_id: 'P107',
            device_address: '2',
            device_port: '4',
            register: 2,
            value: (Math.floor(Math.random() * 100) + 1),
            class: '',
            fontColor: '',
            backgroundColor: 'blue',
            location: {
                top: '5px',
                left: '4px',
                width: '99px',
                height: '61px'
            }
        },{
            id: 3,
            device_id: 'P107',
            device_address: '2',
            device_port: '4',
            register: 3,
            value: (Math.floor(Math.random() * 100) + 1),
            class: '',
            fontColor: '',
            backgroundColor: 'pink',
            location: {
                top: '131px',
                left: '70px',
                width: '99px',
                height: '61px'
            }
        },{
            id: 4,
            device_id: 'P107',
            device_address: '2',
            device_port: '4',
            register: 4,
            value: (Math.floor(Math.random() * 100) + 1),
            class: 'circle-element h2-font',
            fontColor: '',
            backgroundColor: 'red',
            location: {
                top: '270px',
                left: '153px',
                width: '49px',
                height: '49px'
            }
        },{
            id: 5,
            device_id: 'P107',
            device_address: '2',
            device_port: '4',
            register: 5,
            value: (Math.floor(Math.random() * 100) + 1),
            class: 'circle-element h2-font',
            fontColor: '',
            backgroundColor: 'yellow',
            location: {
                top: '269px',
                left: '214px',
                width: '49px',
                height: '49px'
            }
        },{
            id: 6,
            device_id: 'P107',
            device_address: '2',
            device_port: '4',
            register: 6,
            value: (Math.floor(Math.random() * 100) + 1),
            class: 'circle-element h2-font',
            fontColor: '',
            backgroundColor: 'green',
            location: {
                top: '268px',
                left: '275px',
                width: '49px',
                height: '49px'
            }
        },{
            id: 7,
            device_id: 'P107',
            device_address: '2',
            device_port: '4',
            register: 7,
            value: (Math.floor(Math.random() * 100) + 1),
            class: 'h2-font',
            fontColor: 'yellow',
            backgroundColor: 'blueviolet',
            location: {
                top: '128px',
                left: '310px',
                width: '100px',
                height: '62px'
            }
        },{
            id: 8,
            device_id: 'P107',
            device_address: '2',
            device_port: '4',
            register: 8,
            value: (Math.floor(Math.random() * 100) + 1),
            class: 'h2-font',
            fontColor: 'yellow',
            backgroundColor: 'blueviolet',
            location: {
                top: '5px',
                left: '371px',
                width: '99px',
                height: '61px'
            }
        },{
            id: 9,
            device_id: 'P107',
            device_address: '2',
            device_port: '4',
            register: 9,
            value: (Math.floor(Math.random() * 100) + 1),
            class: 'label label-info h1-font',
            fontColor: '',
            backgroundColor: '',
            location: {
                top: '274px',
                left: '369px',
                width: '103px',
                height: '65px'
            }
        },{
            id: 10,
            device_id: 'P107',
            device_address: '2',
            device_port: '4',
            register: 10,
            value: (Math.floor(Math.random() * 100) + 1),
            class: 'btn btn-primary',
            fontColor: '',
            backgroundColor: '',
            location: {
                top: '199px',
                left: '492px',
                width: '104px',
                height: '29px'
            }
        }
    ]

    this.state = {
        schemeItems: schemeItems
    };
  }

  render() {
    return (
        <div 
            id="body" 
            style={ { backgroundImage: `url(${Background})` } }
        >
            {this.state.schemeItems.map(item =>
                <div 
                    key={ item.id } 
                    id={ format_id(item) } 
                    style={ element_style(item) } 
                    className={ item.class }
                >
                    <div>{item.value}</div>
                </div>
            )}
        </div>
    );
  }
}

export default Scheme;
