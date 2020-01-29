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
  // read and distribute the dataSet
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

    // disable 'previous page' button on first page
    prevBtn.setAttribute('disabled', '');
    removeClass(prevBtn, 'btn');
    addClass(prevBtn, 'disabledBtn');

    // assign page numbers to each page in the pages array
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

  // load previous page when corresponding button is clicked
  prevBtn.addEventListener('click', function() {
    // clear the container and move the currentPageIndex backwards
    mainContainer.innerHTML = '';
    currentPageIndex--;

    // if currentPage is the first page, disable the button
    if (currentPageIndex == 1) {
      prevBtn.setAttribute('disabled', '');
      removeClass(prevBtn, 'btn');
      addClass(prevBtn, 'disabledBtn');
    }
    // if currentPage is not the last page, enable 'next page' button
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

    // display the new currentPage
    pageReadout.innerHTML = 'PAGE ' + currentPageIndex + ' OF ' + pages.length;

    // create HTML page and append to mainContainer
    createDisplay(currentPage[1].elements);
  });

  // load next page when corresponding button is clicked
  nextBtn.addEventListener('click', function() {
    mainContainer.innerHTML = '';
    currentPageIndex++;

    // if currentPage is the last page, disable the button
    if (currentPageIndex == pages.length) {
      nextBtn.setAttribute('disabled', '');
      removeClass(nextBtn, 'btn');
      addClass(nextBtn, 'disabledBtn');
    }
    // if currentPage is not the first page, enable 'next page' button
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

    // display the new currentPage
    pageReadout.innerHTML = 'PAGE ' + currentPageIndex + ' OF ' + pages.length;

    // create HTML page and append to mainContainer
    createDisplay(currentPage[1].elements);
  });
}

let menuBtn = document.getElementById('menuBtn'),
  menu = document.getElementById('menu');

menuBtn.addEventListener('click', function() {
  if (hasClass(menu, 'invisible')) {
    removeClass(menu, 'invisible');
  } else {
    addClass(menu, 'invisible');
  }
});

// tocBtn.addEventListener("click", function() {
//   tocMenu.classList.toggle("invisible");
//   if (!helpBtn.hasAttribute("disabled") & !resBtn.hasAttribute("disabled")) {
//     helpBtn.setAttribute("disabled", "true");
//     resBtn.setAttribute("disabled", "true");
//   } else {
//     helpBtn.removeAttribute("disabled");
//     resBtn.removeAttribute("disabled");
//   }
// });

// helpBtn.addEventListener("click", function() {
//   helpMenu.classList.toggle("invisible");
//   if (!tocBtn.hasAttribute("disabled") & !resBtn.hasAttribute("disabled")) {
//     tocBtn.setAttribute("disabled", "true");
//     resBtn.setAttribute("disabled", "true");
//   } else {
//     tocBtn.removeAttribute("disabled");
//     resBtn.removeAttribute("disabled");
//   }
// });

// resBtn.addEventListener("click", function() {
//   resMenu.classList.toggle("invisible");
//   if (!tocBtn.hasAttribute("disabled") & !helpBtn.hasAttribute("disabled")) {
//     tocBtn.setAttribute("disabled", "true");
//     helpBtn.setAttribute("disabled", "true");
//   } else {
//     tocBtn.removeAttribute("disabled");
//     helpBtn.removeAttribute("disabled");
//   }
// });
