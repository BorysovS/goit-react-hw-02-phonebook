import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const ContactForm = () => {
  return (
    <Formik>
      <Form autoComplete="off">
        <label>
          Name
          <Field />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
