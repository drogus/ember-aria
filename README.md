# Ember-ARIA

Ember-ARIA aims to provide primitives to use when creating accessible websites.
Usually ARIA states and properties can be set automatically based on other
properties, for example `aria-checked` may be obtained from `checked`.

## Installation

* `git clone https://github.com/drogus/ember-aria`
* `npm install`
* `bower install`

## Mixins

At the moment the following mixins are available:

* `ember-aria/mixins/disabled-state` - sets the `ariaDisabled` property based on
  the `disabled` proeprty, also adds it to `attributeBindings`
* `ember-aria/mixins/checkbox-role` - sets `role` to `checkbox`, includes
  `disabled-state` and sets the `ariaChecked` property based on the `checked`
  property. Both `role` and `ariaChecked` are added to `attributeBindings`
* `ember-aria/mixins/button-role` - sets `role` to `button`, includes
  `disabled-state` and sets the `ariaPressed` property based on the `pressed`
  property. Both `role` and `ariaPressed` are added to `attributeBindings`

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
