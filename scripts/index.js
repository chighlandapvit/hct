let mainContainer = document.getElementById('mainContainer'),
  prevBtn = document.getElementById('prevBtn'),
  nextBtn = document.getElementById('nextBtn');

let pages = [],
  pageNum = [],
  pageReadout = document.getElementById('pageReadout'),
  currentPage,
  currentPageIndex;

// window.onhashchange = function() {
// for (let i = 0; i < pages.length; i++) {
//   if (pages[i][1].title === location.hash) {
//   } else {
//     console.log('invalid url...');
//   }
// }
// navBtnStatus();

// mainContainer.innerHTML = '';
// createDisplay(currentPage.elements);
// };

// on window load
function loader() {
  // makeModalWindow(
  //   'Wait a second...',
  //   'Hey, we gotta make this thing look right.'
  // );
  getPlayerTime();

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

    // create table-of-contents menu
    makeMenu(moduleArr);

    // create first page and append to view
    createDisplay(currentPage[1].elements);
  }

  // create table of contents menu with the data
  function makeMenu(modArr) {
    let menu = document.getElementById('menu');

    let menuList = document.createElement('ul');
    menuList.setAttribute('id', 'menuList');

    modArr.forEach(function(mod) {
      let modBox = document.createElement('section');
      addClass(modBox, 'modBox');

      let modTitle = document.createElement('a');
      addClass(modTitle, 'modTitle');
      modTitle.innerHTML = mod[0];

      let modList = document.createElement('ul');
      modList.setAttribute('id', mod[0]);
      addClass(modList, 'modList');
      addClass(modList, 'invisible');

      let modPages = Object.entries(mod[1]);

      modPages.forEach(function(page) {
        let pageItem = document.createElement('li');
        addClass(pageItem, 'pageItem');

        pageItem.innerHTML =
          '<a id="' +
          page[1].pageNumber +
          '" class="pageLink" href="" onclick="routePage(event)">' +
          page[1].pageName +
          '</a>';

        modList.appendChild(pageItem);
      });

      modTitle.addEventListener('click', function(event) {
        event.preventDefault();

        let targetParent = event.target.parentElement,
          sibling = event.target.nextSibling;

        if (targetParent.children.length > 0) {
          if (hasClass(sibling, 'invisible')) {
            removeClass(sibling, 'invisible');
          } else {
            addClass(sibling, 'invisible');
          }
        }
      });

      modBox.appendChild(modTitle);
      modBox.appendChild(modList);

      menuList.appendChild(modBox);
    });

    // give the data to the router
    // pages.forEach(function(page) {
    //   routes.push(page[1].title);
    // });

    menu.appendChild(menuList);
  }

  // expands and collapses table of contents menu
  let screenOverlay = document.getElementById('screenOverlay'),
    menuBtn = document.getElementById('menuBtn'),
    menu = document.getElementById('menu');

  menuBtn.addEventListener('click', function() {
    if (hasClass(screenOverlay, 'invisible')) {
      removeClass(screenOverlay, 'invisible');

      removeClass(menuBtn, 'btn');
      addClass(menuBtn, 'altBtn');
    } else {
      addClass(screenOverlay, 'invisible');

      removeClass(menuBtn, 'altBtn');
      addClass(menuBtn, 'btn');
    }
  });

  // load previous page when 'previous page' button is clicked
  prevBtn.addEventListener('click', function() {
    // clear the container and move the currentPageIndex backwards
    mainContainer.innerHTML = '';
    currentPageIndex--;

    removeAudioInfo();

    navBtnStatus();

    // grab the data for the next page from pages array
    for (let i = 0; i < pages.length; i++) {
      if (pages[i][1].pageNumber == currentPageIndex) {
        currentPage = pages[i];
      }
    }

    // display the new currentPage
    pageReadout.innerHTML = 'PAGE ' + currentPageIndex + ' OF ' + pages.length;

    // create HTML page and append to mainContainer
    createDisplay(currentPage[1].elements);

    getPlayerTime();
  });

  // load next page when 'next page' button is clicked
  nextBtn.addEventListener('click', function() {
    mainContainer.innerHTML = '';
    currentPageIndex++;

    removeAudioInfo();

    navBtnStatus();

    // grab the data for the next page from pages array
    for (let i = 0; i < pages.length; i++) {
      if (pages[i][1].pageNumber == currentPageIndex) {
        currentPage = pages[i];
      }
    }

    // display the new currentPage
    pageReadout.innerHTML = 'PAGE ' + currentPageIndex + ' OF ' + pages.length;

    // create HTML page and append to mainContainer
    createDisplay(currentPage[1].elements);

    getPlayerTime();
  });
}

// disable each page nav button if at start or end of data in pages array
function navBtnStatus() {
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
}
