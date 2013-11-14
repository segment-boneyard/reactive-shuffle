var shuffle = require('shuffle-array');

/**
 * Shuffles all the elements within the parent
 *
 * @param {Reactive} reactive
 *
 * @return {void}
 */

function binding(reactive){
  reactive.bind('data-shuffle', function(el){
    var children = Array.prototype.slice.call(el.children);
    shuffle(children);
    children.forEach(function(child){
      el.removeChild(child);
      el.appendChild(child);
    });
  });
}


/**
 * Export function for `use`
 *
 * @type {Function}
 */

module.exports = binding;