import React from 'react';
import {
    withStyles, Table, TableHead, TableRow, TableBody, TableCell
} from 'material-ui';
import PropTypes from 'prop-types';

import { tableStyle } from 'variables/styles';

class CustomTable extends React.Component {
       state = {
        productCode: [],
        description: [],
        SF_Box: [],
        quantity: [],
        wh2: [],
        wh3: [],
        total: [],
        location: []
    }
    componentDidMount() {
        this.tableData();
    }
    tableData = () => {
        API.getInventory()
            .then(res =>
                this.setState({productCode: res.data, description: res.data, SF_Box: res.data, quantity: res.data, wh2: res.data, wh3: res.data, total: res.data, location: res.data})
                )
            .catch(err => console.log(err));
    };
    render(){
        const { classes, tableHead, tableData, tableHeaderColor } = this.props;
        return (
            <div className={classes.tableResponsive}>
                <Table className={classes.table}>
                    {
                        tableHead !== undefined ? (
                            <TableHead className={classes[tableHeaderColor+"TableHeader"]}>
                                <TableRow>
                                    {
                                        tableHead.map((prop,key) => {
                                            return (
                                                <TableCell
                                                    className={classes.tableCell + " " + classes.tableHeadCell}
                                                    key={key}>
                                                    {prop}
                                                </TableCell>
                                            );
                                        })
                                    }
                                </TableRow>
                            </TableHead>
                        ):null
                    }
                    <TableBody>
                        {
                            tableData.map((prop,key) => {
                                return (
                                    <TableRow key={key}>
                                        {
                                            prop.map((prop,key) => {
                                                return (
                                                    <TableCell
                                                        className={classes.tableCell}
                                                        key={key}>
                                                        {prop}
                                                    </TableCell>
                                                );
                                            })
                                        }
                                    </TableRow>
                                );
                            })
                        }
                    </TableBody>
                </Table>
            </div>
        );
    }
}

CustomTable.defaultProps = {
    tableHeaderColor: 'gray'
}

CustomTable.propTypes = {
    classes: PropTypes.object.isRequired,
    tableHeaderColor: PropTypes.oneOf(['warning','primary','danger','success','info','rose','gray']),
    tableHead: PropTypes.arrayOf(PropTypes.string),
    tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default withStyles(tableStyle)(CustomTable);
