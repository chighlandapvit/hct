// adds class to element
function addClass(element, className) {
  var currentClassName = element.getAttribute('class');
  if (typeof currentClassName !== 'undefined' && currentClassName) {
    element.setAttribute('class', currentClassName + ' ' + className);
  } else {
    element.setAttribute('class', className);
  }
}
// checks if element has specific class
function hasClass(element, className) {
  if (element.classList) {
    return element.classList.contains(className);
  }
  return !!element.className.match(
    new RegExp('(\\s|^)' + className + '(\\s|$)')
  );
}
// removes class from element
function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (hasClass(element, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    element.className = element.className.replace(reg, ' ');
  }
}

// allows the use of Object.entries in older browsers
if (!Object.entries) {
  Object.entries = function(obj) {
    var ownProps = Object.keys(obj),
      i = ownProps.length,
      resArray = new Array(i); // preallocate the Array
    while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };
}
// allows the use of Object.assign in older browsers
if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, 'assign', {
    value: function assign(target, varArgs) {
      // .length of function is 2
      'use strict';
      if (target == null) {
        // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
          // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}
