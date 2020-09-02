import React, { useState } from 'react';
import {useMutation} from "@apollo/client";
import {LOGIN_USER} from "../../data/queries/users";
import {
    Grid,
    TextField,
    Button,
    CircularProgress
} from "@material-ui/core";

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [callLogin, { loading, error }] = useMutation(LOGIN_USER);

    const makeLogin = async () => {
        try {
            const res = await callLogin({
                variables: {
                    email: email,
                    password: password
                }
            });
            const token = res.data.authToken.token;
            localStorage.setItem('auth_token', token);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="container mt-50">
            <form noValidate autoComplete="off">
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                        <TextField type="email"
                                   label="Email"
                                   variant="outlined"
                                   onChange={event => setEmail(event.target.value)} />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField type="password"
                                   label="Password"
                                   variant="outlined"
                                   onChange={event => setPassword(event.target.value)} />
                    </Grid>
                    <Grid item xs={12} >
                        {
                            error &&
                            <p>Error on login</p>
                        }
                        <Button variant="contained"
                                disabled={loading}
                                onClick={() => makeLogin()}
                                color="primary" >
                            {
                                loading
                                    ? <CircularProgress size={24} />
                                    : 'Login'
                            }
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default UserLogin;
