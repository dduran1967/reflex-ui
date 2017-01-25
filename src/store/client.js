import {observable, extendObservable, autorun} from 'mobx';
import ui from '../store/ui';

const CLIENTS = [
  {
    id:              'smarteragent',
    name:            'Smarter Agent',
    title:           'Smarter Agent',
    icon:            'smarter-agent-icon.png',
    logo:            'smarter-agent-logo.png',
    description:     'The only real estate app focused on your brand, not ours',
    producesMessage: ['WebsiteRegisterAction'],
    consumesMessage: ['WebsiteRegisterAction'],
    styles:          {
      card: {
        backgroundColor: ui.styles.color.teal,
        color:           'white'
      }
    }
  },

  {
    id:              'red',
    name:            'Real Estate Digital',
    title:           'Real Estate Digital',
    image:           'http://realestatedigital.com/wp-content/themes/red-theme/images/logo.jpg',
    producesMessage: [],
    consumesMessage: [],
    styles:          {
      card: {
        backgroundColor: ui.styles.color.red,
        color:           'white',
      }
    }
  },

  {
    id:     'roclogic',
    name:   'ROCLogic',
    title:  'ROCLogic',
    styles: {
      card: {
        backgroundColor: ui.styles.color.success,
        color:           'white'
      }
    }
  },

  {
    id:     'lonewolf',
    name:   'Lone Wolf',
    title:  'Lone Wolf',
    image:  'http://www.lwolf.com/GlobalTemplates/OfficeTemplates/LW-CompanySite/2015/images/lone-wolf-logo.svg',
    styles: {
      card: {
        backgroundColor: ui.styles.color.green,
        color:           'white'
      }
    }
  },

  {
    id:     'zillow',
    name:   'Zillow',
    title:  'Zillow',
    image:  'http://www.zillowstatic.com/static/images/m/apple-touch-icon.png',
    styles: {
      card: {
        backgroundColor: ui.styles.color.teal,
        color:           'white'
      }
    }
  },

  {
    id:     'upstream',
    name:   'Upstream',
    title:  'Upstream',
    image:  'http://waves.wavgroup.com/wp-content/uploads/2016/06/Upstream-Logo-e1465959562736.jpeg',
    styles: {
      card: {
        backgroundColor: ui.styles.color.red,
        color:           'white'
      }
    }
  },

  {
    id:     'realtor',
    name:   'Realtor.com',
    title:  'Realtor.com',
    image:  'http://www.realtor.com/realtor-com.png',
    styles: {
      card: {
        backgroundColor: ui.styles.color.teal,
        color:           'white'
      }
    }

  },

  {
    id:     'hsfa',
    name:   'Home Services Affiliates',
    title:  'Home Services Affiliates',
    image:  'bhhs-logo-dark.png',
    styles: {
      card: {
        backgroundColor: ui.styles.color.green,
        color:           'white'
      }
    }
  },
];

class ClientStore {
  constructor() {
    extendObservable(this, {
      index: []
    });
    CLIENTS.forEach(this.add.bind(this));
  }

  list() {
    return Object.values(this.index);
  }

  get(id) {
    return this.index[id];
  }

  add(client) {
    this.index[client.id] = client;
  }

}

const clients = new ClientStore;
export default observable(clients);
