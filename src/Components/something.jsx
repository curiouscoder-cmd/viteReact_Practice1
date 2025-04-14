import React, { useState } from 'react';
import game from '../assets/game.jpg';
import button from '../assets/button.jpg';


export default function Something(){
    const [text, settext] = useState('nothing');

    const handleClick = () => {
        // Cycle through the states
        settext(prevText => {
          if (prevText === 'nothing') {
            return 'something';
          } else if (prevText === 'something') {
            return 'else';
          } else {
            return 'nothing';
          }
        });
      };
    const[image, setimage]=useState(button);
    const handleImageClick = ()=>{
        setimage(previmage=>{
            if(previmage===button){
                return game;
            }
            else if(previmage===game){
                return button;
            }
            else{
                return button;
            }
        }); 
        }
    
    return(
        <div>
            
            <h1>anything?</h1>
            <button onClick={handleClick}>{text}</button>
            <div>
            <h1>Game image</h1>
            <img style={{ width: '200px', height: '200px' }} src={image} alt="game"  />
            <button onClick={handleImageClick}>Change Image</button>
            </div>
        </div>
    )

}
