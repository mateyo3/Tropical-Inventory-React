import React from 'react';
import {
    withStyles, Table, TableHead, TableRow, TableBody, TableCell
} from 'material-ui';
import PropTypes from 'prop-types';

import { tableStyle } from 'variables/styles';

class CustomTable extends React.Component {

  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    password: ""
  };

handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.firstName || !this.state.lastName) {
      alert("Fill out your first and last name please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state
          .lastName}`
      );
    } else {
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    }

    this.setState({
      firstName: "",
      lastName: "",
      mob_no: "",
      username: "",
      password: "",
      position: ""
    });
  };

    render(){
        const { classes, tableHead, tableData, tableHeaderColor } = this.props;
        return (
        <form className="form">
        <input
            value={this.state.firstName}
            name="first)Name"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
        <div>
          <input
            value={this.state.lastName}
            name="last_Name"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div>
            <input
              value={this.state.mob_no}
              name="mob_no"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Mobile Number"
            />
        </div>
        
        <div>
            <input
              value={this.state.user_name}
              name="user_name"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Username"
            />
        </div>

       <div>
            <input
              value={this.state.password}
              name="password"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Password"
            />
        </div> 

       <div>
            <input
              value={this.state.position}
              name="position"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Position"
            />
        </div>

            <button id="btn-signup" type="button" ClassName="btn btn-info" onClick={this.handleFormSubmit}><i ClassName="icon-hand-right"></i>Create</button>
        </form>
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
