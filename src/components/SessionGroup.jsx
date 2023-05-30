function SessionGroup({ sessionLength, setSessionLength }) {
    const sessionLengthMax = 999;
    function incSessionLength() {
        if (sessionLength < sessionLengthMax) {
            setSessionLength((i) => i + 1);
        }
    }
    function decSessionLength() {
        if (sessionLength > 1) {
            setSessionLength((i) => i - 1);
        }
    }
    return (
        <article className="counter-section" id="session">
            <h2 id="session-label">Session Length</h2>
            <div className="grid">
                <button
                    className="secondary"
                    id="session-decrement"
                    onClick={decSessionLength}
                >
                    -
                </button>
                <h3 className="counter-text" id="session-length">
                    {sessionLength}
                </h3>

                <button
                    className="secondary"
                    id="session-increment"
                    onClick={incSessionLength}
                >
                    +
                </button>
            </div>
        </article>
    );
}

export default SessionGroup;
