let userSelection = [],
  chalAnswers = [];

// form submit button event handling
function choiceSubmit(event) {
  event.preventDefault();
  let choiceBtns = document.getElementsByClassName('choiceBtn');
  userSelection = [];

  for (let i = 0; i < choiceBtns.length; i++) {
    if (choiceBtns[i].checked === true) {
      userSelection.push(choiceBtns[i].value);
    }
  }
  validateChecked(userSelection, chalAnswers);

  // console.log(userSelection);
  // console.log(chalAnswers);
}

function validateChecked(guesses, answers) {
  if (guesses.length == 0) {
    // alert('you must make a selection!');
    let message = 'You must make a selection!';
    makeErrorWindow(message);
  } else {
    for (let i = 0; answers.length < i; i++) {
      if (guesses[i] !== answers[i]) {
        console.log('nah, man');
      }
    }
    console.log(guesses, answers);
  }
}

function dropDownSubmit(event) {
  event.preventDefault();
  let selectForm = document.getElementById('selectForm');
  console.log(selectForm.value);
}

// drag and drop functionality
let dragItem = document.getElementsByClassName('dragItem'),
  dropSlot = document.getElementsByClassName('dropSlot');
// dropBoxes = document.getElementsByClassName('dropBox');

function dragSubmit() {
  let dropBoxArr = [];
  let dropItemArr = [];

  for (let i = 0; i < dropBox.children.length; i++) {
    if (dropBox.children[i].id.match(/definition/)) {
      dropBoxArr.push(dropBox.children[i]);
    }
  }

  for (let i = 0; i < dropSlot.length; i++) {
    if (dropSlot[i].children.length > 0) {
      let userMatch = [];
      userMatch.push(dropSlot[i].id, dropSlot[i].children[0].id);
      dropItemArr.push(userMatch);
    }
  }

  if (dropItemArr.length < dropBoxArr.length) {
    alert('You must match all of the items with their definitions.');
  } else {
    console.log(dropItemArr);
  }
}

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

function closeErrorWindow() {
  // console.log(mainContainer.children);
  for (i = 0; i < mainContainer.children.length; i++) {
    if (hasClass(mainContainer.children[i], 'errorWindow')) {
      mainContainer.removeChild(mainContainer.children[i]);
    }
  }
}
