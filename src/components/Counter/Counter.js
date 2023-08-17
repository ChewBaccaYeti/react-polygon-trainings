import React from 'react';
import './Counter.css';
import './Controls/Controls.css';
import './Value/Value.css';
import Controls from './Controls/Controls';
import Value from './Value/Value';

class Counter extends React.Component {
  // Начальное состояние от props
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};

  // Старый способ присвоения значения состоянию
  // constructor () {
  //   super();
  //   this.state = {
  //     value: 5,
  // }

  // Новый способ присвоения, блягодаря Babel
  state = {
    value: this.props.initialValue,
  };
  // Передать наверх, не основываясь на предыдущем, а это значит что при написании счетчика обновлений, регистрации тобиш, сколько бы я не добавлял,
  // если во всех циклах будет +1, то оно так и останится +1,
  // то есть при нажатии кнопки мышки например, всегда будет добавляться +1, не зависимо сколько циклов, пусть даже если их 10 или 100.
  handleIncrement = () => {
    // this.setState(
    //   {
    //     value: 123,
    //     a: 1,
    //     b: 2,
    //     c: 3,
    //   },
    //   () => {} // Эта функция будет вызвана только при изменении состояния(state.value), как последствия изменения
    // );
    // Это передача обновления состояния наверх, основывается на предыдущем значении
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
    // Механизм обновления state (можно и prevState)
    // currState = { value: 123, a: 1, b: 2, c: 3 };

    // update = {
    //   value: 'abc',
    // };

    // newState = { ...currState, ...update } > { a: 1, b: 2, c: 3, value: 'abc' };

    console.log('Кликнуть в увеличить');
    console.log(this);

    // При асинхронном действии, как например с задержкой ниже, нужно занести(сохранить) значение в переменную
    // const {
    //   target,
    // } = () => {
    //   setTimeout(() => {
    //     console.log(target);
    //   }, 1000);
    // };

    // Как и setTimeout(() => {}, 1000); обновление state это асинхронная операция
  };

  // Это передача обновления состояния наверх, основывается на предыдущем значении
  handleDecrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });

    console.log('Кликнуть в уменьшить');
    console.log(this);
  };

  render() {
    const { value } = this.state;

    return (
      <div className="Counter">
        <Value value={value} />

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;

// Компоненты перерендеваются в 2х случаях =>
// 1) Если в них приходят новые свойства(props)
// 2) Внутри них изменяется состояние(state)

// Функциональные компоненты перерендерятся только когда в них приходят новые свойтсва
// 1) Если в них приходят новые свойства(props)
