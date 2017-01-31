import {observable, extendObservable, autorun} from 'mobx';

const CLIENTS = [
  {
    id:              'smarteragent',
    name:            'Smarter Agent',
    title:           'Smarter Agent',
    icon:            'smarter-agent-icon.png',
    avatar:          '/smarter-agent-icon.png',
    logo:            'smarter-agent-logo.png',
    description:     'The only real estate app focused on your brand, not ours',
    producesMessage: ['WebsiteRegisterAction'],
    consumesMessage: ['WebsiteRegisterAction'],
    styles:          {
      card: {}
    }
  },

  {
    id:              'red',
    name:            'Real Estate Digital',
    title:           'Real Estate Digital',
    image:           'http://realestatedigital.com/wp-content/themes/red-theme/images/logo.jpg',
    avatar:          'http://realestatedigital.com/wp-content/themes/red-theme/images/logo.jpg',
    producesMessage: [],
    consumesMessage: [],
    styles:          {
      card: {}
    }
  },

  {
    id:     'roclogic',
    name:   'ROCLogic',
    title:  'ROCLogic',
    styles: {
      card: {}
    }
  },

  {
    id:     'lonewolf',
    name:   'Lone Wolf',
    title:  'Lone Wolf',
    image:  'http://www.lwolf.com/GlobalTemplates/OfficeTemplates/LW-CompanySite/2015/images/lone-wolf-logo.svg',
    avatar: 'http://www.lwolf.com/GlobalTemplates/OfficeTemplates/LW-CompanySite/2015/images/lone-wolf-logo.svg',
    styles: {
      card: {}
    }
  },

  {
    id:     'zillow',
    name:   'Zillow',
    title:  'Zillow',
    avatar: 'http://www.zillowstatic.com/static/images/m/apple-touch-icon.png',
    styles: {
      card: {}
    }
  },

  {
    id:     'upstream',
    name:   'Upstream',
    title:  'Upstream',
    image:  'http://waves.wavgroup.com/wp-content/uploads/2016/06/Upstream-Logo-e1465959562736.jpeg',
    avatar: 'http://waves.wavgroup.com/wp-content/uploads/2016/06/Upstream-Logo-e1465959562736.jpeg',
    styles: {
      card: {}
    }
  },

  {
    id:     'realtor',
    name:   'Realtor.com',
    title:  'Realtor.com',
    image:  'http://www.realtor.com/realtor-com.png',
    avatar: 'http://www.realtor.com/realtor-com.png',
    description: 'This is realtor.com',
    styles: {
      card: {},
      Hero: {
        backgroundColor: '#D92228'
      }
    }

  },

  {
    id:     'hsfa',
    name:   'Home Services Affiliates',
    title:  'Home Services Affiliates',
    image:  'bhhs-logo-dark.png',
    avatar: '/bhhs-logo-dark.png',
    styles: {
      card: {}
    }
  },
];

class ClientStore {
  constructor() {
    extendObservable(this, {
      index: [],
      items: []
    });
    this.add = this.add.bind(this);
    this.list = this.list.bind(this);
    this.load = this.load.bind(this);
    this.load();
  }

  load() {
    CLIENTS.forEach(this.add);
  }

  list() {
    return this.items;
  }

  get(id) {
    return this.index[id];
  }

  add(client) {
    this.index[client.id] = client;
    this.items.push(client);
  }

}

const client = window.client = new ClientStore();
export default observable(client);

autorun(() => {
  console.log(client)
})
