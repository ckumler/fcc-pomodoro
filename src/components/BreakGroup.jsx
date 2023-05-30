function BreakGroup({ breakLength, setBreakLength, isRunning }) {
    const breakLengthMax = 60;
    function incBreakLength() {
        if (breakLength < breakLengthMax) {
            setBreakLength((i) => i + 1);
        }
    }
    function decBreakLength() {
        if (breakLength > 1) {
            setBreakLength((i) => i - 1);
        }
    }
    return (
        <article className="counter-section" id="break">
            <h2 id="break-label">Break Length</h2>
            <div className="grid">
                <button
                    className="secondary"
                    id="break-decrement"
                    onClick={isRunning ? null : decBreakLength}
                >
                    -
                </button>
                <h3 className="counter-text" id="break-length">
                    {breakLength}
                </h3>
                <button
                    className="secondary"
                    id="break-increment"
                    onClick={isRunning ? null : incBreakLength}
                >
                    +
                </button>
            </div>
        </article>
    );
}

export default BreakGroup;
