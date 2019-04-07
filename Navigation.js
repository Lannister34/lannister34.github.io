  const screenWidth = window.screen.width;
  const todoList = document.querySelector('.todo-list');
  const body = document.body;
  const addButton = document.querySelector('.add-todo');
  const clientHeight = document.documentElement.clientHeight;

  body.style.minHeight = clientHeight - 20 + 'px';

  addButton.addEventListener('click', function() {
    const todo = new addTodo();
    todoList.appendChild(todo);

    const title = document.createElement('span');
    title.classList.add('title');

    const todos = document.querySelectorAll('.wrapper');

    const thisTodo = todos[todos.length-1];
    const todoTitles = thisTodo.querySelectorAll('.inputTitle');
    const thisTodoTitle = todoTitles[todoTitles.length-1];

    const titleBlocks = thisTodo.querySelectorAll('.titleBlock');
    const titleBlock = titleBlocks[titleBlocks.length-1];

    const editIcons = thisTodo.querySelectorAll('.editIconBlock');
    const editIcon = editIcons[editIcons.length-1];

    thisTodoTitle.focus();

    thisTodoTitle.addEventListener('keyup', function(evt) {
      if (evt.keyCode == 13) {
        thisTodoTitle.blur();
      }
    });

    thisTodoTitle.addEventListener('blur', function() {
      if (thisTodoTitle.value.replace(/\s/g,"") == '') {
        title.textContent = 'Project #' + todos.length;
      } else {
        title.textContent = thisTodoTitle.value;
      }
      titleBlock.removeChild(thisTodoTitle);
      titleBlock.insertBefore(title, editIcon);
    });

  })

  function setTitle(value) {

  }

  function addTodo() {
    const wrapper = document.createElement('div');
    const navigation = document.createElement('div');
    const titleBlock = document.createElement('div');
    const calendarIconBlock = document.createElement('div');
    const editIconBlock = document.createElement('div');
    const deleteIconBlock = document.createElement('div');
    const calendarIcon = document.createElement('i');
    const editIcon = document.createElement('i');
    const deleteIcon = document.createElement('i');

    const createTaskBlock = document.createElement('div');
    const addIconBlock = document.createElement('div');
    const addIcon = document.createElement('i');
    const formBlock = document.createElement('div');
    const form = document.createElement('form');
    const input = document.createElement('input');
    const addTaskButton = document.createElement('button');
    const inputTitle = document.createElement('input');

    const tasksBlock = document.createElement('div');
    const alertBox = document.createElement('div');

    calendarIconBlock.appendChild(calendarIcon);
    editIconBlock.appendChild(editIcon);
    deleteIconBlock.appendChild(deleteIcon);

    titleBlock.appendChild(calendarIconBlock);
    titleBlock.appendChild(inputTitle);
    titleBlock.appendChild(editIconBlock);
    titleBlock.appendChild(deleteIconBlock);

    navigation.appendChild(titleBlock);

    addIconBlock.appendChild(addIcon);

    form.appendChild(input);
    form.appendChild(addTaskButton);
    formBlock.appendChild(form);

    createTaskBlock.appendChild(addIconBlock);
    createTaskBlock.appendChild(formBlock);

    tasksBlock.appendChild(alertBox);

    wrapper.appendChild(navigation);
    wrapper.appendChild(createTaskBlock);
    wrapper.appendChild(tasksBlock);

    wrapper.classList.add('wrapper');
    navigation.classList.add('navigation');
    titleBlock.classList.add('titleBlock');
    calendarIconBlock.classList.add('calendarIconBlock');
    calendarIcon.className = 'calendarIcon far fa-calendar-alt fa-lg';
    editIconBlock.classList.add('editIconBlock');
    deleteIconBlock.classList.add('deleteIconBlock');
    editIcon.className = 'editIcon fas fa-pencil-alt fa-ms';
    deleteIcon.className = 'deleteIcon far fa-trash-alt fa-ms';
    createTaskBlock.classList.add('createTaskBlock');
    addIconBlock.classList.add('addIconBlock');
    addIcon.className = 'addIcon fas fa-plus fa-msg';
    formBlock.className = 'formBlock';
    form.classList.add('form');
    input.classList.add('input');
    addTaskButton.classList.add('addTaskButton');
    tasksBlock.classList.add('tasksBlock');
    alertBox.classList.add('alertBox');
    inputTitle.classList.add('inputTitle');

    if ( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      editIconBlock.style.opacity = '0';
      deleteIconBlock.style.opacity = '0';

      navigation.addEventListener('mouseenter', function() {
        editIconBlock.style.opacity = '1';
        deleteIconBlock.style.opacity = '1';
      });
      navigation.addEventListener('mouseleave', function() {
        editIconBlock.style.opacity = '0';
        deleteIconBlock.style.opacity = '0';
      });
    }


    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('placeholder', 'Input title...');

    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Start typing here to create a task...');

    addTaskButton.textContent = 'Add Task';
    addTaskButton.addEventListener('click', function(evt) {
      evt.preventDefault();
    });
    alertBox.textContent = 'The are no tasks here.';

    return wrapper;
  }
