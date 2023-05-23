import s from './History.module.css'


const History = (state) => {
    let history = []
    history[1] = "1cvnv"
    history[2] = "3nvchm b"
    history[3] = "4nbvmnbm"
    history[4] = "5nmvbnm"
    history[5] = "6mnvbnm"
    history[6] = "7nmbvmbnv"

    history[7] = "8"



    return <div className={s.outputBar}>


        {history.map((item, index) => (
            <p key={index}>{item}</p>
        ))}
    </div>
}

export default History