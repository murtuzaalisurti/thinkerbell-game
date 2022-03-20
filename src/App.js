import React, { useEffect, useRef } from 'react';
import './App.css';
import Game from './components/Game.jsx';

function App() {
  const word = [];
  var date, date2, difference;

  useEffect(() => {
    const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const row3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
    const row4 = ['BACKSPACE', 'ENTER'];

    document.querySelectorAll('.row').forEach((row) => {
      row.innerHTML = "";
    });

    function append(row, rownum) {
      if (rownum === 4) {
        for (let i = 0; i < row.length; i++) {
          let btn = document.createElement('button');
          btn.classList.add(`class-${row[i]}`);
          if(row[i] === "ENTER"){
            btn.innerText = 'Enter';
          } else {
            btn.innerText = 'Clear';
          }
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
    if (e.key.toUpperCase() === "BACKSPACE") {
      word.pop(e.key.toUpperCase());
    } else if (e.key.toUpperCase() === "SPACE") {
      return 0;
    } else if(e.key.toUpperCase() === "ENTER"){
      console.log(typing_time(date));
    } else {
      word.push(e.key.toUpperCase());
    }


    if(word.length === 1){
      date = new Date().getTime();
    }


    document.querySelectorAll("button").forEach((btn) => {

      if (btn.classList.contains(`class-${e.key.toUpperCase()}`)) {
        btn.style.borderColor = "black";

        setTimeout(() => {
          btn.style.borderColor = "transparent";
        }, 150)
      }
    })
    document.querySelector('.output').innerHTML = word.join('');
  };

  useEventListener("keydown", handler);

  useEffect(() => {
    document.querySelectorAll('button').forEach((e) => {
      e.addEventListener("click", () => {

        e.style.borderColor = "black";

        if (e.classList.contains('class-BACKSPACE')) {
          word.pop(e.innerText.toUpperCase());
        } else if(e.classList.contains('class-ENTER')){
          console.log(typing_time(date));
        } else {
          word.push(e.innerText.toUpperCase());
        }

        if(word.length === 1){
          date = new Date().getTime();
        }

        document.querySelector('.output').innerHTML = word.join('');

        setTimeout(() => {
          e.style.borderColor = "transparent";
        }, 150)
      })
    })
  })

  function typing_time(date){
    date2 = new Date().getTime();
    difference = date2 - date;
    word.length = 0;
    console.log(word)
    return (difference/1000).toFixed(2);
  }

  return (
    <>
      <Game />
    </>
  );
}

export default App;
