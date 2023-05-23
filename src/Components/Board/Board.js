import React, {Component} from "react";
import {connect} from "react-redux";
import {changePlayer, generateBoard, setSquareValue, setWinner} from "../../Reducers/game_logic";
import Square from "../Square/Square";
import WinnerSection from "../Winner/Winner";
import s from './Board.module.css'


class Board extends Component {


    componentDidMount() {
        this.props.generateBoard([...Array(9)], generate_XO())
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.board !== this.props.board) {
            this.props.setWinner(checkWinner(this.props.board))
        }
    }


    render() {

        return <div>
            <div className={s.board_container}>
                {this.props.board.map((item, index) => <Square
                    setSquareValue={this.props.setSquareValue}
                    squareIndex={index}
                    winner = {this.props.winnerState}
                    key={index}
                    squareValue={item}
                    XO_changer={XO_changer(this.props.playerOn)}
                    changePlayer={this.props.changePlayer}
                >
                </Square>)}


            </div>

            {/*<Test XO_changer={XO_changer(this.props.playerOn)}/>*/}
            {(this.props.winnerState === 'X' || this.props.winnerState ==='O' || this.props.winnerState==='DRAW') ?
            <WinnerSection winner={this.props.winnerState} generate_XO={generate_XO()}/>
            : null}
        </div>


    }
}

function generate_XO() {
    const alphabet = "XO"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}




function XO_changer(XO) {
    return (XO === 'X') ? XO = 'O' : XO = 'X'
}

function checkWinner(board) {
    let winner = undefined

    if (board.every((item) => item !== undefined)) {winner="DRAW"}
    if (board[0] === board[1] && board[0] === board[2] && board[0] !== undefined) return board[0]
    if (board[0] === board[3] && board[0] === board[6] && board[0] !== undefined) return board[0]
    if (board[0] === board[4] && board[0] === board[8] && board[0] !== undefined) return board[0]
    if (board[1] === board[4] && board[1] === board[7] && board[1] !== undefined) return board[1]
    if (board[2] === board[5] && board[2] === board[8] && board[2] !== undefined) return board[2]
    if (board[2] === board[4] && board[6] === board[2] && board[2] !== undefined) return board[2]
    if (board[3] === board[4] && board[3] === board[5] && board[3] !== undefined) return board[3]
    if (board[6] === board[7] && board[6] === board[8] && board[6] !== undefined) return board[6]
    return winner
}


const mapStateToProps = (state) => {
    return {
        board: state.gamePage.board,
        cellCounter: state.gamePage.cellCounter,
        playerOn: state.gamePage.playerOn,
        winnerState: state.gamePage.winner
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        changePlayer: (player) => {dispatch(changePlayer(player))},
        setSquareValue: (value) => {dispatch(setSquareValue(value))},
        generateBoard : (board, playerOn) => {dispatch(generateBoard(board, playerOn))},
        setWinner: (winner) => {dispatch(setWinner(winner))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Board)