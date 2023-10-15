import './App.css';
import React from "react";
import crocodile from './images/crocodile-green.png';

function App() {

    const [count, setCount] = React.useState(0);

    const clickMinus = () => {
        setCount(count - 1);
    }

    const clickPlus = () => {
        setCount(count + 1);
    }

    const clickReset = () => {
        setCount(0);
    }

    return (
        <div className="App">
            <div className={"window"}>
                <h2>СЧЕТ</h2>
                <h1>{count}</h1>
                <img alt={""} src={crocodile}/>
                <br/>
                <button className="minus" onClick={clickMinus}>Уменьшить</button>
                <button className="plus" onClick={clickPlus}>Увеличить</button>
                <div>
                    <button className="reset" onClick={clickReset}>Сбросить</button>
                </div>
            </div>
        </div>
    );
}

export default App;
