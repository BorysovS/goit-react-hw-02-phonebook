import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { Form, ErrorMessage, FormLabel } from './PhonebookFrom.styled';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(9, 'Format tel: xxx-xx-xx')
    .max(9, 'Format tel: xxx-xx-xx')
    .required('Required'),
});

export const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, actions) => {
        onSubmit({ ...values, id: nanoid() });
        actions.resetForm();
      }}
      validationSchema={ContactSchema}
    >
      <Form autoComplete="off">
        <FormLabel htmlFor="name">
          <span>Name</span>
          <Field name="name" placeholder="Name" />
          <ErrorMessage name="name" component="span" />
        </FormLabel>
        <FormLabel htmlFor="number">
          <span>Number</span>
          <Field name="number" placeholder="xxx-xx-xx" />
          <div>
            <ErrorMessage name="number" component="span" />
          </div>
        </FormLabel>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
