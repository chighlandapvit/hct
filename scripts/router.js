// let routes = [];

function routePage(event) {
  event.preventDefault();
  let pageLink = event.target.id;

  for (let i = 0; i < pages.length; i++) {
    if (pages[i][1].pageNumber == pageLink) {
      // add page title to browser address bar
      document.location.hash = pages[i][1].title;

      // set currentPageIndex to equal the clicked page's pageNumber
      currentPage = pages[i][1];
      currentPageIndex = pages[i][1].pageNumber;
      pageReadout.innerHTML =
        'PAGE ' + currentPageIndex + ' OF ' + pages.length;

      removeMediaInfo();

      navBtnStatus();

      mainContainer.innerHTML = '';
      createDisplay(pages[i][1].elements);

      getPlayerTime();
    }
  }
}
