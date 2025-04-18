'use client';

import React, { useState, useEffect } from 'react';
import { themes } from '@/styles/themes';
import styles from './Calculator.module.css';

const Calculator = () => {
    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<string>('');
    const [currentTheme, setCurrentTheme] = useState<number>(0);

    const buttons = [
        'C', '(', ')', '/',
        '7', '8', '9', '*',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '0', '.', '⌫', '=',
    ];

    // 키보드 입력을 처리하는 함수
    const handleKeyPress = (event: KeyboardEvent) => {
        const key = event.key;
        
        // Enter 키 처리
        if (key === 'Enter') {
            event.preventDefault();
            handleButtonClick('=');
            return;
        }
        
        // 숫자, 연산자, 소수점 입력 처리
        if (/^[0-9.+\-*/()\r=]$/.test(key)) {
            event.preventDefault();
            handleButtonClick(key);
        }
        // Backspace 키 처리
        else if (key === 'Backspace') {
            event.preventDefault();
            handleButtonClick('⌫');
        }
        // Escape 키로 Clear 처리
        else if (key === 'Escape') {
            event.preventDefault();
            handleButtonClick('C');
        }
    };

    // 컴포넌트가 마운트될 때 키보드 이벤트 리스너 등록
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        
        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [input]); // input이 변경될 때마다 이벤트 리스너 갱신

    const handleButtonClick = (value: string) => {
        switch (value) {
            case 'C':
                setInput('');
                setResult('');
                break;
            case '=':
                try {
                    const evalResult = eval(input);
                    setResult(evalResult.toString());
                    // 결과값에 따라 테마 변경
                    setCurrentTheme((prevTheme) => (prevTheme + 1) % themes.length);
                } catch (error) {
                    setResult('Error');
                }
                break;
            case '⌫':
                setInput(input.slice(0, -1));
                break;
            default:
                setInput(input + value);
        }
    };

    return (
        <div className={styles.calculator} style={{
            backgroundColor: themes[currentTheme].background,
            color: themes[currentTheme].text
        }}>
            <div className={styles.display}>
                <div className={styles.input}>{input || '0'}</div>
                <div className={styles.result}>{result}</div>
            </div>
            <div className={styles.buttons}>
                {buttons.map((btn) => (
                    <button
                        key={btn}
                        onClick={() => handleButtonClick(btn)}
                        className={`${styles.button} ${isNaN(Number(btn)) ? styles.operator : ''}`}
                        style={{
                            backgroundColor: themes[currentTheme].buttonBackground,
                            color: themes[currentTheme].buttonText
                        }}
                    >
                        {btn}
                    </button>
                ))}
            </div>
            <div className={styles.keyboard_hint}>
                Press ESC to clear, Enter to calculate
            </div>
        </div>
    );
};

export default Calculator; 