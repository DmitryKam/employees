import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://reqres.in/api/',

});

export const employeesAPI = {
    getEmployees() {
        return instance.get<ResponseType<EmployeeType[]>>('users?per_page=12');
    },
};

export type ResponseType<D = {}> = {
    data: D;
    page: number;
    per_page: number;
    support: SupportType;
    total: number;
    total_pages: number;
};

type SupportType = {
    text: string;
    url: string;
};

export type EmployeeType = {
    first_name: string;
    id: number;
    //avatar: string;
    //email: string;
    //last_name: string;
};
