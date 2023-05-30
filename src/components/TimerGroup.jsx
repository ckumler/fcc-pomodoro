import React, { useState, useEffect, useRef } from "react";

function TimerGroup({
    sessionLength,
    setSessionLength,
    breakLength,
    setBreakLength,
    isRunning,
    setIsRunning,
}) {
    const [isSession, setIsSession] = useState(true);
    const [timeLeft, setTimeLeft] = useState(sessionLength * 60);

    const audioElement = useRef(null);
    const intervalId = useRef(null);

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            intervalId.current = setInterval(() => {
                setTimeLeft((timeLeft) => timeLeft - 1);
            }, 1000);
        } else if (isRunning && timeLeft === 0) {
            audioElement.current.play();
            intervalId.current = setInterval(() => {
                setTimeLeft((timeLeft) => timeLeft - 1);
            }, 1000);
        } else if (isRunning && timeLeft === 0) {
            setIsSession(!isSession);
            setTimeLeft((isSession ? breakLength : sessionLength) * 60);
        } else {
            clearInterval(intervalId.current);
        }

        return () => {
            clearInterval(intervalId.current);
        };
    }, [isRunning, timeLeft, isSession, sessionLength, breakLength]);

    useEffect(() => {
        setTimeLeft(isSession ? sessionLength * 60 : breakLength * 60);
    }, [sessionLength, breakLength]);

    const toggleTimer = () => {
        setIsRunning(!isRunning);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setIsSession(true);
        setBreakLength(5);
        setSessionLength(25);
        setTimeLeft(25 * 60);
        audioElement.current.pause();
        audioElement.current.currentTime = 0;
    };

    const formatTimeLeft = () => {
        const minutes = Math.floor(timeLeft / 60);
        const remainderSeconds = timeLeft % 60;
        return `${minutes < 10 ? "0" : ""}${minutes}:${
            remainderSeconds < 10 ? "0" : ""
        }${remainderSeconds}`;
    };

    return (
        <article className="counter-section" id="timer">
            <h2 id="timer-label">{isSession ? "Session" : "Break"}</h2>
            <div className="grid">
                <h3 className="counter-text" id="time-left">
                    {formatTimeLeft()}
                </h3>
                <button id="start_stop" onClick={toggleTimer}>
                    {isRunning ? "Stop" : "Start"}
                </button>
                <button id="reset" onClick={resetTimer}>
                    Reset
                </button>
                <audio id="beep" ref={audioElement} src="./alarm.mp3" />
            </div>
        </article>
    );
}

export default TimerGroup;
