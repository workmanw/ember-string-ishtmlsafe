import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';
import { isHtmlSafe } from 'ember-string-ishtmlsafe/utils/string';

module('Acceptance | initializer', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('Ensure `isHtmlSafe` is tacked onto `Ember.String`', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(Ember.String.isHtmlSafe, isHtmlSafe);
  });
});
