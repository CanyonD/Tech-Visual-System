import React, { Component } from 'react';
import Pagination from './Pagination';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


class Table extends Component {
  constructor() {
    super();

    // an example array of items to be paged
    var exampleItems = [...Array(1500).keys()].map(i => (
        { 
            id: (i+1), 
            name: 'Item ' + (i+1),
            value: (i+1)
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
                        <TableHeaderColumn isKey dataField='id' dataSort={ true }>ID</TableHeaderColumn>
                        <TableHeaderColumn dataField='name' dataSort={ true }>Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='value' dataSort={ true }>Value</TableHeaderColumn>
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
