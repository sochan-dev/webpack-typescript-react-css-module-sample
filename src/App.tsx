import React,{FC} from 'react'
import {Sub} from './Sub'
import Styles from './styles/css/app.module.css'


export const App:FC = () => {
    return (
        <div className={Styles.root}>
        <h1 className={Styles.msg}>webpack × typescript × react</h1>
        <Sub msg={'gorgeous'}/>
        </div>
    )
}