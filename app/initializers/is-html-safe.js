import Ember from 'ember';
import { isHtmlSafe } from 'ember-string-ishtmlsafe/utils/string';

export default {
  name: 'isHtmlSafe',
  initialize: function() {
    Ember.String.isHtmlSafe = isHtmlSafe;
  }
};
