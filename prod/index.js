  const screenWidth = window.screen.width;
  const orientation = screen.msOrientation || screen.mozOrientation ||
                      (screen.orientation || {}).type || window.orientation;

  let count = 0;

  const app = {

    init: function() {
      this.setBackgroundSize();
      this.addTodoCLickEvent();
    },

    setBackgroundSize: function() {
        const clientHeight = document.documentElement.clientHeight;
        document.body.style.minHeight = clientHeight - 20 + 'px';
        this.addBackgroundResizeEvent(clientHeight);
    },

    addBackgroundResizeEvent: function(clientHeight) {
      window.addEventListener('resize', function(clientHeight) {
        document.body.style.minHeight = clientHeight - 20 + 'px';
});
    },

    addTodoCLickEvent: function() {
      const button = document.querySelector('.add-todo');
      const todoList = document.querySelector('.todo-list');

      button.addEventListener('click', function() {
        count++;
        const todo = app.addTodo.add();
        todoList.appendChild(todo);
        const title = app.title.createTitle(todo);
        const input = app.title.addEnterEvent(todo);
        app.title.addBlurEvent(todo, title);
        app.title.addEditEvent(todo, title, input);
        app.addDeleteEvent(todo, todoList, title);
      });
    },

    title: {
      addEnterEvent: function(todo) {
        const input = todo.querySelector('.inputTitle');
        input.addEventListener('keyup', function(evt) {
          if (evt.keyCode == 13) {
            input.blur();
          }
        });
        return input;
      },

      addBlurEvent: function(todo, title) {
        const input = todo.querySelector('.inputTitle');
        const titleBlock = todo.querySelector('.titleBlock');
        const editIconBlock = todo.querySelector('.editIconBlock');

        input.addEventListener('blur', function() {
          if (input.value.replace(/\s/g,"") == '') {
            if (title.textContent == '') {
              title.textContent = 'Project #' + count;
            }
            input.value = title.textContent;
          } else {
            title.textContent = input.value;
          }
          titleBlock.removeChild(input);
          titleBlock.insertBefore(title, editIconBlock);
          app.toggleVisibilityIcons(titleBlock);
        });
      },

      addEditEvent: function(todo, title, input) {
        const editIcon = todo.querySelector('.editIcon');
        const editIconBlock = todo.querySelector('.editIconBlock');
        const titleBlock = todo.querySelector('.titleBlock');

        editIcon.addEventListener('click', function() {
          titleBlock.removeChild(title);
          titleBlock.insertBefore(input, editIconBlock);
          app.toggleVisibilityIcons(titleBlock);
          input.focus();
        });
      },

      createTitle: function(todo) {
        const title = document.createElement('span');
        const input = todo.querySelector('.inputTitle');
        const titleBlock = todo.querySelector('.titleBlock');

        title.classList.add('title');
        app.toggleVisibilityIcons(titleBlock);
        input.focus();
        return title;
      }
    },

    addDeleteEvent: function(todo, todoList, title) {
      const deleteIcon = todo.querySelector('.deleteIcon');

      deleteIcon.addEventListener('click', function() {
        if (confirm('Вы уверены, что хотите удалить проект ' + title.textContent + '?')) {
          todoList.removeChild(todo);
        }
      });
    },

    isMobile: function() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },

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
    },

    isEmpty: function(obj) {
      for (var key in obj) {
        return false;
      }
      return true;
    },

    addTodo: {
      tasks: {},
      id: function() { return count; },
      add: function() {
        const items = app.addTodo.create();
        app.addTodo.setTextIcons(items);
        app.addTodo.setClass(items);
        app.addTodo.setAttributes(items);
        app.addTodo.addMouseEvents(items);
        return app.addTodo.append(items);
      },

      create: function() {
        return {
          'wrapper': document.createElement('div'),
          'navigation': document.createElement('div'),
          'titleBlock': document.createElement('div'),
          'calendarIconBlock': document.createElement('div'),
          'editIconBlock': document.createElement('div'),
          'deleteIconBlock': document.createElement('div'),
          'calendarIcon': document.createElement('i'),
          'editIcon': document.createElement('i'),
          'deleteIcon': document.createElement('i'),

          'createTaskBlock': document.createElement('div'),
          'addIconBlock': document.createElement('div'),
          'addIcon': document.createElement('i'),
          'formBlock': document.createElement('div'),
          'form': document.createElement('form'),
          'input': document.createElement('input'),
          'addTaskButton': document.createElement('button'),
          'inputTitle': document.createElement('input'),

          'taskList': document.createElement('div'),
          'alertBox': document.createElement('div'),
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
        const { calendarIconBlock, calendarIcon, editIconBlock,
                editIcon, deleteIconBlock, deleteIcon, titleBlock,
                inputTitle, navigation, addIconBlock, addIcon,
                form, input, addTaskButton, formBlock,
                createTaskBlock, wrapper, taskList } = obj;

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

        //taskList.appendChild(alertBox);

        wrapper.appendChild(navigation);
        wrapper.appendChild(createTaskBlock);
        wrapper.appendChild(taskList);

        return wrapper;
      },

      setTextIcons: function(obj) {
        const { calendarIcon, editIcon, deleteIcon, addIcon } = obj;
        calendarIcon.className = 'far fa-calendar-alt fa-lg';
        editIcon.className = 'fas fa-pencil-alt fa-ms';
        deleteIcon.className = 'far fa-trash-alt fa-ms';
        addIcon.className = 'fas fa-plus fa-msg';
      },

      setAttributes: function(obj) {
        const { wrapper, inputTitle, input, addTaskButton,
                editIconBlock, deleteIconBlock } = obj;

        wrapper.setAttribute('id', this.id());
        inputTitle.setAttribute('type', 'text');
        inputTitle.setAttribute('placeholder', 'Input title...');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'Start typing here to create a task...');
        addTaskButton.textContent = 'Add Task';
        if (!app.isMobile) {
          editIconBlock.style.opacity = '0';
          deleteIconBlock.style.opacity = '0';
        }
      },

      addMouseEvents: function(obj) {
        const { navigation, editIcon, deleteIcon, addTaskButton,
                editIconBlock, deleteIconBlock, titleBlock,
                title } = obj;

        navigation.addEventListener('mouseenter', function() {
          editIconBlock.style.opacity = '1';
          deleteIconBlock.style.opacity = '1';
        });
        navigation.addEventListener('mouseleave', function() {
          editIconBlock.style.opacity = '0';
          deleteIconBlock.style.opacity = '0';
        });

        addTaskButton.addEventListener('click', function(evt) {
          evt.preventDefault();
        });
      }
    }
  }
      //alertBox.classList.add('alertBox');
      //alertBox.textContent = 'The are no tasks here.';
      app.init();
