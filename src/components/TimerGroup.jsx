function TimerGroup({}) {
    return (
        <article className="counter-section" id="timer">
            <h2 id="timer-label">Session</h2>
            <div className="grid">
                <h3 className="counter-text" id="time-left">
                    mm:ss
                </h3>
                <button id="start_stop">Start/Stop</button>
                <button id="reset">Reset</button>
            </div>
        </article>
    );
}

export default TimerGroup;
