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

// answer validation

// drag and drop functionality
let dragItem = document.getElementsByClassName('dragItem'),
  // submitBtn = document.getElementById('submitBtn'),
  dropSlot = document.getElementsByClassName('dropSlot');
dropBoxes = document.getElementsByClassName('dropBox');

function onDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
  addClass(event.currentTarget, 'draggedItem');
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  let id = event.dataTransfer.getData('text');

  let draggableItem = document.getElementById(id);
  let dropzone = event.target;

  let dropSlots = Object.entries(dropSlot);

  dropzone.appendChild(draggableItem);
  removeClass(event.currentTarget, 'draggedItem');

  event.dataTransfer.clearData();

  // console.log(dropSlot);
}

// function dragAndDrop(event) {
//   e.preventDefault();

//   if (
//     dropBox1.children.length == 0 ||
//     dropBox2.children.length == 0 ||
//     dropBox3.children.length == 0
//   ) {
//     console.log('You must match all the items with their definitions!');
//   } else {
//     console.log(`DropBox 1 = ${dropBox1.children[0].id}`);
//     console.log(`DropBox 2 = ${dropBox2.children[0].id}`);
//     console.log(`DropBox 3 = ${dropBox3.children[0].id}`);
//   }
// }
