import { module, test } from 'qunit';
import Ember from 'ember';
import { isHtmlSafe } from 'ember-string-ishtmlsafe/utils/string';

const {
  htmlSafe
} = Ember.String;

module('isHtmlSafe');

test('unit tests', function(assert) {
  let plainStr = 'Hello World',
      htmlSafeStr = htmlSafe(plainStr);

  assert.notOk(isHtmlSafe(plainStr), 'Plain string is not html safe string');
  assert.ok(isHtmlSafe(htmlSafeStr), 'Html safe string matches');

  assert.notOk(isHtmlSafe([]), 'Array is not html safe string');
  assert.notOk(isHtmlSafe({}), 'Object is not html safe string');
  assert.notOk(isHtmlSafe(10), 'Number is not html safe string');
  assert.notOk(isHtmlSafe(null), 'Null is not html safe string');
});
