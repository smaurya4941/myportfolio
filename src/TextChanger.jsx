import React, { useEffect, useState } from 'react';

const TextChanger = () => {
  const texts = ['Sachin Maurya', 'Web Developer', 'Software Developer'];
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
          setTimeout(() => setIsForward(false), 1000);
        }
      } else if (endValue > 0) {
        setEndValue((prev) => prev - 1);
      } else {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [endValue, index, isForward, texts]);

  return (
    <div className="min-h-[2.5rem] transition ease duration-300">
      {currentText}
    </div>
  );
};

export default TextChanger;
