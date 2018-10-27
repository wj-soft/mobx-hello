import { observable, action, computed } from 'mobx';

export default class CounterStore {
  @observable name = 'lee';
  @observable x = 10
  @observable y = 20

  @action changeName = () => {
    this.name = 'park';
  }

  @computed get sumXY() {
    return this.x + this.y
  }

  
}