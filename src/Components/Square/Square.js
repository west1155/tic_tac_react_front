import React from 'react';
import s from './Square.module.css'

const Square = (props) => {

    let onButtonClick = () => {
        props.setSquareValue(props.squareIndex);
        props.changePlayer(props.XO_changer);
    }
    return (<div disabled={
        props.winner === 'X' || props.winner === 'O'
    } onClick={() => {onButtonClick()}} className={s.button}>{props.squareValue}</div>)
}
export default Square

