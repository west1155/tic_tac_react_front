import React from 'react';
import s from './Square.module.css'
import { useSelector } from 'react-redux';



const Square = (props) => {

    const history = useSelector((state) => state.gamePage.history)
    let onButtonClick = () => {
        props.setSquareValue(props.squareIndex);
        props.changePlayer(props.XO_changer);
        history.push(props.playerOn + ' --------> '  + props.squareIndex)
    }


    return (<div disabled={
        props.winner === 'X' || props.winner === 'O'
    } onClick={() => {onButtonClick()}} className={s.button}>{props.squareValue}
    </div>
    )
}
export default Square

