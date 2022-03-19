import React, {useEffect, useState} from 'react'
import Keyboard from './Keyboard';
import { connect } from "react-redux";
import { addAction, subtractAction } from '../actions/actions';

const Game = (props) => {
  const [upcoming_words, setUpcomingWords] = useState([]);
  const [words, setWords] = useState([]);
  const [connState, setConnState] = useState(false);

  useEffect(() => {
    fetch('https://thinkerbell-game-server.vercel.app/wordsData').then((res) => {
      return res.json();
    }).then((data) => {
      let wordsArray = Object.keys(data).map(key => data[key]);
      console.log(wordsArray);
      setUpcomingWords(wordsArray);
      setConnState(prev => {
        return prev === false ? !prev : prev;
      })
      
    }).catch((error) => {
      console.log(error);
    })
  }, [connState]);

  const [intervals, setIntervals] = useState([]);
  useEffect(() => {
    if(upcoming_words.length !== 0){
      var interval = setInterval(() => {
        setWords(prev => {
          return prev.concat([`${upcoming_words[Math.floor(Math.random() * upcoming_words.length)]}`]);
        })
      }, 1000)
      setIntervals(prev => [...prev, interval]);
    }
  }, [connState])

  useEffect(() => {
    
    if(upcoming_words.length !== 0){
      console.log(words.length, intervals)
      if(words.length >= 5){
        intervals.forEach((interval) => {
          console.log(interval)
          clearInterval(interval);
        })
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
        <div className="stack">
          {/* <div className="word word-1">{words[0]}</div>
          <div className="word word-2">{words[1]}</div>
        <div className="word word-3">{words[2]}</div> */}
        </div>
        <Keyboard />
        <div className="number">{`${props.num} ${console.log(props)}`}</div>
        <button className="click" onClick={props.addAction}>increment</button>
    </>
  )
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  addAction: () => dispatch(addAction),
  subtractAction: () => dispatch(subtractAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);