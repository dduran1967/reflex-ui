import {observable, extendObservable, autorun, action} from 'mobx';

const MESSAGES = [
  {
    id:          'WebsiteRegisterAction',
    name:        'register-action',
    group:       'website',
    type:        'Action',
    kind:        'schema:RegisterAction',
    label:       'Website Registration Action',
    description: 'Actor registered for updates from your website',
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
    id:          'WebsiteQuestionAction',
    type:        'schema:QuestionAction',
    name:        'question-action',
    group:       'website',
    description: 'Actor asked a question.'
  },
  {
    id:          'RealEstateListingLikeAction',
    type:        'Action',
    group:       'real-estate-listing',
    name:        'like-action',
    description: 'Actor liked a real estate listing.'
  },
  {
    id:          'RealEstateListingSaveAction',
    type:        'Action',
    group:       'real-estate-listing',
    name:        'save-action',
    description: 'Actor saved a real estate listing.'
  }
];

class MessageStore {
  constructor() {
    extendObservable(this, {
      index:          [],
      items:          [],
      currentMessage: null,
    });
    this.add = this.add.bind(this);
    this.list = this.list.bind(this);
    this.load();
  }

  load() {
    MESSAGES.forEach(this.add);
  }

  add = action((message) => {
    this.index[message.id] = message;
    this.items.push(message);
  })

  get(id) {
    return this.index[id];
  }

  viewMessage = action((messageId) => {
    this.currentMessage = this.get(messageId);
  })
  

  list() {
    return Object.values(this.index);
  }

}

export class Message {
  getClients() {
    console.log('getClients', this);
  }
}

const messages = window.messages = new MessageStore();
export default observable(messages);

autorun(() => {
  console.log(messages);
});
