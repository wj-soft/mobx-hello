import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.store.name}
      </div>
    );
  }
}

export default App;
