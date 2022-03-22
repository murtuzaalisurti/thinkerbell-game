import React, { useEffect, useRef } from 'react';
import {useSelector, useDispatch, batch} from 'react-redux';
import { updateTypedWord, updateTypedWord_RemoveLetter, removeWord, removeCurrentWord, updateStartedTypingTime, updateWordTypeSpeed, updateWordTypeSpeedSeconds, updateScore, updateMultiplier } from './redux-toolkit/aSlice';
import './App.css';
import Game from './components/Game.jsx';
import GameOver from './components/GameOver';
import Score from './components/Score';

function App() {
  const dispatch = useDispatch();

  const currentWords = useSelector((state) => {
    return state.rootReducer.words;
  })

  const typed_word = useSelector((state) => {
    return state.rootReducer.typedWord;
  });
  
  let newTypedWord = Object.keys(typed_word).map((key) => {
    return typed_word[key];
  })
  
  let startTypingTime = useSelector((state) => {
    return state.rootReducer.startTyping;
  })

  let score = useSelector((state) => {
    return state.rootReducer.score;
  })

  let multiplier = useSelector((state) => {
    return state.rootReducer.multiplier;
  })

  let isGameOver = useSelector((state) => {
    return state.rootReducer.isGameOver;
  })

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
          btn.classList.add('key');
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
          btn.classList.add('key');
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
        if(!isGameOver){
          typing_time(startTypingTime);
          let currentwordsduplicate = currentWords.filter((word) => {
            if(word.toUpperCase() === typed_word.join('').toUpperCase()){
              return false;
            } else {
              return true;
            }
          });
  
          if(currentWords.length !== currentwordsduplicate.length){
            batch(() => {
              dispatch(updateMultiplier(multiplier+1))
              dispatch(updateScore())
            })          
          } else {
            if(multiplier >= 0){
              dispatch(updateMultiplier(1))
            }
          }
          console.log(currentWords.length === currentwordsduplicate.length)
          dispatch(removeCurrentWord(currentwordsduplicate))
        }
      }
    }

    if(typed_word.length === 0){
      let beginTime = new Date().getTime();
      dispatch(updateStartedTypingTime(beginTime))
    }


    document.querySelectorAll(".key").forEach((btn) => {

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
    document.querySelectorAll('.key').forEach((e) => {
      e.addEventListener("click", () => {

        e.style.borderColor = "black";

        if (e.classList.contains('class-BACKSPACE')) {
          newTypedWord.pop();
          dispatch(updateTypedWord_RemoveLetter(newTypedWord));
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
    let endTime = new Date().getTime() - startTypingTime;
    batch(() => {
      dispatch(updateWordTypeSpeed(endTime))
      dispatch(updateWordTypeSpeedSeconds((endTime/1000).toFixed(2)))
      dispatch(removeWord())
    })
  }

  useEffect(() => {
    document.querySelector('.replay-btn').addEventListener("click", () => {
      window.location.reload(true);
    })
  })

  return (
    <>
      <GameOver />
      <div className="game-name">Word Race</div>
      <Score score={score} multiplier={multiplier} />
      <Game />
    </>
  );
}

export default App;
