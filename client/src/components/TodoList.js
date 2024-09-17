import React, { useState, useEffect } from 'react';
import { List,TextField, ListItem, ListItemText, IconButton, Checkbox, Button, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        description: Yup.string().required('Description is required'),
    });

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if (editingIndex !== null) {
                const updatedTodos = [...todos];
                updatedTodos[editingIndex] = { title: values.title, description: values.description, completed: false };
                setTodos(updatedTodos);
                setEditingIndex(null);
            } else {
                setTodos([...todos, { title: values.title, description: values.description, completed: false }]);
            }
            formik.resetForm();
        },
    });

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos'));
        if (savedTodos) {
            setTodos(savedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const toggleComplete = (index) => {
        const updatedTodos = todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const editTodo = (index) => {
        formik.setValues({
            title: todos[index].title,
            description: todos[index].description,
        });
        setEditingIndex(index);
    };

    return (
        <Box sx={{ width: '500px', margin: '0 auto' }}>
            <h2>Todo List</h2>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    label="Title"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                    margin="normal"
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                />
                <TextField
                    label="Description"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                    margin="normal"
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    {editingIndex !== null ? 'Update Todo' : 'Add Todo'}
                </Button>
            </form>

            <List>
                {todos.map((todo, index) => (
                    <ListItem key={index}>
                        <Checkbox checked={todo.completed} onClick={() => toggleComplete(index)} />
                        <ListItemText
                            primary={todo.title}
                            secondary={todo.description}
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                        />
                        <IconButton onClick={() => editTodo(index)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => deleteTodo(index)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default TodoList;
