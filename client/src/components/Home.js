import React from 'react';
import { Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
            }}
        >
            <h1>Welcome to the Home Page</h1>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={() => navigate('/login')} 
                sx={{ marginBottom: 2, width: '200px' }}
            >
                Login
            </Button>
            <Button 
                variant="contained" 
                color="secondary" 
                onClick={() => navigate('/register')} 
                sx={{ width: '200px' }}
            >
                Register
            </Button>
        </Box>
    );
};

export default Home;
