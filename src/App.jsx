import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import TodoList from "./TodoList";

function App() {
  return (
      <Container maxWidth="xl">
        <CssBaseline />
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6">
              My Todos
            </Typography>
          </Toolbar>
        </AppBar>
        <TodoList />
      </Container>
  );
}

export default App
