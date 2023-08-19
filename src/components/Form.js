import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Container from 'components/Container';

class Form extends Component {
  state = {
    name: 'Lebovski',
    tag: 'Dude',
  }; // В данном случае не будет работать сброс значений(reset),
  //так как тут значение контролируется состоянием(state)

  generateUniqueId = () => {
    const id = nanoid(5);
    return id;
  };

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
          <label htmlFor={this.generateUniqueId()}>
            Имя{' '}
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              id={this.generateUniqueId()}
            />
          </label>

          <label htmlFor={this.generateUniqueId()}>
            Прозвище{' '}
            <input
              type="text"
              name="tag"
              value={this.state.tag}
              onChange={this.handleChange}
              id={this.generateUniqueId()}
            ></input>
          </label>
          <button type="submit">Отправить</button>
        </form>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.generateUniqueId()}>
            Имя{' '}
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              id={this.generateUniqueId()}
            />
          </label>

          <label htmlFor={this.generateUniqueId()}>
            Прозвище{' '}
            <input
              type="text"
              name="tag"
              value={this.state.tag}
              onChange={this.handleChange}
              id={this.generateUniqueId()}
            ></input>
          </label>

          <p>Ваш уровень:</p>
          <label htmlFor={this.generateUniqueId()}>
            <input
              type="radio"
              name="experience"
              value="Junior"
              onChange={this.handleChange}
              checked={this.state.experience === 'Junior'}
            />
            Junior
          </label>

          <br />

          <label htmlFor={this.generateUniqueId()}>
            <input
              type="radio"
              name="experience"
              value="Middle"
              onChange={this.handleChange}
              checked={this.state.experience === 'Middle'}
            />
            Middle
          </label>

          <br />

          <label htmlFor={this.generateUniqueId()}>
            <input
              type="radio"
              name="experience"
              value="Senior"
              onChange={this.handleChange}
              checked={this.state.experience === 'Senior'}
            />
            Senior
          </label>

          <button type="submit">Отправить</button>
        </form>
      </Container>
    );
  }
}

export default Form;
