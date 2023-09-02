import React from 'react';
import s from './Square.module.css'
import { useSelector } from 'react-redux';



const Square = (props) => {
    
    // selects history from state
    const history = useSelector((state) => state.gamePage.history)
    
    
    // Methods to make step (X or O)
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

