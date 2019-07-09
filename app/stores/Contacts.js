import { observable, action } from 'mobx';

class Contacts {
  @observable all = [
    { id: 1, name: 'Anoop M D', email: 'anoop.md@people10.com'},
    { id: 2, name: 'Anusree P S', email: 'anusree.ps@people10.com'}
  ];

  @action add(data) {
    const existing = this.all;
    this.all = existing.concat(data);
  }

  @action find(id) {
    return this.all.slice().filter(c => c.id === Number(id))[0];
  }

  @action remove(id) {
    const existing = this.all;
    this.all = existing.filter(c => c.id !== Number(id));
  }
}

export default new Contacts();