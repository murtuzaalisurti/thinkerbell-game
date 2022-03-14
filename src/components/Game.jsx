import React, {useEffect, useState} from 'react'
import Keyboard from './Keyboard';

const Game = () => {
  const [upcoming_words, setUpcomingWords] = useState(["Murtuza", "Titanic", "Robert"]);
  const [words, setWords] = useState([]);
  // const [timer, setTimer] = useState(false);

  // let alter = false;

  // let alter_time = setInterval(() => {
  //   alter = !alter;
  // }, 1000)
  console.log(upcoming_words.length)

  useEffect(() => {
    let interval = setInterval(() => {
      if(words.length > 5){
        clearInterval(interval);
      }
      setWords(prev => {
        return prev.concat([`${upcoming_words[Math.floor(Math.random() * upcoming_words.length)]}`]);
      })
    }, 5000)
  }, [upcoming_words])

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
        <div>game</div>
        <Keyboard />
        <div className="stack">
          {/* <div className="word word-1">{words[0]}</div>
          <div className="word word-2">{words[1]}</div>
          <div className="word word-3">{words[2]}</div> */}
        </div>
    </>
  )
}

export default Game