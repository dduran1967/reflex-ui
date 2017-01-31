import {observable, autorun, extendObservable} from 'mobx';

class UserStore {
  constructor() {
    extendObservable(this, {
      name: 'dave duran',
      messageClient: []
    })
  }

  addMessageClient(id) {
    this.messageClient.push(id);
  }

}

const user = window.user = new UserStore();
export default observable(user);

autorun(()=>{
  console.log(user);
})