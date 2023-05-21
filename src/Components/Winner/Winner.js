import React, {Component} from 'react';
import {connect} from "react-redux";
import {generateBoard} from "../../../Reducers/game_logic";
import s from './Winner.module.css'


class WinnerSection  extends Component {

    render () {
        return <div className={s.winner}>
            The winner is : {this.props.winner}
            <br/><br/>
                To start a new game press the button below :
            <button className={s.button} onClick={
                () => this.props.generateBoard([...Array(9)], this.props.generate_XO)
            }>New Game</button>
        </div>

    }
}






export default connect(null, {generateBoard})(WinnerSection)