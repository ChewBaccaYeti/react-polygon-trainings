import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  state = {
    visible: false,
    hoverColor: '',
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  colorHover = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Генерація випадкового HEX кольору
    this.setState({ hoverColor: randomColor });
  };

  //   show = () => {
  //     this.setState({ visible: true });
  //   };

  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  render() {
    const { visible } = this.state;

    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle} // {this.show}
          onMouseOver={this.colorHover}
          style={{ backgroundColor: this.state.hoverColor }}
        >
          {visible ? 'Hide' : 'Show'}
        </button>

        <button type="button" className="Dropdown__toggle" onClick={this.hide}>
          Спрятать
        </button>
        {this.state.visible && (
          <div className="Dropdown__menu">Выпадающее меню</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
