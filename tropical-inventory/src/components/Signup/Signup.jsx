import React from 'react';
import {
    withStyles, Table, TableHead, TableRow, TableBody, TableCell
} from 'material-ui';
import PropTypes from 'prop-types';

import { tableStyle } from 'variables/styles';

class CustomTable extends React.Component {
    render(){
        const { classes, tableHead, tableData, tableHeaderColor } = this.props;
        return (
                    <div>
            <label for="first_namtext" ClassName="col-md-3 control-label">First Name</label>
            <input type="text" ClassName="form-control" id="first_name" placeholder="First Name" />
        </div>

        <div>
            <label for="last_name" ClassName="col-md-3 control-label">Last Name</label>
            <input type="text" ClassName="form-control" id="last_name" placeholder="Last Name" />
        </div>

        <div>
            <label for="mob_no" ClassName="col-md-3 control-label">Mobile Number</label>
            <input type="text" ClassName="form-control" id="mob_no" placeholder="Mobile Number" />
        </div>

        <div>
            <label for="user_name" ClassName="col-md-3 control-label">User Name</label>
            <input type="text" ClassName="form-control" id="user_name" placeholder="User Name" />
        </div>

        <div>
            <label for="password" ClassName="col-md-3 control-label">Password</label>
            <input type="password" ClassName="form-control" id="password" placeholder="Password" />
        </div>

        <div>
            <label for="position" ClassName="col-md-3 control-label">Position</label>
            <input type="text" ClassName="form-control" id="position" placeholder="position" />
        </div>

        <div>
            <button id="btn-signup" type="button" ClassName="btn btn-info"><i ClassName="icon-hand-right"></i>Create</button>
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
