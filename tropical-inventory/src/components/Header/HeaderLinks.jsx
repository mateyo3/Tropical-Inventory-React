import React from 'react';
import {
    Person, Notifications, Dashboard, Search,
} from 'material-ui-icons';
import {
    withStyles, IconButton, Hidden
} from 'material-ui';

import { CustomInput, IconButton as SearchButton } from 'components';

import { headerLinksStyle } from 'variables/styles';

class HeaderLinks extends React.Component{
    state = {
      open: false,
    };
    handleClick = () => {
      this.setState({ open: !this.state.open });
    };

    handleClose = () => {
      this.setState({ open: false });
    };
    render(){
        const { classes } = this.props;
        const { open } = this.state;
        return (
            <div>
                <CustomInput
                    formControlProps={{
                        className: classes.top + " " + classes.search
                    }}
                    inputProps={{
                        placeholder:"Search",
                        inputProps:{
                            'aria-label': 'Search',
                        }
                    }}/>
                <SearchButton color="white" aria-label="edit" customClass={classes.top + " " + classes.searchButton}>
                    <Search className={classes.searchIcon}/>
                </SearchButton>
                <IconButton color="inherit" aria-label="Dashboard" className={classes.buttonLink}>
                    <Dashboard className={classes.links}/>
                    <Hidden mdUp>
                        <p className={classes.linkText}>Dashboard</p>
                    </Hidden>
                </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="Notifications"
                            aria-owns={open ? 'menu-list' : null}
                            aria-haspopup="true"
                            onClick={this.handleClick} className={classes.buttonLink}>
                            <Notifications className={classes.links}/>
                            <Hidden mdUp>
                                <p onClick={this.handleClick} className={classes.linkText}>Notification</p>
                            </Hidden>
                        </IconButton>
                <IconButton color="inherit" aria-label="Person" className={classes.buttonLink}>
                    <Person className={classes.links}/>
                    <Hidden mdUp>
                        <p className={classes.linkText}>Profile</p>
                    </Hidden>
                </IconButton>
            </div>
        );
    }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
