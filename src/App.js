import React, { useEffect, useRef } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { updateTypedWord, updateTypedWord_RemoveLetter, removeWord, updateStartedTypingTime, updateWordTypeSpeed } from './redux-toolkit/aSlice';
import './App.css';
import Game from './components/Game.jsx';

function App() {
  const dispatch = useDispatch();

  const typed_word = useSelector((state) => {
    return state.rootReducer.typedWord;
  });
  
  let newTypedWord = Object.keys(typed_word).map((key) => {
    return typed_word[key];
  })
  
  let startTypingTime = useSelector((state) => {
    return state.rootReducer.startTyping;
  })

  let wordTypeSpeed = useSelector((state) => {
    return state.rootReducer.wordTypeSpeed;
  })

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
    
    if(e.which >= 65 && e.which <= 90){
      newTypedWord.push(e.key.toUpperCase());
      dispatch(updateTypedWord(newTypedWord));
    } else {
      if (e.key.toUpperCase() === "BACKSPACE") {
        newTypedWord.pop()
        
        dispatch(updateTypedWord_RemoveLetter(newTypedWord))
      } else if (e.key.toUpperCase() === "SPACE") {
        return 0;
      } else if(e.key.toUpperCase() === "ENTER"){
        typing_time(startTypingTime);
      }
    }


    if(typed_word.length === 0){
      let beginTime = new Date().getTime();
      dispatch(updateStartedTypingTime(beginTime))
    }


    document.querySelectorAll("button").forEach((btn) => {

      if (btn.classList.contains(`class-${e.key.toUpperCase()}`)) {
        btn.style.borderColor = "black";

        setTimeout(() => {
          btn.style.borderColor = "transparent";
        }, 150)
      }
    })
  };
  
  useEventListener("keydown", handler);
  
  useEffect(() => {
    
    document.querySelector('.output').innerHTML = typed_word.join('');
    document.querySelectorAll('button').forEach((e) => {
      e.addEventListener("click", () => {

        e.style.borderColor = "black";

        if (e.classList.contains('class-BACKSPACE')) {
          newTypedWord.pop();
          dispatch(updateTypedWord_RemoveLetter(newTypedWord));
        } else if(e.classList.contains('class-ENTER')){
          typing_time(startTypingTime);
          console.log(speed_in_seconds)
        } else {
          newTypedWord.push(e.innerText.toUpperCase());
          dispatch(updateTypedWord(newTypedWord))
        }

        if(typed_word.length === 0){
          let begin = new Date().getTime();
          dispatch(updateStartedTypingTime(begin));
        }

        document.querySelector('.output').innerHTML = typed_word.join('');

        setTimeout(() => {
          e.style.borderColor = "transparent";
        }, 150)
      })
    })
  })

  function typing_time(startTypingTime){
    dispatch(updateWordTypeSpeed(new Date().getTime() - startTypingTime))
    dispatch(removeWord())
  }

  let speed_in_seconds = (wordTypeSpeed/1000).toFixed(2);
  console.log(speed_in_seconds)

  return (
    <>
      <Game />
    </>
  );
}

export default App;
