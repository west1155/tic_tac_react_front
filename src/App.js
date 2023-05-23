import React from "react";
import Board from "./Components/Board/Board";
import s from './App.module.css'
import History from "./Components/History/History";

const App = (props) => {
    return <div className={s.App}>
        <h1 className={s.h1}> TIC-TAC-TOE</h1>
        <div className={s.board}><Board/></div>
        <div className={s.history}><History /></div>
    </div>

}


export default App
