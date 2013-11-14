# reactive-shuffle

Shuffles child elements.

## Install

```
component install segmentio/reactive-shuffle
```

## Usage

```
var shuffle = require('reactive-shuffle');
reactive.use(shuffle);
```

Then use `data-shuffle` in the html:

```html
<div data-shuffle>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```