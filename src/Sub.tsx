import React,{FC} from 'react'
import Styles from './styles/css/sub.module.css'

type Props = {
    msg:string
}

export const Sub:FC<Props> = (props) => {
    const {msg} = props
    return (
        <div className={Styles.root}>
            <h2  className={Styles.msg}>{msg}!!!</h2>
        </div>
        
    )
}