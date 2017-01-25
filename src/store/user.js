import {observable, autorun, extendObservable} from 'mobx';

class User {
  constructor() {
    extendObservable(this, {
      messageClient: []
    })
  }

  addMessageClient(id) {
    this.messageClient.push(id);
  }
}

const user = window.user = new User;
export default observable(user);

autorun(()=>{
  console.log(arguments);
  console.log(user.messageClient[0])
})