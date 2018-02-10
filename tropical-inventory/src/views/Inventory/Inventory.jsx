import React from 'react';
import {
    Grid
} from 'material-ui';

import {
    RegularCard, Table, ItemGrid,
} from 'components';

class Inventory extends React.Component{
    render(){
        return (
            <Grid container>
                <ItemGrid xs={12} sm={12} md={12}>
                    <RegularCard
                        headerColor="orange"
                        cardTitle="Inventory Table"
                        cardSubtitle="Inventory List"
                        content={
                            <Table
                                tableHeaderColor="info"
                                tableHead={['ID','Description','SF_Box','Dimension', 'WH1','WH2','WH3','Total', 'Location']}
                                tableData={[
                                    [ " ", " ", " ", " ", " ", " ", " ", " "," "] ,
                                ]}
                            />
                        }
                    />
                </ItemGrid>
            </Grid>
        );
    }
}

export default Inventory;
