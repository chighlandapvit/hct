let mainContainer = document.getElementById('mainContainer'),
  prevBtn = document.getElementById('prevBtn'),
  nextBtn = document.getElementById('nextBtn');

let pages = [],
  pageNum = [],
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
    }
    // assign page numbers to each page in the array
    pageNum.forEach(function(item, index) {
      Object.assign(item, { pageNumber: index });
    });
    // create first page and append to view
    currentPageIndex = 0;
    currentPage = pageNum[0].pageElements;
    createDisplay(currentPage);
  }

  // load previous page
  prevBtn.addEventListener('click', function(e) {
    e.preventDefault();

    mainContainer.innerHTML = '';
    currentPageIndex--;

    for (let i = 0; i < pageNum.length; i++) {
      if (pageNum[i].pageNumber == currentPageIndex) {
        currentPage = pageNum[i];
      }
    }
    createDisplay(currentPage.pageElements);
  });
  // load next page
  nextBtn.addEventListener('click', function(e) {
    e.preventDefault();

    mainContainer.innerHTML = '';
    currentPageIndex++;

    for (let i = 0; i < pageNum.length; i++) {
      if (pageNum[i].pageNumber == currentPageIndex) {
        currentPage = pageNum[i];
      }
    }
    // create HTML page and append to mainContainer
    createDisplay(currentPage.pageElements);
  });
}
