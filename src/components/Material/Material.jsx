import { Component } from 'react';

const EditMaterialModal = ({ onClose, onEdit }) => {
  return (
    <div>
      <h2>Модалка редактирования материала</h2>
      <button
        type="button"
        onClick={() => {
          onEdit();
          onClose();
        }}
      >
        Redact here
      </button>
      <button type="button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export class Material extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { item, onDelete, onUpdate } = this.props;
    const { isModalOpen } = this.state;

    return (
      <div>
        {' '}
        <p>
          <b>Name:</b> {item && item.title}
        </p>
        <p>
          <b>Link:</b> {item && item.link}
        </p>
        <br />
        <button type="button" onClick={() => onDelete(item.id)}>
          Delete
        </button>
        <button type="button" onClick={this.openModal}>
          Update
        </button>
        {isModalOpen && (
          <EditMaterialModal
            onClose={this.closeModal}
            onEdit={() => onUpdate({ id: item.id, title: Date.now() })}
          />
        )}
      </div>
    );
  }
}
