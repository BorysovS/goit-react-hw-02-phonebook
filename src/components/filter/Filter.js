// import { Formik, Form, Field, ErrorMessage } from 'formik';

export const Filter = ({ onChange, filter }) => {
  return (
    <label htmlFor="filter">
      Find contact by name
      <input
        name="filter"
        placeholder="Find"
        onChange={onChange}
        value={filter}
      />
    </label>
  );
};
