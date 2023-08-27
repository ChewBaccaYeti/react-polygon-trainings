<<<<<<< HEAD
//3rd branch for 3rd lecture
import React, { Component } from 'react';
import shortid from 'shortid';
import Counter from 'components/Counter';
import Dropdown from 'components/Dropdown';
import ColorPicker from 'components/ColorPicker';
import TodoList from 'components/TodoList';
import Container from 'components/Container';
import Form from 'components/Form';
import ToDoEditor from 'components/TodoEditor';
import Filter from 'components/Filter';
import Modal from 'components/Modal';
import initialTodos from '../../todos.json';
import tabs from '../../tabs.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    console.log('App componentDidMount');

    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos }); // Это перезапишет массив и не даст ему получить свойства null.
    }

    console.log(parsedTodos);
  }

  componentDidUpdate(PrevProps, prevState) {
    console.log('App componentDidUpdate');

    if (this.state.todos !== prevState.todos) {
      console.log('Обновилось поле todos, записываю todos в хранилище');
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  onDeleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  formSubmitHandler = data => {
    setTimeout(() => {
      // Проверка не асинхронность в данном методе.
      console.log(data);
    }, 1000);
  };

  onToggleCompleted = todoId => {
    console.log(todoId);

    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));

    this.setState(prevState => ({
      // Аналогичная запись записи выше, но с использование тернарного оператора.
      todos: prevState.todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    // const completedTodoCount = todos.filter(todo => todo.completed === true); Метод .filter на JS
    // const completedTodoCount = todos.reduce(
    //   (total, todo) => (todo.completed ? total + 1 : total), // здесь снова НЕ используется if, иными словами (total, todo) => if (todo.completed ? total + 1 : total), так как это JSX выражение
    //   0
    // );
    return (
      <Container>
        <Form onSubmit={this.formSubmitHandler}></Form>
        <ColorPicker options={colorPickerOptions} />

        <h1>Состояние компонента</h1>
        <Counter initialValue={0} />
        <Dropdown />

        <div>
          <p>Общее кол-во заметок: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodoCount}</p>
        </div>

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.onDeleteTodo}
          onToggleCompleted={this.onToggleCompleted}
        />
        <ToDoEditor onSubmit={this.addTodo} />
        <Filter value={filter} onChange={this.changeFilter} />
        <button type="button" onClick={this.toggleModal}>
          Открыть модальное окно
        </button>
        {showModal && (
          <Modal>
            <h1>Привет! Это контент модалки как children.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button type="button" onClick={this.toggleModal}>
              Закрыть модальное окно
            </button>
          </Modal>
        )}
        {/* Данная модалка может быть использована много раз*/}
      </Container>
=======
import { Component } from 'react';
import { GlobalStyle } from 'utils/GlobalStyle';
import { ProductReviewForm } from 'components/ProductReviewForm/ProductReviewForm';

export class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <ProductReviewForm />
      </>
>>>>>>> fe42be58dbd460e3b2fe70f868ac665711815bb9
    );
  }
}

export default App;
