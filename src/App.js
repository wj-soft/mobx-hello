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

        <div>
          x와 y의 합계 {this.props.store.sumXY}
        </div>
      </div>
    );
  }
}

export default App;
