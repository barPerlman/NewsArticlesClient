
import React, {useEffect, useRef, useState} from 'react';

interface LiveTypeWriterProps {
    text: string;
    speed: number;
}

/**
 * This component renders a paragraph with live type writing animation
 * @param text - the text to display
 * @param speed - the interval time to write the next char of text
 */
const LiveTypewriter: React.FC<LiveTypeWriterProps> = ({ text, speed=50}) => {
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const [displayedText, setDisplayedText] = useState('');
    const currentIndexRef = useRef(0);

    useEffect(() => {
        currentIndexRef.current = 0;

        const intervalId = setInterval(() => {
            setDisplayedText((prev) => {
                const nextCharToType = text[currentIndexRef.current]
                if (nextCharToType){
                    return prev + nextCharToType;
                }
                return prev;
            });
            currentIndexRef.current++;

            if (currentIndexRef.current >= text.length) {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed]);

    // keep the scroll position to see the bottom of the text in case it overflowed y axis
    useEffect(() => {
        if (paragraphRef.current) {
            paragraphRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [displayedText]);

    return (<p ref={paragraphRef}>{displayedText}</p>);
};

export default LiveTypewriter;
