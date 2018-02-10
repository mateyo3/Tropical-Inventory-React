import React from 'react';
import {
    Grid
} from 'material-ui';

import {
    RegularCard, Table, ItemGrid, Button
} from 'components';

class StockControl extends React.Component{
    render(){
        return (
            <Grid container>
                <ItemGrid xs={12} sm={12} md={12}>
                    <RegularCard
                        headerColor="orange"
                        cardTitle="Stock Control Table"
                        cardSubtitle="Type in Items to Transfer Below:"
                        content={
                            <Table
                                tableHeaderColor="info"
                                tableHead={['Item Name','Quantity', 'From', 'To', '']}
                                tableData={[
                                    [   
                                    <input id="name" className="form-control" placeholder="Type in Item Name"/> ,
                                    <input id="amount" className="form-control" placeholder="Type in Quantity"/>,
                                    <select id="locationfrom">
                                        <option value="wh1">Warehouse 1</option>
                                        <option value="wh2">Warehouse 2</option>
                                        <option value="wh3">Warehouse 3</option>
                                    </select>,
                                    <select id="locationto">
                                        <option value="wh2">Warehouse 2</option>
                                        <option value="wh1">Warehouse 1</option>
                                        <option value="wh3">Warehouse 3</option>
                                    </select>,
                                    <Button color="info" type="button" id="transfer" className="btn btn-default">Transfer Inventory</Button>

                                    ] ,
                                 
                                ]}
                            />
                        }
                    />
                </ItemGrid>
            </Grid>
        );
    }
}

export default StockControl;
