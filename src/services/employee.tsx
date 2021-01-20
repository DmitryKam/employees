import {employeesAPI} from '../api/employeeApi';

export const getEmployees = async () => {
    const response = await employeesAPI.getEmployees();

    return response.data.data;
};
