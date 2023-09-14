import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import MenuAppBar from './components/nav3';
import Dash from './pages/Dash';
import Loads from './pages/Loads';
import DataGridDemo from './pages/payroll';
import { darkTheme, lightTheme } from './theme'; // Assuming you have separate theme files
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const mode = darkMode ? 'dark' : 'light';

    const handleThemeChange = () => {
        setDarkMode(!darkMode);
    };

    const currentTheme = createTheme({
        palette: {
            mode,
            primary: {
                main: '#81c784',
                light: '#42a5f5',
                dark: '#81c784',
                contrastText: '#fff',
            },
            secondary: {
                main: '#ffa000',
            },
            warning: {
                main: '#ff8a65',
            },
            divider: '#818181',
            spacing: 8,
            
        },
    });

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <MenuAppBar darkMode={darkMode} handleThemeChange={handleThemeChange} />
            <Box>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Dash />} />
                        <Route index element={<Dash />} />
                        <Route path="/Loads" element={<Loads />} />
                        <Route path="/payrolldash" element={<DataGridDemo />} />
                    </Routes>
                </BrowserRouter>
            </Box>
        </ThemeProvider>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));

