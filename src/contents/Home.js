import React, ( Component ) from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/B&W.jpg';
import Social from '../components/Social';

class Home extends Component {
  render() {
    return (
      <div className='condiv home'>
      <img src={profilepic} className='profilepic'></img>
      <ReactTypingEffect className='typingeffect' text={['I am Gautam Mehta', 'I am a Software Engineer', 'Hello World']} speed={100} eraseDelay={700}/>
      <Social></Social> 
      </div>
    )
  }
}

export default Home
