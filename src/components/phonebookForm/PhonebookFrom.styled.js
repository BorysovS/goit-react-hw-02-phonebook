import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  width: 600px;
  padding: 20px 32px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #dce6e5;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

export const ErrorMessage = styled(FormikError)`
  margin-left: 20px;
  color: red;
`;

export const InputName = styled.span``;
