
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useState } from 'react';




export const darkTheme = createTheme({
    palette: {
        mode:"light",
        primary: {
            main: '#1976d2',
            light: '#42a5f5',
            dark: '#1565c0',
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
        }
});

