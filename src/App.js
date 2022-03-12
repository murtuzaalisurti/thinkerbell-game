import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Game from './components/Game.jsx';

function App() {
  const word = [];

  const [isFirstWordTyped, setIsFirstWordTyped] = useState(false);

  useEffect(() => {
    const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const row3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
    const row4 = ['BACKSPACE'];

    document.querySelectorAll('.row').forEach((row) => {
      row.innerHTML = "";
    });

    function append(row, rownum) {
      if (rownum === 4) {
        for (let i = 0; i < row.length; i++) {
          let btn = document.createElement('button');
          btn.classList.add(`class-${row[i]}`);
          btn.innerText = 'clear';
          document.querySelector(`#row-${rownum}`).appendChild(btn);
        }
      } else {
        for (let i = 0; i < row.length; i++) {
          let btn = document.createElement('button');
          btn.classList.add(`class-${row[i]}`);
          btn.innerText = row[i];
          document.querySelector(`#row-${rownum}`).appendChild(btn);
        }
      }
    }
    append(row1, 1);
    append(row2, 2);
    append(row3, 3);
    append(row4, 4);

  }, [])

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
    setIsFirstWordTyped(true);
    if (e.key.toUpperCase() === "BACKSPACE") {
      word.pop(e.key.toUpperCase());
    } else if (e.key.toUpperCase() === "SPACE") {
      return 0;
    } else {
      word.push(e.key.toUpperCase());
    }
    console.log(e);
    document.querySelectorAll("button").forEach((btn) => {

      if (btn.classList.contains(`class-${e.key.toUpperCase()}`)) {
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
      e.addEventListener("click", () => {
        setIsFirstWordTyped(true);
        console.log(e.innerText.toLowerCase());
        e.focus();
        if (e.classList.contains('class-BACKSPACE')) {
          word.pop(e.innerText.toUpperCase());
        } else {
          word.push(e.innerText.toUpperCase());
        }
        document.querySelector('.output').innerHTML = word.join('');

        setTimeout(() => {
          e.blur();
        }, 500)
      })
    })
  })
  return (
    <>
      <Game />
    </>
  );
}

export default App;
