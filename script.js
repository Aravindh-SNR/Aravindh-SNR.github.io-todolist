//sections of code with comments were added by me

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//getting all the existing list items and delete buttons
var lists = document.getElementsByTagName("li");
var deleteButtons = document.getElementsByClassName("delete");

//toggle 'done' class on and off on a list item
function toggleDoneClass() {
	this.classList.toggle("done");
}

//delete a list item
function deleteItem() {
	ul.removeChild(this.parentElement);
}

//making the existing list items and delete buttons listen to clicks
for(var i=0; i<lists.length; i++) {
	lists[i].addEventListener("click", toggleDoneClass);
	deleteButtons[i].addEventListener("click", deleteItem);
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	ul.appendChild(li);
	input.value = "";

	//make the new list item listen to clicks
	li.addEventListener("click", toggleDoneClass);

	//add a delete button whenever a new list item is added
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	deleteButton.classList.add("delete");
	li.appendChild(deleteButton);

	//make the new delete button listen to clicks
	deleteButton.addEventListener("click", deleteItem);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);