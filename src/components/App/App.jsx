import React, { Component } from 'react';
// import Counter from 'components/Counter';
// import Dropdown from 'components/Dropdown';
// import ColorPicker from 'components/ColorPicker';
// import ToDoList from 'components/ToDoList';
import initialTodos from '../../todos.json';
import Container from 'components/Container';
import Form from 'components/Form';

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
    experience: 'Junior',
  };

  deleteTodo = todoId => {
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

  // handleNameChange = event => {
  //   console.log(event.currentTarget.value);
  //   this.setState({ name: event.currentTarget.value });
  // };

  // Это метод для каждого инпута в рендере, если их мало то можно использовать их,
  // но грамотнее использовать примитивный паттерн для форм выше.

  // handleTagChange = e => {
  //   this.setState({ tag: e.currentTarget.value });
  //   console.log(e.currentTarget.value);
  // };

  // Это метод для каждого инпута в рендере, если их мало то можно использовать их,
  // но грамотнее использовать примитивный паттерн для форм выше.

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
        <Form onSubmit={this.formSubmitHandler}></Form>
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
