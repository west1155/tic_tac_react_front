import s from './History.module.css'


const History = (state) => {
    let history = []
    history[1] = "1"
    history[2] = "3"
    history[3] = "4"
    history[4] = "5"
    history[5] = "6"
    history[6] = "7"

    history[7] = "8"



    return <div className={s.outputBar}>


        {history.map((item, index) => (
            <p key={index}>{item}</p>
        ))}
    </div>
}

export default History