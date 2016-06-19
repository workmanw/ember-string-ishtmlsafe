import Ember from 'ember';

function isHtmlSafePolyfill(str) {
  return str && typeof str.toHTML === 'function';
}

export default Ember.String.isHtmlSafe || isHtmlSafePolyfill;
