import React, ( Component ) from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/B&W.jpg';

class Home extends Component {
  render() {
    return (
      <div className='condiv home'>
      <img src={profilepic} className='profilepic'></img>
      <ReactTypingEffect className='typingeffect' text={['I am Gautam Mehta', 'I am a Software Engineer', 'Hello World']} speed={100} eraseDelay={700}/>
      </div>
    )
  }
}

export default Home
