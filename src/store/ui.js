import {observable, extendObservable, autorun} from 'mobx';

class UIState {
  constructor() {
    extendObservable(this, {
      drawerOpen:    true,
      currentUserId: '',
      currentUser:   {},
      currentClient: {},
    })
  }
}

const ui = window.ui = new UIState();
export default observable(ui);

autorun(() => {
  console.log(ui);
})