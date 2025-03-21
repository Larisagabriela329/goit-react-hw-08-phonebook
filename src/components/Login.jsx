import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, TextField, Typography } from '@mui/material';
import { loginUser } from '../redux/authSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async event => {
        event.preventDefault();
        dispatch(loginUser({email, password}));
    };
    
    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
        <Typography variant="h4">Login</Typography>
        <TextField
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
        />
        <TextField
            label="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
        />
        <Button type="submit" variant="contained" color="primary">
            Login
        </Button>
        </Box>
    );
};

export default Login;