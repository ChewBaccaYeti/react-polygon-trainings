//2nd branch for events and state in React.jsx
import React, { Component } from 'react';
// import Counter from 'components/Counter';
// import Dropdown from 'components/Dropdown';
// import ColorPicker from 'components/ColorPicker';
// import ToDoList from 'components/ToDoList';
import initialTodos from '../../todos.json';
import { Container } from 'components/Container';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: initialTodos,
    name: 'Lebovski',
    tag: 'Dude',
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  handleChange = e => {
    console.log(e.currentTarget);
    console.log(e.currentTarget.name);
    console.log(e.currentTarget.value);

    this.setState({
      [e.currentTarget.name]: e.currentTarget.value, // Вычисляемые свойства объектов, в данном случае используем паттерн событий(event) вместо методов ниже.
    }); // Данный метод НЕ работает для чекбоксов и радио-кнопок и тд.
  };

  // handleNameChange = event => {
  //   console.log(event.currentTarget.value);
  //   this.setState({ name: event.currentTarget.value });
  // };

  // Это метод для каждого инпута в рендере, если их мало то можно использовать их,
  // но грамотнее использовать примитивный паттерн выше.

  // handleTagChange = e => {
  //   this.setState({ tag: e.currentTarget.value });
  //   console.log(e.currentTarget.value);
  // };

  // Это метод для каждого инпута в рендере, если их мало то можно использовать их,
  // но грамотнее использовать примитивный паттерн выше.

  render() {
    //     const { todos } = this.state;
    //     const totalTodoCount = todos.length;
    //     // const completedTodoCount = todos.filter(todo => todo.completed === true); Метод .filter на JS
    //     const completedTodoCount = todos.reduce(
    //       (total, todo) => (todo.completed ? total + 1 : total), // здесь снова НЕ используется if, иными словами (total, todo) => if (todo.completed ? total + 1 : total), так как это JSX выражение
    //       0
    //     );
    return (
      <Container>
        <form>
          <label>
            Имя{' '}
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>
          <label>
            Прозвище
            <input
              type="text"
              name="tag"
              value={this.state.tag}
              onChange={this.handleTagChange}
            ></input>
          </label>
        </form>
      </Container>
      //       <>
      //         <h1>Состояние компонента</h1>
      //         <Counter initialValue={0} />
      //         <Dropdown />
      //         <ColorPicker options={colorPickerOptions} />
      //         <div>
      //           <p>Общее кол-во: {totalTodoCount}</p>
      //           <p>Кол-во выполненных: {completedTodoCount}</p>
      //         </div>
      //         <ToDoList todos={todos} onDeleteTodo={this.deleteTodo} />
      //       </>
    );
  }
}

export default App;
