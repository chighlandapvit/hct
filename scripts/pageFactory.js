function createDisplay(item) {
  let createdElements = [],
    section = document.createElement('section'),
    workingItemArr = Object.entries(item);

  // determine which elements to create
  workingItemArr.forEach(function(item) {
    if (item[0].match(/heading/)) {
      createdElements.push(makeH1(item[1]));
    } else if (item[0].match(/subHeading/)) {
      createdElements.push(makeH2(item[1]));
    } else if (item[0].match(/paragraph/)) {
      createdElements.push(makeP(item[1]));
    } else if (item[0].match(/list/)) {
      createdElements.push(makeList(item[1]));
    } else if (item[0].match(/image/)) {
      createdElements.push(makeImg(item[1]));
    } else if (item[0].match(/video/)) {
      createdElements.push(makeVideo(item[1]));
    } else if (item[0].match(/form/)) {
      createdElements.push(makeChallengeForm(item[1]));
    } else if (item[0].match(/dropdown/)) {
      createdElements.push(makeDropDown(item[1]));
    } else if (item[0].match(/dragdrop/)) {
      createdElements.push(makeDragAndDrop(item[1]));
    }
  });
  // add elements to section and append to mainContainer
  createdElements.forEach(function(createdElement) {
    section.appendChild(createdElement);
  });
  mainContainer.appendChild(section);
}

// create distinct HTML elements
function makeH1(h1Content) {
  let h1 = document.createElement('h1');
  h1.innerHTML = h1Content;
  return h1;
}

function makeH2(h2Content) {
  let h2 = document.createElement('h2');
  h2.innerHTML = h2Content;
  return h2;
}

function makeP(pContent) {
  let p = document.createElement('p');
  p.innerHTML = pContent;
  return p;
}

function makeList(listContent) {
  let listContentArr = Object.entries(listContent.listItems);
  // determine list type
  if (listContent.listType == 'ul') {
    let ul = document.createElement('ul');
    listContentArr.forEach(function(item) {
      let li = document.createElement('li');
      li.innerHTML = item[1];
      addClass(li, 'li');
      ul.appendChild(li);
    });
    addClass(ul, 'ul');
    return ul;
  } else if (listContent.listType == 'ol') {
    let ol = document.createElement('ol');
    listContentArr.forEach(function(item) {
      let li = document.createElement('li');
      li.innerHTML = item[1];
      addClass(li, 'li');
      ol.appendChild(li);
    });
    addClass(ol, 'ol');
    return ol;
  }
}

function makeImg(imgContent) {
  let img = document.createElement('img');
  img.setAttribute('src', 'images/' + imgContent.href);
  img.setAttribute('alt', imgContent.altText);
  img.setAttribute('draggable', imgContent.draggable);
  // determine img size category
  if (imgContent.size == 'tiny') {
    addClass(img, 'tinyImage');
  } else if (imgContent.size == 'little') {
    addClass(img, 'littleImage');
  } else if (imgContent.size == 'big') {
    addClass(img, 'bigImage');
  }
  // determine img float orientation
  if (imgContent.floatSide == 'left') {
    addClass(img, 'floatLeft');
  } else if (imgContent.floatSide == 'right') {
    addClass(img, 'floatRight');
  }
  return img;
}

function makeVideo(videoContent) {
  let video = document.createElement('video');
  video.setAttribute('src', 'video/' + videoContent.href);
  video.setAttribute('alt', videoContent.altText);
  video.setAttribute('controls', '');
  // video.setAttribute('autoplay', '');
  addClass(video, 'video');
  // determine video float orientation
  if (videoContent.floatSide == 'left') {
    addClass(video, 'floatLeft');
  } else if (videoContent.floatSide == 'right') {
    addClass(video, 'floatRight');
  }
  return video;
}

