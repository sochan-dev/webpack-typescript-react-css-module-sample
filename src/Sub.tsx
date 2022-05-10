import React,{FC} from 'react'

type Props = {
    msg:string
}

export const Sub:FC<Props> = (props) => {
    const {msg} = props
    return (
        <h2>{msg}!!!</h2>
    )
}