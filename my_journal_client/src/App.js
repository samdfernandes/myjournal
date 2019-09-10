import React from 'react';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn'

// let watsonURL = process.env.MYJOURNAL_IAM_URL || process.env.SPEECH_TO_TEXT_IAM_APIKEY
// let watsonAPIKey = process.env.MYJOURNAL_IAM_URL || process.env.SPEECH_TO_TEXT_IAM_URL;


// // commands bellow copied from IBM Watson's API documentation examples
// const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
// let fs = require('fs');

// const speechToText = new SpeechToTextV1({
//   iam_apikey: watsonAPIKey,
//   url: watsonURL
// });

// var params = {
//   content_type: 'audio/wav',
//   objectMode: false
// };

// // create the stream
// var recognizeStream = speechToText.recognizeUsingWebSocket(params);

// // pipe in some audio
// fs.createReadStream(__dirname + '/resources/speech.wav').pipe(recognizeStream);


// // these two lines of code will only work if `objectMode` is `false`
// // pipe out the transcription to a file
// recognizeStream.pipe(fs.createWriteStream('transcription.txt'));
// // get strings instead of Buffers from `data` events
// recognizeStream.setEncoding('utf8');


// recognizeStream.on('data', function(event) { onEvent('Data:', event); });
// recognizeStream.on('error', function(event) { onEvent('Error:', event); });
// recognizeStream.on('close', function(event) { onEvent('Close:', event); });

// // Displays events on the console.
// function onEvent(name, event) {
//   console.log(name, JSON.stringify(event, null, 2));
// };

// speechToText.recognize(params)
//   .then(result => {
//     console.log(JSON.stringify(result, null, 2));
//   })
//   .catch(err => {
//     console.log(err);
//   });

/////////////////////



function App() {
  return (
    <div className="App">
      <Navigation />
      <LandingPage />
      <SignIn />
    </div>
  );
}

export default App;
