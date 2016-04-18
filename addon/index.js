import Ember from 'ember';

let hasIsHtmlSafe = !!Ember.String.isHtmlSafe;

export default function(str) {
  if (hasIsHtmlSafe) {
    return Ember.String.isHtmlSafe(str);
  }

  return str && typeof str.toHTML === 'function';
}
