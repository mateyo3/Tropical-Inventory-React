import React from 'react';
import {
    Grid,
} from 'material-ui';

import {
    ProfileCard, RegularCard, Button, CustomInput, ItemGrid
} from 'components';


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    render(){
        return (
            <div>
                <Grid container>
                    <ItemGrid xs={12} sm={12} md={8}>
                        <RegularCard
                            headerColor="green"
                            cardTitle="User Login"
                            cardSubtitle=""
                            content={
                                <div>
                                    <Grid container>
                                        <ItemGrid xs={12} sm={12} md={6}>
                                            <CustomInput
                                                labelText="Username"
                                                id="username"
                                                onChange = {(event,newValue) => this.setState({username:newValue})}
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                            />
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={6}>
                                            <CustomInput
                                                labelText="Password"
                                                id="password"
                                                type="password"
                                                onChange = {(event,newValue) => this.setState({password:newValue})}
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                            />
                                        </ItemGrid>
                                    </Grid>
                                </div>
                            }
                            footer={
                                <Button color="info" href="/dashboard">Login</Button>
                            }
                        />
                    </ItemGrid>
                </Grid>
            </div>
        );
    }
}

export default Login;