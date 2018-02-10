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
                                    [ "wmbd", "12MM White Mocha", "15.10", "12x165 1215mm", "500", "0", "24", "524","north"] ,
                                    [ "sm", "12MM Siberian Maple", "21.96", "12x125 1215mm", "712", "60", "33", "805","north"] ,
                                    [ "SR", "12MM White Mocha", "15.10", "12x165 1215mm", "400", "75", "20", "495","north"] ,
                                    [ "SmB", "12MM White Mocha", "15.10", "12x165 1215mm", "500", "98", "77", "675","north"] ,
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
