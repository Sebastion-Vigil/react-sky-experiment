import React from 'react';
import Sky from 'react-sky';
import './App.css';

import img from './apple-icon.png';

class App extends React.Component {
  render() {
    return (
      <div className="outer">
        <div className="sky-test">
          <Sky
            images={{
              0: img,
            }}
            how={130}
            time={50}
            size={'25px'}
            background={'darkcyan'}
          />
        </div>
      </div>
    );
  }
}

export default App;
