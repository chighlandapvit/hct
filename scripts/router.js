// let routes = [];

function routePage(event) {
  event.preventDefault();
  let pageLink = event.target.id;

  for (let i = 0; i < pages.length; i++) {
    if (pages[i][1].pageNumber == pageLink) {
      // let pageUrl = 'localhost:9000/' + pages[i][1].title;
      // let pUrl = '/' + pages[i][1].title;

      // window.history.pushState('object or string', pages[i][1].title, pageUrl);
      // window.history.pushState('object or string', pages[i][1].title, pUrl);

      currentPageIndex = pages[i][1].pageNumber;
      pageReadout.innerHTML =
        'PAGE ' + currentPageIndex + ' OF ' + pages.length;

      btnStatus();

      mainContainer.innerHTML = '';
      createDisplay(pages[i][1].elements);
    }
  }
}
