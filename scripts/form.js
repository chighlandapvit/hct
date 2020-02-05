let userSelection = [],
  chalAnswers = [];

// form submission handler
function choiceSubmit(event) {
  event.preventDefault();
  let choiceBtns = document.getElementsByClassName('choiceBtn');
  // empty user selection array
  userSelection = [];

  // add user selection(s) into user selection array
  for (let i = 0; i < choiceBtns.length; i++) {
    if (choiceBtns[i].checked === true) {
      userSelection.push(choiceBtns[i].value);
    }
  }

  // create error window if user makes no selection
  if (userSelection.length == 0) {
    let msgHeading = 'Stop right there!',
      msgBody = 'You must make a selection.';

    makeModalWindow(msgHeading, msgBody);
  } else {
    // validate user selection(s)
    validateSelection(userSelection, chalAnswers);
  }
}

// dropDown form submission handler
function dropDownSubmit(event) {
  event.preventDefault();
  let selectForm = document.getElementById('selectForm');
  // empty user selection array
  userSelection = [];

  let mHeading = 'Go no further!',
    mMessage = 'You must choose an option.';

  // create error window if user makes no selection
  if (selectForm.value == 'default') {
    makeModalWindow(mHeading, mMessage);
  } else {
    // add user selection(s) into user selection array
    userSelection.push(selectForm.value);
    // validate user selection(s)
    validateSelection(userSelection, chalAnswers);
  }
}

// dragAndDrop submission handler
function dragSubmit() {
  // empty arrays
  let dropBoxArr = [],
    dropItemArr = [];
  userSelection = [];

  // add items that user dropped to dropBox array
  for (let i = 0; i < dropBox.children.length; i++) {
    if (dropBox.children[i].id.match(/definition/)) {
      dropBoxArr.push(dropBox.children[i]);
    }
  }

  // add slots with children to dropItemArr array
  for (let i = 0; i < dropSlot.length; i++) {
    if (dropSlot[i].children.length > 0) {
      let userMatch = [];
      userMatch.push(dropSlot[i].id, dropSlot[i].children[0].id);
      dropItemArr.push(userMatch);
    }
  }

  // create error window if user doesn't drop all items
  if (dropItemArr.length < dropBoxArr.length) {
    let mHeading = 'Hold on a minute!',
      mMessage = 'You must match all of the items with their definitions.';
    makeModalWindow(mHeading, mMessage);
  } else {
    dropBoxArr.forEach(function(dropBoxSlot) {
      let dropIconPair = [];
      dropIconPair.push(dropBoxSlot.children[0].id, dropBoxSlot.id);
      // add user choices into user selection array
      userSelection.push(dropIconPair);
    });
    // validate user drop choices
    validateDragAndDrop(userSelection, chalAnswers);
  }
}

// validate form answers
function validateSelection(guesses, answers) {
  let formSubBtn = document.getElementById('formSubmit');

  if (JSON.stringify(guesses) === JSON.stringify(answers)) {
    console.log('That is correct, sir!');
  } else {
    console.log('Not quite right...');
  }

  formSubBtn.setAttribute('disabled', '');
  removeClass(formSubBtn, 'chalSubBtn');
  addClass(formSubBtn, 'disabledBtn');

  nextBtn.removeAttribute('disabled');
  removeClass(nextBtn, 'disabledBtn');
  addClass(nextBtn, 'btn');
}

// validate dragAndDrop answers
function validateDragAndDrop(guesses, answers) {
  let dragSubBtn = document.getElementById('dragSubBtn');

  let correctGuesses = 0;

  guesses.forEach(function(guess) {
    for (let i = 0; i < answers.length; i++) {
      if (JSON.stringify(guess) === JSON.stringify(answers[i])) {
        correctGuesses += 1;
      }
    }
  });

  if (correctGuesses == answers.length) {
    console.log('You are good at this kind of thing!');
  } else {
    console.log('Those are not the correct pairs...');
  }

  dragSubBtn.setAttribute('disabled', '');
  removeClass(dragSubBtn, 'chalSubBtn');
  addClass(dragSubBtn, 'disabledBtn');

  nextBtn.removeAttribute('disabled');
  removeClass(nextBtn, 'disabledBtn');
  addClass(nextBtn, 'btn');
  // console.log(correctGuesses);
}

// drag and drop functionality
let dragItem = document.getElementsByClassName('dragItem'),
  dropSlot = document.getElementsByClassName('dropSlot');

function onDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
  // addClass(event.currentTarget, 'draggedItem');
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  let id = event.dataTransfer.getData('text');
  let draggableItem = document.getElementById(id);
  let dropzone = event.target;

  dropzone.appendChild(draggableItem);
  // removeClass(event.currentTarget, 'draggedItem');

  event.dataTransfer.clearData();
}

// closes modal window and removes from DOM
function closeModalWindow() {
  for (i = 0; i < mainContainer.children.length; i++) {
    if (hasClass(mainContainer.children[i], 'modalContainer')) {
      mainContainer.removeChild(mainContainer.children[i]);
    }
  }
}
