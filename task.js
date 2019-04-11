const taskList = document.querySelector('.taskList');
const task = document.createElement('div');
const clearfix = document.createElement('div');

const checkBoxBlock = document.createElement('div');
const checkBox = document.createElement('input');

const taskTextBlock = document.createElement('div');
const taskText = document.createElement('span');

const toolsBlock = document.createElement('div');
const arrowsIconBlock = document.createElement('div');
const arrowTop = document.createElement('i');
const arrowDown = document.createElement('i');


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

arrowTop.className = 'arrowTop fas fa-sort-up xs';
arrowDown.className = 'arrowDown fas fa-sort-down xs';

checkBoxBlock.appendChild(clearfix);
checkBoxBlock.appendChild(checkBox);

taskTextBlock.appendChild(taskText);

arrowsIconBlock.appendChild(arrowTop);
arrowsIconBlock.appendChild(arrowDown);

toolsBlock.appendChild(arrowsIconBlock);

task.appendChild(checkBoxBlock);
task.appendChild(taskTextBlock);
task.appendChild(toolsBlock);

taskList.appendChild(task);
