
import React, {useEffect, useRef, useState} from 'react';

interface LiveTypeWriterProps {
    text: string;
    speed: number;
}

const LiveTypewriter: React.FC<LiveTypeWriterProps> = ({ text, speed=50}) => {
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            setDisplayedText((prev) => {
                const nextCharToType = text[currentIndex]
                if (nextCharToType){
                    return prev + nextCharToType;
                }
                return prev;
            });
            currentIndex++;

            if (currentIndex === text.length) {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed]);

    useEffect(() => {
        if (paragraphRef.current) {
            paragraphRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [displayedText]);

    return (<p ref={paragraphRef}>{displayedText}</p>);
};

export default LiveTypewriter;
