function createDisplay(item) {
  let workingItemArr = Object.entries(item),
    section = document.createElement('section'),
    createdElements = [];

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
    addClass(ul, 'ul');

    listContentArr.forEach(function(item) {
      let li = document.createElement('li');
      addClass(li, 'li');
      li.innerHTML = item[1];

      ul.appendChild(li);
    });

    return ul;
  } else if (listContent.listType == 'ol') {
    let ol = document.createElement('ol');
    addClass(ol, 'ol');

    listContentArr.forEach(function(item) {
      let li = document.createElement('li');
      addClass(li, 'li');
      li.innerHTML = item[1];

      ol.appendChild(li);
    });

    return ol;
  }
}

function makeImg(imgContent) {
  let img = document.createElement('img');
  // img.setAttribute('src', 'images/' + imgContent.href);
  img.setAttribute('src', imgContent.href);
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
  addClass(video, 'video');
  // video.setAttribute('src', 'video/' + videoContent.href);
  video.setAttribute('src', videoContent.href);
  video.setAttribute('alt', videoContent.altText);
  video.setAttribute('controls', '');
  // video.setAttribute('autoplay', '');

  // determine video float orientation
  if (videoContent.floatSide == 'left') {
    addClass(video, 'floatLeft');
  } else if (videoContent.floatSide == 'right') {
    addClass(video, 'floatRight');
  }

  return video;
}

function makeChallengeForm(formContent) {
  let form = document.createElement('form');
  form.setAttribute('id', 'choiceForm');
  form.setAttribute('onsubmit', 'choiceSubmit(event)');

  let formSubmit = document.createElement('input');
  formSubmit.setAttribute('id', 'formSubmit');
  addClass(formSubmit, 'chalSubBtn');
  formSubmit.setAttribute('type', 'submit');
  formSubmit.setAttribute('value', 'SUBMIT');

  let inputArr = Object.entries(formContent.options),
    formArr = [];

  inputArr.forEach(function(item) {
    let input = document.createElement('input');
    input.setAttribute('id', item[0]);
    addClass(input, 'choiceBtn');
    input.setAttribute('type', formContent.type);
    input.setAttribute('value', item[0]);
    input.setAttribute('name', 'choice');

    let label = document.createElement('label');
    addClass(label, 'optionOver');
    label.setAttribute('for', item[0]);
    label.innerHTML = item[1];

    let br = document.createElement('br');

    formArr.push(input, label, br);
  });

  formArr.forEach(function(item) {
    form.appendChild(item);
  });

  form.appendChild(formSubmit);

  return form;
}

function makeDropDown(dropContent) {
  let form = document.createElement('form');
  form.setAttribute('id', 'choiceForm');
  form.setAttribute('onsubmit', 'dropDownSubmit(event)');

  let formSubmit = document.createElement('input');
  formSubmit.setAttribute('id', 'formSubmit');
  addClass(formSubmit, 'chalSubBtn');
  formSubmit.setAttribute('type', 'submit');
  formSubmit.setAttribute('value', 'Submit');

  let select = document.createElement('select');
  select.setAttribute('id', 'selectForm');
  select.setAttribute('required', '');

  let optionDefault = document.createElement('option');
  addClass(optionDefault, 'optionDefault');
  optionDefault.setAttribute('value', '');
  optionDefault.innerHTML = '--Choose an option--';

  let optionArr = Object.entries(dropContent.options),
    formArr = [],
    br = document.createElement('br');

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
  let dropBoxContainer = document.createElement('section');
  addClass(dropBoxContainer, 'dropBoxContainer');

  let chalSubBtn = document.createElement('button');
  chalSubBtn.setAttribute('id', 'chalSubBtn');
  addClass(chalSubBtn, 'chalSubBtn');
  chalSubBtn.setAttribute('onclick', 'dragSubmit()');
  chalSubBtn.innerHTML = 'SUBMIT';

  let dragBox = document.createElement('section');
  dragBox.setAttribute('id', 'dragBox');
  addClass(dragBox, 'dragBox');

  let dropBox = document.createElement('section');
  dropBox.setAttribute('id', 'dropBox');
  addClass(dropBox, 'dropBox');

  let itemsArr = Object.entries(dragContent.items),
    definitionsArr = Object.entries(dragContent.definitions);

  itemsArr.forEach(function(item) {
    let dragSlot = document.createElement('section');
    addClass(dragSlot, 'dragSlot');
    dragSlot.setAttribute('ondragover', 'onDragOver(event);');
    dragSlot.setAttribute('ondrop', 'onDrop(event)');

    let dragItem = document.createElement('img');
    dragItem.setAttribute('id', item[0]);
    addClass(dragItem, 'dragItem');
    dragItem.setAttribute('draggable', item[1].draggable);
    dragItem.setAttribute('ondragstart', 'onDragStart(event)');
    // dragItem.setAttribute('src', 'images/' + item[1].href);
    dragItem.setAttribute('src', item[1].href);
    dragItem.setAttribute('alt', item[1].altText);

    dragSlot.appendChild(dragItem);
    dragBox.appendChild(dragSlot);
  });

  definitionsArr.forEach(function(item) {
    let dropSlot = document.createElement('section');
    dropSlot.setAttribute('id', item[0]);
    addClass(dropSlot, 'dropSlot');
    dropSlot.setAttribute('ondragover', 'onDragOver(event)');
    dropSlot.setAttribute('ondrop', 'onDrop(event)');

    let dropText = document.createElement('p');
    addClass(dropText, 'dropText');
    dropText.innerHTML = item[1];

    dropBox.appendChild(dropText);
    dropBox.appendChild(dropSlot);
  });

  dropBoxContainer.appendChild(dragBox);
  dropBoxContainer.appendChild(dropBox);
  dropBoxContainer.appendChild(chalSubBtn);

  return dropBoxContainer;
}
