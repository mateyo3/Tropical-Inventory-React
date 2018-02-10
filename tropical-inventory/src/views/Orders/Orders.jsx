import React from 'react';
import {
    Grid
} from 'material-ui';

import {
    RegularCard, Table, ItemGrid , Button
} from 'components';


class Orders extends React.Component{

    state = {
        productCode: [],
        quantity: [],
        month: [],
        date: [],
        year: [],
    }
    
    ordersReceive = () => {
        this.setState({productCode: this.state.productCode })
    }
    orderSend = () => {
        this.setState({})
    }
    render(){
        return (
            <Grid container>
                <ItemGrid xs={12} sm={12} md={12}>
                    <RegularCard
                        headerColor="orange"
                        cardTitle="Orders Table"
                        cardSubtitle="Enter Items Below:"
                        content={
                            <Table
                                tableHeaderColor="info"
                                tableHead={['ID','Quantity','Month','Date', 'Year', '', '']}
                                tableData={[
                                    [   <input id="ordersid" className = "form-control" placeholder = "Enter ID here"/> ,
                                        <input id="ordersquantity" className = "form-control" placeholder = "Type in Quantity"/> ,
                                        <select id="ordersmonth" className="month" name="month" form="monthform">
                                            <option value="">JAN</option>
                                            <option value="">FEB</option>
                                            <option value="">MAR</option>
                                            <option value="">APR</option>
                                            <option value="">MAY</option>
                                            <option value="">JUN</option>
                                            <option value="">JUL</option>
                                            <option value="">AUG</option>
                                            <option value="">SEP</option>
                                            <option value="">OCT</option>
                                            <option value="">NOV</option>
                                            <option value="">DEC</option>
                                        </select> , 
                                        <select id="ordersday" className="date" name="date" form="dateform">
                                            <option value="01">01</option>
                                            <option value="">02</option>
                                            <option value="">03</option>
                                            <option value="">04</option>
                                            <option value="">05</option>
                                            <option value="">06</option>
                                            <option value="">07</option>
                                            <option value="">08</option>
                                            <option value="">09</option>
                                            <option value="">10</option>
                                            <option value="">11</option>
                                            <option value="">12</option>
                                            <option value="">13</option>
                                            <option value="">14</option>
                                            <option value="">15</option>
                                            <option value="">16</option>
                                            <option value="">17</option>
                                            <option value="">18</option>
                                            <option value="">19</option>
                                            <option value="">20</option>
                                            <option value="">21</option>
                                            <option value="">22</option>
                                            <option value="">23</option>
                                            <option value="">24</option>
                                            <option value="">25</option>
                                            <option value="">26</option>
                                            <option value="">27</option>
                                            <option value="">28</option>
                                            <option value="">29</option>
                                            <option value="">30</option>
                                            <option value="">31</option>
                                        </select>,
                                        <select id="ordersyear" class="year" name="year" form="yearform"> 
                                            <option value="2016">2016</option>  
                                            <option value="2017">2017</option>
                                            <option value="2018">2018</option>
                                            <option value="2019">2019</option>
                                            <option value="2020">2020</option>
                                        </select>,
                                        <Button color="info" type="button" id="ordersreceive" className="btn btn-default">Receive Inventory</Button>,
                                        <Button color="info" type="button" id="orderssend" className="btn btn-default">Send Inventory</Button> ,
                                        ],
                                        
                                ]}
                            />
                        }
                    />
                </ItemGrid>
            </Grid>
        );
    }
}

export default Orders;
