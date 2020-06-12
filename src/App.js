import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    active: true
  };

  toggleParagraph = () => {
    this.setState(previousState => ({
      active: !previousState.active
    }));
  };

  render() {
    const isLoggedIn = false;
    const age = 26;

    return (
      <div className='App'>
        <button onClick={this.toggleParagraph}>Toggle Paragraph</button>

        {/* <p className={this.state.active ? 'paragraph-hidden' : ''}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, similique?
        </p> */}

        {/* <p style={{ display: this.state.active ? 'block' : 'none' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, similique?
        </p> */}

        {this.state.active && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, similique?</p>}

        {(isLoggedIn && <span>Welcome logged in user!</span>) || <strong>User is not logged in.</strong>}
        <p>{(10 > 15 && 'The first value is larger.') || 'The second value is larger.'}</p>
        {(age < 20 && (
          <div>
            <span>I'm very young.</span>
          </div>
        )) ||
          (age < 90 && (
            <div>
              <span>I'm at an okay age.</span>
            </div>
          )) || (
            <div>
              <span>I'm very old.</span>
            </div>
          )}
      </div>
    );
  }
}

export default App;
