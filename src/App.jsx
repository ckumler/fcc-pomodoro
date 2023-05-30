import BreakGroup from "./components/BreakGroup.jsx";
import SessionGroup from "./components/SessionGroup.jsx";
import TimerGroup from "./components/TimerGroup.jsx";
import { useState, useEffect } from "react";

function App() {
    const [sessionLength, setSessionLength] = useState(25);
    const [breakLength, setBreakLength] = useState(5);
    const [timerLength, setTimerLength] = useState(30);

    return (
        <>
            <main className="container">
                <article>
                    <header>
                        <hgroup>
                            <h1>Pomodoro</h1>
                            <h3>"25 + 5" Clock</h3>
                        </hgroup>
                    </header>
                    <div className="grid">
                        <BreakGroup
                            breakLength={breakLength}
                            setBreakLength={setBreakLength}
                        />
                        <SessionGroup
                            sessionLength={sessionLength}
                            setSessionLength={setSessionLength}
                        />
                    </div>
                    <TimerGroup />
                    <footer>Made by CKumler</footer>
                </article>
            </main>
        </>
    );
}

export default App;
