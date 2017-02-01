import DS from 'ember-data';

export default DS.Store.extend({
  myCustomMethod() {
    return "hello";
  }
});
