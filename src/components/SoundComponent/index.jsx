import React, { useRef, useEffect } from "react";

export const SoundComponent = ({ playSound }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (playSound) {
            audioRef.current.play();
        }
    }, [playSound]);

    return (
        <audio ref={audioRef} src="/party.mp3" muted />
    );
};