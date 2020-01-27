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
    const moduleArr = Object.values(courseData);
    // put module details in an array
    for (i = 0; i < moduleArr.length; i++) {
      pages.push(Object.values(moduleArr[i]));
    }
    // get number of pages
    for (let i = 0; i < pages.length; i++) {
      pages[i].forEach(function(item) {
        let pageIndex = {
          pageElements: item
        };
        pageNum.push(pageIndex);
      });
      prevBtn.setAttribute('disabled', '');
    }
    // assign page numbers to each page in the array
    pageNum.forEach(function(item, index) {
      Object.assign(item, { pageNumber: index });
    });
    // create first page and append to view
    currentPage = pageNum[0];
    currentPageIndex = currentPage.pageNumber + 1;
    createDisplay(currentPage.pageElements);
    // display current page number in nav bar
    pageReadout.innerHTML =
      'PAGE ' + currentPageIndex + ' OF ' + pageNum.length;
  }

  // load previous page
  prevBtn.addEventListener('click', function(e) {
    e.preventDefault();

    mainContainer.innerHTML = '';
    currentPageIndex--;

    if (currentPageIndex == 1) {
      prevBtn.setAttribute('disabled', '');
    }
    if (currentPageIndex < pageNum.length) {
      nextBtn.removeAttribute('disabled');
    }

    for (let i = 0; i < pageNum.length; i++) {
      if (pageNum[i].pageNumber == currentPageIndex - 1) {
        currentPage = pageNum[i];
      }
    }

    pageReadout.innerHTML =
      'PAGE ' + currentPageIndex + ' OF ' + pageNum.length;
    // create HTML page and append to mainContainer
    createDisplay(currentPage.pageElements);
  });
  // load next page
  nextBtn.addEventListener('click', function(e) {
    e.preventDefault();

    mainContainer.innerHTML = '';
    currentPageIndex++;

    if (currentPageIndex == pageNum.length) {
      nextBtn.setAttribute('disabled', '');
    }
    if (currentPageIndex > 1) {
      prevBtn.removeAttribute('disabled');
    }

    for (let i = 0; i < pageNum.length; i++) {
      if (pageNum[i].pageNumber == currentPageIndex - 1) {
        currentPage = pageNum[i];
      }
    }

    pageReadout.innerHTML =
      'PAGE ' + currentPageIndex + ' OF ' + pageNum.length;
    // create HTML page and append to mainContainer
    createDisplay(currentPage.pageElements);
  });
}
