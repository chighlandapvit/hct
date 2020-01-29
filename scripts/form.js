// form submit button event handling
function choiceSubmit(event) {
  event.preventDefault();
  let choiceForm = document.getElementById('choiceForm'),
    choiceBtns = document.getElementsByClassName('choiceBtn'),
    userSelection = [];

  for (let i = 0; i < choiceBtns.length; i++) {
    if (choiceBtns[i].checked == true) {
      userSelection.push(choiceBtns[i].value);
    }
  }
  console.log(userSelection);
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
      // dropItemArr.push(dropSlot[i]);
    }
  }

  if (dropItemArr.length < dropBoxArr.length) {
    alert('You must match all of the items with their definitions!');
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
