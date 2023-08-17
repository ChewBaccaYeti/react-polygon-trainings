import React from 'react';
import './ColorPicker.css';

class ColorPicker extends React.Component {
  state = {
    activeOptionIdx: 2,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }

    return optionClasses.join(' ');
  };

  render() {
    const { label } = this.props.options[this.state.activeOptionIdx]; // Вычисляемое свойство === то, что вычисляется на базе props и state
    console.log(label);

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                className={this.makeOptionClassName(index)}
                style={{
                  background: color,
                  // Сравнение по индексу массива
                  //   border:
                  //     index === this.state.activeOptionIdx // if Ставить не надо, так как это JSX выражение.
                  //       ? '3px solid black'
                  //       : 'none',
                }}
                onClick={() => this.setActiveIdx(index)} // Делегирование событий в React сделано по умолчанию, и onClick это регистрация функции, eventListener не вешается здесь.
              ></button> // if Я напишу вот так this.setActiveIdx(index) то это приведет к вызову функции === результат, тобиш undefined, а надо передать ссілку на функцию.
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
