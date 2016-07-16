import { module, test } from 'qunit';
import Ember from 'ember';
import isHTMLSafe from 'ember-string-ishtmlsafe-polyfill';

const {
  htmlSafe
} = Ember.String;

module('isHTMLSafe');

test('unit tests', function(assert) {
  let plainStr = 'Hello World',
      htmlSafeStr = htmlSafe(plainStr);

  assert.notOk(isHTMLSafe(plainStr), 'Plain string is not html safe string');
  assert.ok(isHTMLSafe(htmlSafeStr), 'Html safe string matches');

  assert.notOk(isHTMLSafe([]), 'Array is not html safe string');
  assert.notOk(isHTMLSafe({}), 'Object is not html safe string');
  assert.notOk(isHTMLSafe(10), 'Number is not html safe string');
  assert.notOk(isHTMLSafe(null), 'Null is not html safe string');
});
