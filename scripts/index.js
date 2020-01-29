let mainContainer = document.getElementById('mainContainer'),
  prevBtn = document.getElementById('prevBtn'),
  nextBtn = document.getElementById('nextBtn');

let pages = [],
  pageNum = [],
  pageReadout = document.getElementById('pageReadout'),
  currentPage,
  currentPageIndex;

// on window load
function loader() {
  initData();
  // read and distribute initial data
  function initData() {
    // put module details in an array
    const moduleArr = Object.entries(courseData);

    // get number of pages
    moduleArr.forEach(function(item) {
      let workingItem = Object.entries(item[1]);
      workingItem.forEach(function(item) {
        pages.push(item);
      });
    });

    prevBtn.setAttribute('disabled', '');
    removeClass(prevBtn, 'btn');
    addClass(prevBtn, 'disabledBtn');

    // assign page numbers to each page in the array
    pages.forEach(function(item, index) {
      Object.assign(item[1], { pageNumber: index + 1 });
    });

    // display current page number in nav bar
    currentPage = pages[0];
    currentPageIndex = 1;
    pageReadout.innerHTML = 'PAGE ' + currentPageIndex + ' OF ' + pages.length;

    // create first page and append to view
    createDisplay(currentPage[1].elements);
  }

  // load previous page
  prevBtn.addEventListener('click', function(event) {
    event.preventDefault();

    mainContainer.innerHTML = '';
    currentPageIndex--;

    if (currentPageIndex == 1) {
      prevBtn.setAttribute('disabled', '');
      removeClass(prevBtn, 'btn');
      addClass(prevBtn, 'disabledBtn');
    }
    if (currentPageIndex < pages.length) {
      nextBtn.removeAttribute('disabled');
      removeClass(nextBtn, 'disabledBtn');
      addClass(nextBtn, 'btn');
    }

    for (let i = 0; i < pages.length; i++) {
      if (pages[i][1].pageNumber == currentPageIndex) {
        currentPage = pages[i];
      }
    }

    pageReadout.innerHTML = 'PAGE ' + currentPageIndex + ' OF ' + pages.length;
    // create HTML page and append to mainContainer
    createDisplay(currentPage[1].elements);
  });
  // load next page
  nextBtn.addEventListener('click', function(event) {
    // event.preventDefault();

    mainContainer.innerHTML = '';
    currentPageIndex++;

    if (currentPageIndex == pages.length) {
      nextBtn.setAttribute('disabled', '');
      removeClass(nextBtn, 'btn');
      addClass(nextBtn, 'disabledBtn');
    }
    if (currentPageIndex > 1) {
      prevBtn.removeAttribute('disabled');
      removeClass(prevBtn, 'disabledBtn');
      addClass(prevBtn, 'btn');
    }

    for (let i = 0; i < pages.length; i++) {
      if (pages[i][1].pageNumber == currentPageIndex) {
        currentPage = pages[i];
      }
    }

    pageReadout.innerHTML = 'PAGE ' + currentPageIndex + ' OF ' + pages.length;
    // create HTML page and append to mainContainer
    createDisplay(currentPage[1].elements);
  });
}

// shim
if (!Object.entries) {
  Object.entries = function(obj) {
    var ownProps = Object.keys(obj),
      i = ownProps.length,
      resArray = new Array(i); // preallocate the Array
    while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };
}

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
