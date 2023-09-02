import s from './History.module.css'
import React from "react";
import { useSelector } from 'react-redux';



const History = () => {


    // Puts variable state from state
    // eslint-disable-next-line
    const state = useSelector(state => state)


    // takes variable history from state
    const history = useSelector((state) => state.gamePage.history)


    return <div className={s.outputBar}>
        {history.map((item, index) => (<p key={index}>{item}</p>))}

    </div>
}



export default History