import { observable, action } from 'mobx';

export default class CounterStore {
  @observable name = 'lee';

  @action changeName = () => {
    this.name = 'park';
  }
}