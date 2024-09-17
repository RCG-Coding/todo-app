import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, Alert, Box } from '@mui/material';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const { login } = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
        }),
        onSubmit: (values) => {
            const isLoggedIn = login(values.email, values.password);

            if (isLoggedIn) {
                setSuccess(true);
                setError(false);

                setTimeout(() => {
                    navigate('/todos');
                }, 1000);
            } else {
                setError(true);
                setSuccess(false);
            }
        },
    });

    return (

        <Box
            sx={{
                width: '50%',  
                margin: '0 auto',  
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',  
                justifyContent: 'center',
                minHeight: '100vh',  
            }}
        >

        <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
            <Typography variant="h4">Login</Typography>

            <TextField
                fullWidth
                margin="normal"
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
                fullWidth
                margin="normal"
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />

            <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                sx={{ mt: 2 }}
            >
                Login
            </Button>

            {success && (
                <Alert severity="success" sx={{ mt: 2 }}>
                    Login successful! Redirecting to your todo list...
                </Alert>
            )}

            {error && (
                <Alert severity="error" sx={{ mt: 2 }}>
                    Invalid login credentials. Please try again.
                </Alert>
            )}
        </form>
        </Box>
    );
};

export default LoginForm;
