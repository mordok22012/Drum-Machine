import React, { useEffect } from 'react';

const AudioComponent = ({bankChecked, updateDisplayState, volume, powerValue}) => {

  // Listas de enlaces de audio
  const firstAudioList = [
    'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
    
  ];

  const secondAudioList = [
    'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    
  ];

  
  //list of buttons Id
  const buttonAudioIdFirstList = ["Chord-1", "Chord-2", "Chord-3", "Shaker", "Open-HH", "Closed-HH", "Punchy-Kick", "Side-Stick", "Snare"];

  const buttonAudioIdSecondList = ["Heater-1", "Heater-2", "Heater-3", "Heater-4", "Clap", "Open-HH", "Kick-n'-Hat", "Kick", "Closed-HH"];
  
  
  //audio id
  const audioIdList = ['Q','W','E','A','S','D','Z','X','C'];

 //handle drumPad change
  const handleDrumPadChange = (audioSrc, buttonId) => {
    const audio = new Audio(audioSrc);
    if (powerValue) {
      audio.volume = volume;
      audio.play();
      updateDisplayState(buttonId);
    }
    
    
   }
//Function to play audio from keyboard
   const handleKeyPress =  (event) => {
    const audioIndex = audioIdList.indexOf(event.key.toUpperCase());
    if (audioIndex !== -1) {
      const audioSrc = bankChecked ? firstAudioList[audioIndex] : secondAudioList[audioIndex];
      const buttonId = bankChecked ? buttonAudioIdFirstList[audioIndex] : buttonAudioIdSecondList[audioIndex];
      
      if (audioSrc) {
        handleDrumPadChange(audioSrc, buttonId);
      }
       
    } 
   }

   useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    }

   } ,[bankChecked, volume, powerValue]);

   //render buttons
   const renderButtons = (audioList, buttonIDs) => {
    return audioList.map((audioSrc, index) => (
      <button key={index} className="drum-pad" id={buttonIDs[index]} onClick={() => handleDrumPadChange(audioSrc, buttonIDs[index])}>
        <audio className="clip" id={audioIdList[index]} src={audioSrc}  type="audio/mp3" />
        {audioIdList[index]}
      </button>
    ));
  };
  
  return (
    <div id='drumPadBox'>
      {bankChecked ? renderButtons(firstAudioList, buttonAudioIdFirstList) : renderButtons(secondAudioList, buttonAudioIdSecondList)}
    </div>
  );
};

export default AudioComponent;

