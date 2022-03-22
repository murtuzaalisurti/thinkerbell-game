import React, {useEffect, useState} from 'react'
import Keyboard from './Keyboard';
import { useSelector, useDispatch } from "react-redux";
import { updateWords, updateUpcomingWords, setIsGameOver } from '../redux-toolkit/aSlice';
import {Stack} from '../components/styled/StackStyled';

const Game = () => {

  const words = useSelector((state) => {
    return state.rootReducer.words;
  })

  const upcoming_words = useSelector((state) => {
    return state.rootReducer.upcomingWords;
  })

  let isGameOver = useSelector((state) => {
    return state.rootReducer.isGameOver;
  })

  const dispatch = useDispatch();

  const [connState, setConnState] = useState(false);

  useEffect(() => {
    if(!isGameOver){
      fetch('https://thinkerbell-game-server.vercel.app/wordsData').then((res) => {
        return res.json();
      }).then((data) => {
        let wordsArray = Object.keys(data).map(key => data[key]);
        dispatch(updateUpcomingWords(wordsArray));
        setConnState(prev => {
          return prev === false ? !prev : prev;
        })
        
      }).catch((error) => {
        console.log(error);
      })
    }
  }, [connState]);

  const [intervals, setIntervals] = useState([]);
  useEffect(() => {
    if(!isGameOver){
      if(upcoming_words.length !== 0){
        var interval = setInterval(() => {
          dispatch(updateWords([`${upcoming_words[Math.floor(Math.random() * upcoming_words.length)]}`]))
        }, 3000)
        setIntervals(prev => [...prev, interval]);
      }
    }
  }, [connState])
  
  useEffect(() => {
    if(upcoming_words.length !== 0){
      if(words.length >= 5){
        intervals.forEach((interval) => {
          clearInterval(interval);
        })
        document.querySelector('.game-over').style.display = 'block';
        document.querySelector('.game-over').scrollIntoView({behavior: 'smooth'});
        document.querySelector('.game-over-message').innerText = 'Game Over';
        dispatch(setIsGameOver(true));
      }
    }
  }, [words])

  useEffect(() => {
    document.querySelector('.stack').innerHTML = '';
    words.forEach((word, index) => {
      let div = document.createElement('div');
      div.className = `word word-${index}`;
      div.innerHTML = `${word}`;
      document.querySelector('.stack').appendChild(div);
    })
  }, [words])


  return (
    <>
        <Stack className="stack"></Stack>
        <Keyboard />
    </>
  )
}

export default Game;