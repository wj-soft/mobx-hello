import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.store.name}
        <button onClick={this.props.store.changeName}>이름바꾸기</button>
      </div>
    );
  }
}

export default App;
