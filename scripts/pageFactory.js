function createDisplay(page) {
  let workingItemArr = Object.entries(page),
    section = document.createElement('section'),
    createdElements = [];

  // determine which elements to create
  workingItemArr.forEach(function(workingItem) {
    if (workingItem[0].match(/heading/)) {
      createdElements.push(makeH1(workingItem[1]));
    } else if (workingItem[0].match(/subHeading/)) {
      createdElements.push(makeH2(workingItem[1]));
    } else if (workingItem[0].match(/paragraph/)) {
      createdElements.push(makeP(workingItem[1]));
    } else if (workingItem[0].match(/list/)) {
      createdElements.push(makeList(workingItem[1]));
    } else if (workingItem[0].match(/image/)) {
      createdElements.push(makeImg(workingItem[1]));
    } else if (workingItem[0].match(/video/)) {
      createdElements.push(makeVideo(workingItem[1]));
    } else if (workingItem[0].match(/form/)) {
      createdElements.push(makeChallengeForm(workingItem[1]));
    } else if (workingItem[0].match(/dropdown/)) {
      createdElements.push(makeDropDown(workingItem[1]));
    } else if (workingItem[0].match(/dragdrop/)) {
      createdElements.push(makeDragAndDrop(workingItem[1]));
    }
  });

  // add elements to section and append to mainContainer
  createdElements.forEach(function(createdElement) {
    section.appendChild(createdElement);
  });

  mainContainer.appendChild(section);
}

// create error window
function makeModalWindow(mHeading, mMessage) {
  let modalContainer = document.createElement('section');
  addClass(modalContainer, 'modalContainer');

  let modalInside = document.createElement('section');
  addClass(modalInside, 'modalInside');

  let modalWindow = document.createElement('section');
  addClass(modalWindow, 'modalWindow');

  let modalHeading = document.createElement('h1');
  addClass(modalHeading, 'modalHeading');
  modalHeading.innerHTML = mHeading;

  let modalMessage = document.createElement('p');
  addClass(modalMessage, 'modalMessage');
  modalMessage.innerHTML = mMessage;

  let modalBtn = document.createElement('button');
  addClass(modalBtn, 'btn');
  addClass(modalBtn, 'modalBtn');
  modalBtn.setAttribute('onclick', 'closeModalWindow()');
  modalBtn.innerHTML = 'Okay';

  modalWindow.appendChild(modalHeading);
  modalWindow.appendChild(modalMessage);
  modalWindow.appendChild(modalBtn);
  modalInside.appendChild(modalWindow);
  modalContainer.appendChild(modalInside);

  mainContainer.appendChild(modalContainer);
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
  let listItemArr = Object.entries(listContent.listItems);
  // determine list type
  if (listContent.listType == 'ul') {
    let ul = document.createElement('ul');
    addClass(ul, 'ul');

    listItemArr.forEach(function(listItem) {
      let li = document.createElement('li');
      addClass(li, 'li');
      li.innerHTML = listItem[1];

      ul.appendChild(li);
    });

    return ul;
  } else if (listContent.listType == 'ol') {
    let ol = document.createElement('ol');
    addClass(ol, 'ol');

    listItemArr.forEach(function(listItem) {
      let li = document.createElement('li');
      addClass(li, 'li');
      li.innerHTML = listItem[1];

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
  chalAnswers = [];
  Object.entries(formContent.answers).forEach(function(answer) {
    chalAnswers.push(answer[1]);
  });

  let form = document.createElement('form');
  form.setAttribute('id', 'choiceForm');
  form.setAttribute('onsubmit', 'choiceSubmit(event)');

  let formSubmit = document.createElement('input');
  formSubmit.setAttribute('id', 'formSubmit');
  addClass(formSubmit, 'chalSubBtn');
  formSubmit.setAttribute('type', 'submit');
  formSubmit.setAttribute('value', 'SUBMIT');

  let inputOptionArr = Object.entries(formContent.options),
    formItemArr = [];

  inputOptionArr.forEach(function(inputOption) {
    let input = document.createElement('input');
    input.setAttribute('id', inputOption[0]);
    addClass(input, 'choiceBtn');
    input.setAttribute('type', formContent.type);
    input.setAttribute('value', inputOption[0]);
    input.setAttribute('name', 'choice');

    let label = document.createElement('label');
    addClass(label, 'optionOver');
    label.setAttribute('for', inputOption[0]);
    label.innerHTML = inputOption[1];

    let br = document.createElement('br');

    formItemArr.push(input, label, br);
  });

  formItemArr.forEach(function(formItem) {
    form.appendChild(formItem);
  });

  form.appendChild(formSubmit);

  return form;
}

function makeDropDown(dropDownContent) {
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
  optionDefault.setAttribute('value', 'default');
  optionDefault.innerHTML = '--Choose an option--';

  let optionArr = Object.entries(dropDownContent.options),
    formOptionArr = [],
    br = document.createElement('br');

  optionArr.forEach(function(optionItem) {
    let option = document.createElement('option');
    option.setAttribute('value', optionItem[0]);
    option.innerHTML = optionItem[1];

    formOptionArr.push(option);
  });

  select.appendChild(optionDefault);
  formOptionArr.forEach(function(formOption) {
    select.appendChild(formOption, br);
  });

  form.appendChild(select);
  form.appendChild(br);
  form.appendChild(formSubmit);

  return form;
}

function makeDragAndDrop(dropContent) {
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

  let dropIconsArr = Object.entries(dropContent.items),
    definitionsArr = Object.entries(dropContent.definitions);

  dropIconsArr.forEach(function(dropIcon) {
    let dragSlot = document.createElement('section');
    addClass(dragSlot, 'dragSlot');
    dragSlot.setAttribute('ondragover', 'onDragOver(event);');
    dragSlot.setAttribute('ondrop', 'onDrop(event)');

    let dragItem = document.createElement('img');
    dragItem.setAttribute('id', dropIcon[0]);
    addClass(dragItem, 'dragItem');
    dragItem.setAttribute('draggable', dropIcon[1].draggable);
    dragItem.setAttribute('ondragstart', 'onDragStart(event)');
    // dragItem.setAttribute('src', 'images/' + workingItem[1].href);
    dragItem.setAttribute('src', dropIcon[1].href);
    dragItem.setAttribute('alt', dropIcon[1].altText);

    dragSlot.appendChild(dragItem);
    dragBox.appendChild(dragSlot);
  });

  definitionsArr.forEach(function(definition) {
    let dropSlot = document.createElement('section');
    dropSlot.setAttribute('id', definition[0]);
    addClass(dropSlot, 'dropSlot');
    dropSlot.setAttribute('ondragover', 'onDragOver(event)');
    dropSlot.setAttribute('ondrop', 'onDrop(event)');

    let dropText = document.createElement('p');
    addClass(dropText, 'dropText');
    dropText.innerHTML = definition[1];

    dropBox.appendChild(dropText);
    dropBox.appendChild(dropSlot);
  });

  dropBoxContainer.appendChild(dragBox);
  dropBoxContainer.appendChild(dropBox);
  dropBoxContainer.appendChild(chalSubBtn);

  return dropBoxContainer;
}
