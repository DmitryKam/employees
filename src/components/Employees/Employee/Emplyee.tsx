import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import CardActionArea from '@material-ui/core/CardActionArea';
import Paper from '@material-ui/core/Paper';

import styles from './Employee.module.css'


type EmployeePropsType = {
    firstName: string
    id: number
    deleteEmployee: (id: number) => void
}


export const Employee: React.FC<EmployeePropsType> = React.memo(({firstName, id, deleteEmployee}) => {


    const onClickHandler = () => {
        deleteEmployee(id)
    }

    return <Grid item xs={6} md={4}>

        <div className={styles.employeeCards}>
            <CardActionArea>
                <Paper elevation={3}>
                    <List>
                        <ListItem>
                            <ListItemText
                                primary={firstName}
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={onClickHandler}>
                                    <DeleteIcon/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </Paper>
            </CardActionArea>
        </div>
    </Grid>
})