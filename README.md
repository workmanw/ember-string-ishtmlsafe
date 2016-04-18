# ember-string-ishtmlsafe-polyfill

This provides a polyfill for the `Ember.String.isHtmlSafe` feature that is currently in the RFC process
([emberjs/rfcs#139](https://github.com/emberjs/rfcs/pull/139#issuecomment-211471728)).


## Installation

```
ember install ember-string-ishtmlsafe-polyfill
```


## Usage
```
import isHtmlSafe from 'ember-string-ishtmlsafe-polyfill';

export default Ember.Service.extend({
  someMethod(str) {
    if (isHtmlSafe(str)) {
      str = str.toString();
    }
    // Do something with native string
  }
});
```


## Compatibility

This addon is tested against each minor ember version starting with 1.10 through 2.5. Additionally tested against,
`ember-stable`, `ember-beta`, and `ember-canary`. A complete list can be found in the [`ember-try.js](https://github.com/workmanw/ember-string-ishtmlsafe-polyfill/blob/master/config/ember-try.js) config.


## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`
