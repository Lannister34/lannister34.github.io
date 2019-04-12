  const screenWidth = window.screen.width;
  const orientation = screen.msOrientation || screen.mozOrientation ||
                      (screen.orientation || {}).type || window.orientation;

  let count = 0;
  const todoList = document.querySelector('.todo-list');
  const body = document.body;
  const addButton = document.querySelector('.add-todo');
  const clientHeight = document.documentElement.clientHeight;
  const clientWidth = document.documentElement.clientWidth;
    body.style.minHeight = clientHeight - 20 + 'px';

  window.addEventListener('resize', function() {
      const clientHeight = document.documentElement.clientHeight;
      body.style.minHeight = clientHeight - 20 + 'px';
  });

  addButton.addEventListener('click', function() {
    count++;
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

    toggleVisibilityIcons(titleBlock);

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
        if (title.textContent == '') {
          title.textContent = 'Project #' + todos.length;
        }
        thisTodoTitle.value = title.textContent;
      } else {
        title.textContent = thisTodoTitle.value;
      }
      titleBlock.removeChild(thisTodoTitle);
      titleBlock.insertBefore(title, editIcon);
      toggleVisibilityIcons(titleBlock);
    });

  });

  const app = {

    toggleVisibilityIcons: function(thisNode) {
        const editIcon = thisNode.querySelector('.editIcon');
        const deleteIcon = thisNode.querySelector('.deleteIcon');
        if (editIcon.style.visibility == 'hidden' && deleteIcon.style.visibility == 'hidden') {
          editIcon.style.visibility = 'visible';
          deleteIcon.style.visibility = 'visible';
        } else {
          editIcon.style.visibility = 'hidden';
          deleteIcon.style.visibility = 'hidden';
        }
    }

    isEmpty: function(obj) {
      for (var key in obj) {
        return false;
      }
      return true;
      }

    const addTodo = {
      tasks: {},
      id: count,
      icons: [],

      create: function() {
        return {
          'wrapper': document.createElement('div');
          'navigation': document.createElement('div');
          'titleBlock': document.createElement('div');
          'calendarIconBlock': document.createElement('div');
          'editIconBlock': document.createElement('div');
          'deleteIconBlock': document.createElement('div');
          'calendarIcon': document.createElement('i');
          'editIcon': document.createElement('i');
          'deleteIcon': document.createElement('i');

          'createTaskBlock': document.createElement('div');
          'addIconBlock': document.createElement('div');
          'addIcon': document.createElement('i');
          'formBlock': document.createElement('div');
          'form': document.createElement('form');
          'input': document.createElement('input');
          'addTaskButton': document.createElement('button');
          'inputTitle': document.createElement('input');

          'taskList': document.createElement('div');
          'alertBox': document.createElement('div');
        }
      },

      setClass: function(obj) {
          for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
              obj[key].classList.add(key);
            }
          }
      },

      append: function(obj) {
        obj['calendarIconBlock'].appendChild(obj['calendarIcon']);
        obj['editIconBlock'].appendChild(obj['editIcon']);
        obj['deleteIconBlock'].appendChild(obj['deleteIcon']);

        obj['titleBlock'].appendChild(obj['calendarIconBlock']);
        obj['titleBlock'].appendChild(obj['inputTitle']);
        obj['titleBlock'].appendChild(obj['editIconBlock']);
        obj['titleBlock'].appendChild(obj['deleteIconBlock']);

        obj['navigation'].appendChild(obj['titleBlock']);

        obj['addIconBlock'].appendChild(obj['addIcon']);

        obj['form'].appendChild(obj['input']);
        obj['form'].appendChild(obj['addTaskButton']);
        obj['formBlock'].appendChild(obj['form']);

        obj['createTaskBlock'].appendChild(obj['addIconBlock']);
        obj['createTaskBlock'].appendChild(obj['formBlock']);

        //taskList.appendChild(alertBox);

        obj['wrapper'].appendChild(obj['navigation']);
        obj['wrapper'].appendChild(obj['createTaskBlock']);
        obj['wrapper'].appendChild(obj['taskList']);
      }

      setTextIcons: function(obj) {
        obj['calendarIcon'].className = 'far fa-calendar-alt fa-lg';
        obj['editIcon'].className = 'fas fa-pencil-alt fa-ms';
        obj['deleteIcon'].className = 'far fa-trash-alt fa-ms';
        obj['addIcon'].className = 'fas fa-plus fa-msg';
      }

      wrapper.classList.add('wrapper');
      wrapper.setAttribute('id', id);
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
      taskList.classList.add('taskList');
      //alertBox.classList.add('alertBox');
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

      editIcon.addEventListener('click', function() {
        const titleBlock = wrapper.querySelector('.titleBlock');
        const title = titleBlock.querySelector('.title');
        const titleValue = title.textContent;

        titleBlock.removeChild(title);
        toggleVisibilityIcons(titleBlock);
        titleBlock.insertBefore(inputTitle, editIconBlock);
        inputTitle.focus();
      });

      deleteIcon.addEventListener('click', function() {
        const title = wrapper.querySelector('.title').textContent;
        if (confirm('Вы уверены, что хотите удалить проект ' + title + '?')) {
          todoList.removeChild(wrapper);
        }
      });

      inputTitle.setAttribute('type', 'text');
      inputTitle.setAttribute('placeholder', 'Input title...');

      input.setAttribute('type', 'text');
      input.setAttribute('placeholder', 'Start typing here to create a task...');

      addTaskButton.textContent = 'Add Task';
      addTaskButton.addEventListener('click', function(evt) {
        evt.preventDefault();
      });
      //alertBox.textContent = 'The are no tasks here.';

      return wrapper;
    }
  }
