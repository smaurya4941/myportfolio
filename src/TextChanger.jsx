import React, { useState, useEffect } from 'react';

const TextChanger = () => {
    const texts = ["I'm Sachin Maurya", 'Web Developer'];
    const [currentText, setCurrentText] = useState('');
    const [index, setIndex] = useState(0);
    const [endValue, setEndValue] = useState(1);
    const [isForward, setIsForward] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentText(texts[index].substring(0, endValue));

            if (isForward) {
                if (endValue < texts[index].length) {
                    setEndValue((prev) => prev + 1);
                } else {
                    setTimeout(() => setIsForward(false), 1000); // Pause before erasing
                }
            } else {
                if (endValue > 0) {
                    setEndValue((prev) => prev - 1);
                } else {
                    setIsForward(true);
                    setIndex((prev) => (prev + 1) % texts.length); // Move to next text
                }
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, [endValue, isForward, index, texts]);

    return (
        <div className="transition ease duration-300">
            &nbsp;{currentText}
        </div>
    );
};

export default TextChanger;
