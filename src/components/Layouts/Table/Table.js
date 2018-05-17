import React, { Component } from 'react';
// import Pagination from './Pagination';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

function format_description(cell, row){
    if (typeof row !== undefined)
        return 'Устройство ' + row.device_id + 
            ' Адрес ' + row.device_address + 
            ' Порт ' + row.device_port
    else return ''
  }

function format_serial(cell, row){
    if (typeof row !== undefined)
        return row.device_id + '.' + row.device_address + '.' + row.device_port
    else return ''
}

class Table extends Component {
  constructor() {
    super();

    // an example array of items to be paged
    var exampleItems = [...Array(100).keys()].map(i => (
        { 
            id: (i+1),
            device_id: 'P107',
            device_address: '2',
            device_port: '4',
            register: '01',
            value: (Math.floor(Math.random() * 100) + 1)
        }
    ));

    this.state = {
        exampleItems: exampleItems,
        pageOfItems: []
    };

    // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
    this.onChangePage = this.onChangePage.bind(this);

    this.options = {
        defaultSortName: 'id',  // default sort column name
        defaultSortOrder: 'asc',  // default sort order
        sizePerPageList: []
      };
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return (
        <div>
            <div className="container">
                <div className="text-center">
                    {/* {this.state.pageOfItems.map(item =>
                        <div key={item.id}>{item.name}</div>
                    )} */}
                    <BootstrapTable 
                        data={this.state.exampleItems} 
                        version='4'
                        pagination
                        options={ this.options }
                    >
                        <TableHeaderColumn hidden={true} isKey dataField='id' dataSort={ true }>ID</TableHeaderColumn>
                        <TableHeaderColumn 
                            dataSort={ true }
                            dataFormat={format_serial}
                        >
                            Serial Device
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='register' dataSort={ true }>Register</TableHeaderColumn>
                        <TableHeaderColumn dataField='value' dataSort={ true }>Value</TableHeaderColumn>
                        <TableHeaderColumn 
                            dataSort={ true }
                            dataFormat={format_description}
                        >
                            Description
                        </TableHeaderColumn>
                    </BootstrapTable>
                    {/* <Pagination 
                        items={this.state.exampleItems} 
                        onChangePage={this.onChangePage} 
                    /> */}
                </div>
            </div>
        </div>
    );
  }
}

export default Table;