function makeChallengeForm(formContent) {
  let form = document.createElement('form'),
    formSubmit = document.createElement('input');
  form.setAttribute('id', 'choiceForm');
  form.setAttribute('onsubmit', 'choiceSubmit(event)');
  formSubmit.setAttribute('id', 'formSubmit');
  formSubmit.setAttribute('type', 'submit');
  formSubmit.setAttribute('value', 'SUBMIT');
  addClass(formSubmit, 'btn');

  let formArr = [];
  let inputArr = Object.entries(formContent.options);

  inputArr.forEach(function(item) {
    let input = document.createElement('input'),
      label = document.createElement('label'),
      br = document.createElement('br');
    label.innerHTML = item[1];
    label.setAttribute('for', item[0]);
    addClass(label, 'optionOver');
    input.setAttribute('id', item[0]);
    input.setAttribute('type', formContent.type);
    input.setAttribute('value', item[0]);
    input.setAttribute('name', 'choice');
    addClass(input, 'choiceBtn');
    formArr.push(input, label, br);
  });
  formArr.forEach(function(item) {
    form.appendChild(item);
  });
  form.appendChild(formSubmit);

  return form;
}

function makeDropDown(dropContent) {
  let form = document.createElement('form'),
    formSubmit = document.createElement('input');
  select = document.createElement('select');
  form.setAttribute('id', 'choiceForm');
  form.setAttribute('onsubmit', 'dropDownSubmit(event)');
  formSubmit.setAttribute('id', 'formSubmit');
  formSubmit.setAttribute('type', 'submit');
  formSubmit.setAttribute('value', 'Submit');
  addClass(formSubmit, 'btn');
  select.setAttribute('required', '');
  select.setAttribute('id', 'selectForm');

  let optionDefault = document.createElement('option');
  optionDefault.setAttribute('value', '');
  addClass(optionDefault, 'optionDefault');
  optionDefault.innerHTML = '--Choose an option--';

  let formArr = [];
  let optionArr = Object.entries(dropContent.options);
  let br = document.createElement('br');

  optionArr.forEach(function(item) {
    let option = document.createElement('option');
    option.setAttribute('value', item[0]);
    option.innerHTML = item[1];
    formArr.push(option);
  });
  select.appendChild(optionDefault);
  formArr.forEach(function(item) {
    select.appendChild(item, br);
  });
  form.appendChild(select);
  form.appendChild(br);
  form.appendChild(formSubmit);
  return form;
}

function makeDragAndDrop(dragContent) {
  let dropBoxContainer = document.createElement('section'),
    dragBox = document.createElement('section'),
    dropBox = document.createElement('section'),
    submitBtn = document.createElement('button');
  addClass(dropBoxContainer, 'dropBoxContainer');
  submitBtn.setAttribute('id', 'submitBtn');
  submitBtn.innerHTML = 'SUBMIT';
  addClass(submitBtn, 'disabledDragBtn');
  submitBtn.setAttribute('disabled', '');
  addClass(dragBox, 'dragBox');
  addClass(dropBox, 'dropBox');

  let itemsArr = Object.entries(dragContent.items),
    definitionsArr = Object.entries(dragContent.definitions);

  itemsArr.forEach(function(item) {
    let dragSlot = document.createElement('section'),
      dragItem = document.createElement('img');
    addClass(dragSlot, 'dragSlot');
    dragSlot.setAttribute('ondragover', 'onDragOver(event);');
    dragSlot.setAttribute('ondrop', 'onDrop(event)');
    addClass(dragItem, 'dragItem');
    dragItem.setAttribute('id', item[0]);
    dragItem.setAttribute('draggable', item[1].draggable);
    dragItem.setAttribute('ondragstart', 'onDragStart(event)');
    dragItem.setAttribute('src', 'images/' + item[1].href);
    dragItem.setAttribute('alt', item[1].altText);
    dragSlot.appendChild(dragItem);
    dragBox.appendChild(dragSlot);
  });

  definitionsArr.forEach(function(item) {
    let dropSlot = document.createElement('section'),
      dropText = document.createElement('p');
    addClass(dropText, 'dropText');
    dropText.innerHTML = item[1];
    addClass(dropSlot, 'dropSlot');
    dropSlot.setAttribute('id', item[0]);
    dropSlot.setAttribute('ondragover', 'onDragOver(event)');
    dropSlot.setAttribute('ondrop', 'onDrop(event)');
    dropBox.appendChild(dropText);
    dropBox.appendChild(dropSlot);
  });

  dropBoxContainer.appendChild(dragBox);
  dropBoxContainer.appendChild(dropBox);
  dropBoxContainer.appendChild(submitBtn);
  return dropBoxContainer;
}

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
