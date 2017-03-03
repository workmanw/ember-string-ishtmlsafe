import { module, test } from 'qunit';
import Ember from 'ember';
import isHTMLSafe from 'ember-string-ishtmlsafe-polyfill';

module('Unit | isHTMLSafe');

test('Imported isHTMLSafe() function properly detects safe strings', function(assert) {
  let plainStr = 'Hello World',
      htmlSafeStr = Ember.String.htmlSafe(plainStr);

  assert.notOk(isHTMLSafe(plainStr), 'Plain string is not html safe string');
  assert.ok(isHTMLSafe(htmlSafeStr), 'Html safe string matches');

  assert.notOk(isHTMLSafe([]), 'Array is not html safe string');
  assert.notOk(isHTMLSafe({}), 'Object is not html safe string');
  assert.notOk(isHTMLSafe(10), 'Number is not html safe string');
  assert.notOk(isHTMLSafe(null), 'Null is not html safe string');
});

test('"Native" Ember.String.isHTMLSafe() function properly detects safe strings', function(assert) {
  let plainStr = 'Hello World',
      htmlSafeStr = Ember.String.htmlSafe(plainStr);

  assert.notOk(Ember.String.isHTMLSafe(plainStr), 'Plain string is not html safe string');
  assert.ok(Ember.String.isHTMLSafe(htmlSafeStr), 'Html safe string matches');

  assert.notOk(Ember.String.isHTMLSafe([]), 'Array is not html safe string');
  assert.notOk(Ember.String.isHTMLSafe({}), 'Object is not html safe string');
  assert.notOk(Ember.String.isHTMLSafe(10), 'Number is not html safe string');
  assert.notOk(Ember.String.isHTMLSafe(null), 'Null is not html safe string');
});
