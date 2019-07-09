import {Observable} from 'mobx';

class Contacts {
  @Observable all = [
    { id: 1, name: 'Anoop M D', email: 'anoop.md@people10.com'},
    { id: 2, name: 'Anusree P S', email: 'anusree.ps@people10.com'}
  ];
}

export default new Contacts();