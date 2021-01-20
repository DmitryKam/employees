import React from 'react'
import s from './Error404.module.css';

export const Error404 = () => {

    const myClassName = 'far fa-question-circle fa-spin'

    return (
        <div className={s.body}>
            <div className={s.mainbox}>
                <div className={s.err}>4</div>
                <div className={s.far}><i className={myClassName}/></div>

                <div className={s.err2}>4</div>
                <div className={s.msg}>Maybe this page moved? Got deleted?
                    Is hiding out in quarantine? Never existed in
                    the first place?
                    <p>Let's go <a className={s.a} href={'/'}>home</a> and try from there.</p>
                </div>
            </div>
        </div>
    )
}