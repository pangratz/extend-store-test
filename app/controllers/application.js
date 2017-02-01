import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    myAction() {
      this.set("result", this.store.myCustomMethod());
    }

  }

});
