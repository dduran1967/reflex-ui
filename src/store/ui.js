import {observable, extendObservable, autorun, action} from 'mobx';

class UIState {
  constructor() {
    extendObservable(this, {
      sidebar:       {
        open: true
      },
      page:          {
        title: 'reflex:Connect'
      },
      currentUserId: '',
      currentUser:   {},
      currentClient: {},
    })
  }

  @action.bound toggleSidebar() {
    this.sidebar.open = !this.sidebar.open;
  }
}

const ui = window.ui = new UIState();
export default observable(ui);

autorun(() => {
  console.log(ui);
})