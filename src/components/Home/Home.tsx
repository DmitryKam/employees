import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import styles from './Home.module.css'
import Button from '@material-ui/core/Button';
import {Path} from '../../routes/Routes';





export const Home = () => {


    return (
        <Card className={styles.homeContainer}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant={'h5'} component="h2">
                        React
                    </Typography>
                    <Typography variant={"body2"} color={'textSecondary'} component={'p'}>
                        С использованием библиотеки React реализовать приложение, которое умеет
                        показывать следующие страницы: ● / — главная ● /employees — страница со
                        списком сотрудников На сайте, в шапке реализовать ссылки: ● Главная ●
                        Сотрудники Получение данных должно быть реализованно посредством вызова
                        стороннего api — https://reqres.in/api/users?per_page=12 Страница
                        Сотрудники содержит простой список сотрудников (только имена), на ней
                        также есть возможность удаления и добавления нового сотрудника.
                        Разумеется, отправлять результаты добавления и удаления никуда не нужно —
                        их просто должно быть видно в текущем представлении. Оформление (дизайн) —
                        не важно.
                    </Typography>
                    <Button variant={'contained'} color={'secondary'} href={Path.EMPLOYEES}>
                        Go To Employees List
                    </Button>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}




