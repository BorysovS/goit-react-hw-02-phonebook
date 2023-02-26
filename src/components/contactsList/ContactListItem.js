import { AiOutlinePhone } from 'react-icons/ai';

export const ContactListItem = ({ name, number, id, onDelete }) => {
  return (
    <div>
      <AiOutlinePhone />
      <span>{name}:</span>
      <span>{number}</span>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
