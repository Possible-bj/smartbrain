import React, { Component } from 'react';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
// import Rank from '../components/Rank/Rank';
// import Signin from 'signin/signin';
import Particles from 'react-particles-js';

import './App.css';
import Signin from './signin/signin';
import Register from './register/register';

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }
  onSubmit = () => {
    console.log('click')
  }
  onRouteChange = ( route ) => {
    if ( route === 'signout' ) {
      this.setState({ isSignedIn: false })
    } else if ( route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route })
  }
  params = {
    particles: {
      number: {
        value: 100
      }
    }
  }
  render() {
    const { isSignedIn, route } = this.state
    const { onInputChange, onRouteChange, onSubmit, params } = this
    return (
    <div className="App">
      <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange}/>
      { route === 'home'
      ? <div>
        <Logo />
        {/* <Rank /> */}
        <ImageLinkForm 
          onInputChange={onInputChange} 
          onSubmit={onSubmit}
        />
        <FaceRecognition />
      </div> 
      : (
        route === 'signin'
      ? <Signin onRouteChange={onRouteChange} />
      : <Register onRouteChange={onRouteChange}/>
        )
      }
        <Particles className='particle w-100 h-100' params={params}/>
    </div>
  );
  }
}

export default App;
