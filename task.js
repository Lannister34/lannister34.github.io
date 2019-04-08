const taskList = document.querySelector('.taskList');
const task = document.createElement('div');
const clearfix = document.createElement('div');

const checkBoxBlock = document.createElement('div');
const checkBox = document.createElement('input');

const taskText = document.createElement('div');

const toolsBlock = document.createElement('div');

clearfix.classList.add('clearfix');

checkBox.setAttribute('type', 'checkbox');

task.classList.add('task');
checkBoxBlock.classList.add('checkBoxBlock');
checkBox.classList.add('checkBox');
taskText.classList.add('taskText');

checkBoxBlock.appendChild(clearfix);
checkBoxBlock.appendChild(checkBox);

task.appendChild(checkBoxBlock);
task.appendChild(taskText);

taskList.appendChild(task);
