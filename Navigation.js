const wrapper = document.createElement('div');
const navigation = document.createElement('div');
const titleBlock = document.createElement('div');
const calendarIconBlock = document.createElement('div');
const editIconBlock = document.createElement('div');
const deleteIconBlock = document.createElement('div');
const calendarIcon = document.createElement('i');
const editIcon = document.createElement('i');
const deleteIcon = document.createElement('i');
const title = document.createElement('span');
const body = document.body;
const form = document.createElement('form');
const input = document.createElement('input');

calendarIconBlock.appendChild(calendarIcon);
editIconBlock.appendChild(editIcon);
deleteIconBlock.appendChild(deleteIcon);

titleBlock.appendChild(calendarIconBlock);
titleBlock.appendChild(title);
titleBlock.appendChild(editIconBlock);
titleBlock.appendChild(deleteIconBlock);

navigation.appendChild(titleBlock);

form.appendChild(input);

wrapper.appendChild(navigation);
//wrapper.appendChild(form);

body.appendChild(wrapper);

wrapper.style.width = '80%';
wrapper.style.height= '300px';
wrapper.style.margin = '0 auto';
wrapper.classList.add('wrapper');

navigation.style.width = '100%';
navigation.style.minHeight = '40px';
navigation.style.height = '40px';
navigation.style.backgroundColor = 'rgb(57,98,162)';
navigation.style.borderRadius = '6px 6px';
navigation.classList.add('navigation');
navigation.style.boxShadow = 'inset 0 0 10px 1px #444';

titleBlock.style.height = '100%';
titleBlock.classList.add('titleBlock');
titleBlock.style.display = 'flex';

calendarIconBlock.style.height = '100%';
calendarIconBlock.style.minWidth = '40px';
calendarIconBlock.style.fontSize = '20px';
calendarIconBlock.classList.add('calendarIconBlock');

calendarIcon.className = 'far fa-calendar-alt fa-lg';
calendarIcon.style.marginLeft = '10px';
calendarIcon.style.marginTop = '10px';
calendarIcon.style.color = '#333';

title.textContent = 'Title';
title.style.width = '100%';
title.style.wordWrap = 'break-word';
title.style.wordBreak = 'break-word';
title.style.color = '#fff';
title.style.fontSize = '20px';
title.style.fontFamily = 'Tahoma';
title.style.padding = '7px 5px';
title.style.textShadow = '0 0 2px #000';
title.classList.add('title');

editIconBlock.style.height = '100%';
editIconBlock.style.minWidth = '20px';
editIconBlock.style.fontSize = '20px';
editIconBlock.classList.add('editIconBlock');

deleteIconBlock.style.height = '100%';
deleteIconBlock.style.minWidth = '17.5px';
deleteIconBlock.style.fontSize = '20px';
deleteIconBlock.classList.add('deleteIconBlock');

editIcon.className = 'fas fa-pencil-alt fa-ms';
editIcon.style.marginTop = '10px';
editIcon.style.color = '#ddd';
editIcon.style.marginRight = '15px';

deleteIcon.className = 'far fa-trash-alt fa-msg';
deleteIcon.style.marginTop = '10px';
deleteIcon.style.color = '#ddd';
deleteIcon.style.marginRight = '15px';

form.style.padding = '15px';
form.style.paddingLeft = '150px';
form.style.height = '70px';
form.classList.add('form');

input.style.height = '80%';
input.style.width = '90%';
input.style.border = '3px solid #777';
input.style.boxSizing = 'border-box';
input.style.margin = "0 auto";
input.classList.add('input');
