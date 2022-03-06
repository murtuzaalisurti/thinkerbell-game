import React, { useEffect, useState, useRef } from 'react'
import { KeyboardStyle } from './styled/KeyboardStyled'

const Keyboard = () => {

    const word = [];
    // const [keyPressed, setKeyPressed] = useState({
    //     input: '',
    //     key: ''
    // });
    // const [isKeyPressed, setIsKeyPressed] = useState(false);

    useEffect(() => {
        const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
        const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
        const row3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

        document.querySelectorAll('.row').forEach((row) => {
            row.innerHTML = "";
        });

        function append(row, rownum) {
            for (let i = 0; i < row.length; i++) {
                let btn = document.createElement('button');
                btn.innerText = row[i];
                document.querySelector(`#row-${rownum}`).appendChild(btn);
            }
        }
        append(row1, 1);
        append(row2, 2);
        append(row3, 3);

    }, [])

    // useEffect(() => {
    //     document.querySelector('.output').innerHTML = keyPressed.input;
    //     setKeyPressed(prev => {
    //         return {
    //             ...prev,
    //             input: (prev.input+keyPressed.input)
    //         }
    //     });
    // }, [keyPressed])

    // document.addEventListener('keydown', (e) => {

    //     setIsKeyPressed(true);
    // })
    // console.log(keyPressed);

    const ESCAPE_KEYS = ["27", "Escape"];

    const useEventListener = (eventName, handler, element = window) => {
        const savedHandler = useRef();

        useEffect(() => {
            savedHandler.current = handler;
        }, [handler]);

        useEffect(() => {
            const eventListener = (event) => savedHandler.current(event);
            element.addEventListener(eventName, eventListener);
            return () => {
                element.removeEventListener(eventName, eventListener);
            };
        }, [eventName, element]);
    };

    const handler = (e) => {

        if(e.key.toUpperCase() === "BACKSPACE"){
            word.pop(e.key.toUpperCase());
        } else if(e.key.toUpperCase() === "SPACE"){
            return;
        } else {
            word.push(e.key.toUpperCase());
        }
        console.log(e);
        document.querySelectorAll("button").forEach((btn) => {
            if(btn.innerText.toUpperCase() === e.key.toUpperCase()){
                btn.focus();

                setTimeout(() => {
                    btn.blur();
                }, 500)
            }
        })
        document.querySelector('.output').innerHTML = word.join('');
    };
    
    useEventListener("keydown", handler);


    useEffect(() => {
        document.querySelectorAll('button').forEach((e) => {
            e.addEventListener("click", (event) => {
                console.log(e.innerText.toLowerCase());
                if(e.innerText.toUpperCase() === "BACKSPACE"){
                    word.pop(e.innerText.toUpperCase());
                } else {
                    word.push(e.innerText.toUpperCase());
                }
                document.querySelector('.output').innerHTML = word.join('');
            })
        })
    })
    
    return (
        <>
            <KeyboardStyle className='keyboard'>
                <div className="row" id="row-1"></div>
                <div className="row" id="row-2"></div>
                <div className="row" id="row-3"></div>
            </KeyboardStyle>
            <div className="output"></div>
        </>
    )
}

export default Keyboard