import { module, test } from 'qunit';
import Ember from 'ember';

module('Unit | isHTMLSafe');

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
