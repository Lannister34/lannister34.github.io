const screenWidth = window.screen.width;

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
const createTaskBlock = document.createElement('div');
const formBlock = document.createElement('div');
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
formBlock.appendChild(form);
createTaskBlock.appendChild(formBlock);

wrapper.appendChild(navigation);
wrapper.appendChild(createTaskBlock);

body.appendChild(wrapper);

window.addEventListener('resize', function() {
  const screenWidth = window.screen.width
  if (screenWidth >= 1100)
  {
    wrapper.style.width = '65%';
  } else
  if (screenWidth > 500 && screenWidth < 1100) {
               wrapper.style.width = '85%';
             } else
  if (screenWidth <= 500) {
    wrapper.style.width = '100%';
  }
})

if (screenWidth >= 1100)
{
  wrapper.style.width = '65%';
} else
if (screenWidth > 500 && screenWidth < 1100) {
             wrapper.style.width = '85%';
           } else
if (screenWidth <= 500) {
  wrapper.style.width = '100%';
}

wrapper.style.height= '300px';
wrapper.style.margin = '0 auto';
wrapper.classList.add('wrapper');

navigation.style.width = '100%';
navigation.style.minHeight = '40px';
navigation.style.height = '40px';
navigation.style.background = 'linear-gradient(to bottom, rgb(76,134,184), rgb(49,85,137))';
navigation.style.border = '1px solid rgb(49,85,137)';
navigation.classList.add('navigation');
navigation.addEventListener('mouseenter', function() {
  editIconBlock.style.opacity = '1';
  deleteIconBlock.style.opacity = '1';
});
navigation.addEventListener('mouseleave', function() {
  editIconBlock.style.opacity = '0';
  deleteIconBlock.style.opacity = '0';
});

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
title.style.padding = '7px 0';
title.style.margin = '0 5px';
title.style.textShadow = '0 0 2px #000';
title.classList.add('title');

editIconBlock.style.height = '100%';
editIconBlock.style.minWidth = '27px';
editIconBlock.style.fontSize = '15px';
editIconBlock.style.marginRight = '11px'
editIconBlock.style.opacity = '0';
editIconBlock.classList.add('editIconBlock');

deleteIconBlock.style.height = '100%';
deleteIconBlock.style.minWidth = '17.5px';
deleteIconBlock.style.fontSize = '15px';
deleteIconBlock.style.marginRight = '11px';
deleteIconBlock.style.opacity = '0';
deleteIconBlock.classList.add('deleteIconBlock');

editIcon.className = 'fas fa-pencil-alt fa-ms';
editIcon.style.marginTop = '12.5px';
editIcon.style.color = '#ddd';
//editIcon.style.marginRight = '4px';
editIcon.style.paddingRight = '11px';
editIcon.style.borderRight = '1px solid rgba(212, 213, 201, .6)'

deleteIcon.className = 'far fa-trash-alt fa-msg';
deleteIcon.style.marginTop = '12.5px';
deleteIcon.style.color = '#ddd';

createTaskBlock.style.minHeight = '40px';
createTaskBlock.style.height = '40px';
createTaskBlock.style.width = '100%';
createTaskBlock.style.background = 'linear-gradient(to bottom, rgb(224,224,224), rgb(211,211,211))';
createTaskBlock.style.border = '1px solid rgb(170,170,170)';
createTaskBlock.style.borderTop = 'none';
