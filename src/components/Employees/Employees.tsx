import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';

import {EmployeeType} from '../../api/employeeApi';
import Employee from './Employee/Emplyee';
import styles from './Employees.module.css';
import {getEmployees} from '../../services/employee';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge/Badge';
import FaceIcon from '@material-ui/icons/Face';

const Employees = () => {

    const [employees, setEmployees] = useState<EmployeeType[]>([]);
    const [employeeName, setEmployeeName] = useState<string>('');


    useEffect(() => {
        getEmployees().then((data) => setEmployees(data));
    }, []);


    const handleEmployeeNameChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmployeeName(e.currentTarget.value)
    }


    const handleAddEmployeeClick = () => addEmployee({id: Math.random() * Math.floor(200), first_name: employeeName});

    const addEmployee = useCallback((employee: EmployeeType) => {
        setEmployees((currentEmployees) => [...currentEmployees, employee]);
        setEmployeeName('')
    }, []);

    const deleteEmployee = useCallback((removeId: number) => {
        setEmployees((currentEmployees) =>
            currentEmployees.filter(({id}) => id !== removeId)
        );
    }, []);


    return (
        <div className={styles.addEmployeeForm}>
            <div className={styles.addEmployeeContainer}>
                <div className={styles.employeeBlockHeader}>Add New Employee</div>
                <div>
                    <TextField id={'outlined-basic'} label={'Add employee'} variant={'outlined'}
                               onChange={handleEmployeeNameChange} value={employeeName}/>
                </div>
                <div className={styles.buttonAddEmployeeContainer}>
                    <Button variant="contained" color="secondary" disabled={employeeName === ''}
                            onClick={handleAddEmployeeClick}>
                        Add employee
                    </Button>
                </div>
            </div>

            <div className={styles.employeesBlock}>
                <div className={styles.employeeBlockHeader}>
                    Employees list
                    <Badge badgeContent={employees.length} color={'secondary'}>
                        <FaceIcon/>
                    </Badge>
                </div>
                <div className={styles.employeesContainer}>{employees.map(({id, first_name}) => (<Employee
                            key={id}
                            id={id}
                            firstName={first_name}
                            deleteEmployee={deleteEmployee}
                        />
                    )
                )}</div>
            </div>
        </div>
    );
};

 export default Employees;
