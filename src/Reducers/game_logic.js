import square from "../Components/Square/Square";

const CREATE_BOARD = 'CREATE_BOARD'
const SET_ITEM_VALUE = 'SET_ITEM_VALUE'
const CHANGE_PLAYER = 'CHANGE_PLAYER'
const SET_WINNER = 'SET_WINNER'


const initialState = {
    isLoaded: false,
    board: [],
    cellCounter: 0,
    history: []
}


const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_BOARD:
            return {
                ...state,
                board: action.board,
                playerOn: action.playerOn,
                cellCounter: action.cellCounter,
                winner: null,
                isLoaded: true
            }

        case CHANGE_PLAYER:
            return {
                ...state,
                playerOn: action.playerOn
            }
        case SET_ITEM_VALUE:
            return {
                ...state,
                board: state.board.map((item, index) => {
                    if (index === action.squareIndex && !item) {
                        return (item = state.playerOn)

                    }

                    return item
                })


            }


        case SET_WINNER:
            return {
                ...state,
                winner: action.winner
            }

        default:
            return state;
    }

}

export const generateBoard = (board, playerOn) => ({type: CREATE_BOARD, board, playerOn})
export const changePlayer = (playerOn) => ({type: CHANGE_PLAYER, playerOn})


export const setWinner = (winner) => ({type: SET_WINNER, winner})
export const setSquareValue = (squareIndex) => ({type: SET_ITEM_VALUE, squareIndex});


export default gameReducer




