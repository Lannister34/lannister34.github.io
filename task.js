const taskList = document.querySelector('.taskList');
const task = document.createElement('div');
const clearfix = document.createElement('div');

const checkBoxBlock = document.createElement('div');
const checkBox = document.createElement('input');

const taskTextBlock = document.createElement('div');
const taskText = document.createElement('span');

const toolsBlock = document.createElement('div');
const arrowsIconBlock = document.createElement('div');
const arrowTop = document.createElement('div');
const arrowDown = document.createElement('div');
const editIconBlock = document.createElement('div');
const deleteIconBlock = document.createElement('div');
const editIcon = document.createElement('i');
const deleteIcon = document.createElement('i');

clearfix.classList.add('clearfix');

checkBox.setAttribute('type', 'checkbox');

taskText.textContent = 'hello, this is task';

task.classList.add('task');

checkBoxBlock.classList.add('checkBoxBlock');
checkBox.classList.add('checkBox');

taskTextBlock.classList.add('taskTextBlock');
taskText.classList.add('taskText');

toolsBlock.className = 'toolsBlock';
arrowsIconBlock.className = 'arrowsIconBlock';

arrowTop.classList.add('arrowTop');
arrowDown.classList.add('arrowDown');

editIconBlock.classList.add('editIconBlock-task');
deleteIconBlock.classList.add('deleteIconBlock-task');
editIcon.className = 'editIcon-task fas fa-pencil-alt fa-ms';
deleteIcon.className = 'deleteIcon-task far fa-trash-alt fa-ms';

checkBoxBlock.appendChild(clearfix);
checkBoxBlock.appendChild(checkBox);

taskTextBlock.appendChild(taskText);

arrowsIconBlock.appendChild(arrowTop);
arrowsIconBlock.appendChild(arrowDown);

editIconBlock.appendChild(editIcon);
deleteIconBlock.appendChild(deleteIcon);

toolsBlock.appendChild(arrowsIconBlock);
toolsBlock.appendChild(editIconBlock);
toolsBlock.appendChild(deleteIconBlock);

task.appendChild(checkBoxBlock);
task.appendChild(taskTextBlock);
task.appendChild(toolsBlock);

taskList.appendChild(task);
