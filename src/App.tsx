import React from 'react';

import './App.module.css';
import Routes, {Path} from './routes/Routes';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import {Menu} from '@material-ui/icons/';
import styles from './App.module.css'


const App = () => {


    return (<div>
            <AppBar position={'static'}>
                <Toolbar>
                    <IconButton edge={'start'} color={'inherit'} aria-label={'menu'}>
                        <Menu/>
                    </IconButton>
                    <Typography variant={'h6'} >
                        <Button variant={'contained'} color={'primary'} href={Path.HOME}>
                            Home
                        </Button>
                        <Button variant={'contained'} color={'primary'} href={Path.EMPLOYEES}>
                            Employees
                        </Button>
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={styles.routeContainer}>
                <Routes/>
            </div>
        </div>
    );
}

export default App;
