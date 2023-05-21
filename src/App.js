import React from "react";
import Board from "./Components/Board/Board";
import s from './App.module.css'
import reportWebVitals from './reportWebVitals';


const App = (props) => {
    return <div className={s.App}>
        <div><Board/></div>
        {/*<div className={s.history}><History/></div>*/}

    </div>

}


export default App
