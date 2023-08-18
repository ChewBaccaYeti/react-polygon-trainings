import React, { Component } from 'react';
import Container from 'components/Container';

class Form extends Component {
  state = {
    name: 'Lebovski',
    tag: 'Dude',
  }; // В данном случае не будет работать сброс значений(reset),
  //так как тут значение контролируется состоянием(state)

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value }); // Вычисляемые свойства объектов, в данном случае используем паттерн событий(event) для форм вместо методов ниже.
    // Данный метод НЕ работает для чекбоксов и радио-кнопок и тд.
  };

  handleSubmit = e => {
    // Отдельный метод для фомы необходим так как это Submit
    e.preventDefault(); // Вызов данного метода не даст перезапустить страницу по умолчанию
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', value: '' }); // Метод ручной очистки значения в инпуте
  };

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <label>
            Имя{' '}
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Прозвище
            <input
              type="text"
              name="tag"
              value={this.state.tag}
              onChange={this.handleChange}
            ></input>
          </label>
          <button type="submit">Отправить</button>
        </form>
      </Container>
    );
  }
}

export default Form;
