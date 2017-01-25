export const color = {
  white:        '#fff',
  black:        '#000',
  red:          '#d9534f',
  orange:       '#f0ad4e',
  yellow:       '#ffd500',
  green:        '#5cb85c',
  blue:         '#0275d8',
  teal:         '#5bc0de',
  pink:         '#ff5b77',
  purple:       '#552448',
  grayDark:     '#292b2c',
  gray:         '#464a4c',
  grayLight:    '#778086',
  grayLighter:  '#eceeef',
  grayLightest: '#f7f7f9'
};

export const brand = {
  id:      "CT301",
  name:    'New England Properties',
  image:   'https://www.bhhsneproperties.com/img/shared/bhhs-tri-dba.jpg',
  primary: '#552448',
  success: '#5cb85c',
  info:    '#5bc0de',
  warning: '#f0ad4e',
  danger:  '#d9534f',
  inverse: '#292b2c',
};

export const clientList = [
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
        backgroundColor: color.grayLighter,
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
        backgroundColor: color.grayLighter,
      }
    }
  },

  {
    id:     'roclogic',
    name:   'ROCLogic',
    title:  'ROCLogic',
    styles: {
      card: {
        backgroundColor: color.grayLighter,
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
        backgroundColor: color.grayLighter,
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
        backgroundColor: color.grayLighter,
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
        backgroundColor: color.grayLighter,

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
        backgroundColor: color.grayLighter,

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
        backgroundColor: color.grayLighter,

      }
    }
  },
];

export const client = clientList[0];

// MESSAGES

export const messageList = [
  {
    id:          'WebsiteRegisterAction',
    name:        'register:website',
    type:        'WebsiteRegisterAction',
    kind:        'schema:RegisterAction',
    label:       'Website Registration Action',
    description: 'Someone has registered to your website, blog, page, etc...',
    pseudocode:  '{agent} has {type} with {object}',
    producedBy:  ['smarteragent'],
    consumedBy:  ['red', 'roqlogic'],
    schema:      {
      "$schema":   "http://json-schema.org/draft-04/schema#",
      id:          'http://schema.org/RegisterAction',
      type:        'object',
      kind:        'http://json-schema.org/draft-04/schema#',
      description: '{agent} has registered to be user of a product, service or webpage.',
      properties:  {
        agent:        {
          id:          'schema:agent',
          type:        'object',
          range:       ['Person', 'Organization'],
          description: 'The direct performer or driver of the action (animate or inanimate). e.g. John wrote a book',
        },
        actionStatus: {
          name:        'actionStatus',
          type:        'object',
          description: 'Indicates the current disposition of the Action.'
        },
        error:        {
          name:        'error',
          type:        'object',
          description: 'For failed actions, more information on the cause of the failure'
        },
        object:       {
          type:        'object',
          description: "The object upon the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). e.g. John read a book.",
        },
        instrument:   {
          type:        'object',
          kind:        'Thing',
          description: 'The object that helped the agent perform the action. e.g. John wrote a book with a pen.'
        },
        location:     {
          type:        'object',
          kind:        'Place',
          description: 'The location of for example where the event is happening, an organization is located, or where an action takes place.',
        },
        participant:  {
          type:        'object',
          description: 'Other co-agents that participated in the action indirectly. e.g. John wrote a book with Steve.',
        },
        result:       {
          type:        'object',
          kind:        'Thing',
          description: 'The result produced in the action. e.g. John wrote a book.'
        },
        target:       {
          type:        'object',
          kind:        'EntryPoint',
          description: 'Indicates a target EntryPoint for an Action.'
        }
      }

    }
  },

  {
    id:          'RealEstateListingLikeAction',
    name:        'like:real-estate-listing',
    description: 'The subject has indicated interest in a real estate listing'

  },

  {
    "id":          "RealEstateListingSaveAction",
    "name":        "save:real-estate-listing",
    "description": "The subject saved a real estate listing.",
  }
];

// USER

export const user = {
  messageClient: []
};

export default {
  color,
  brand,
  clientList,
  client,
  messageList,
  user
}
