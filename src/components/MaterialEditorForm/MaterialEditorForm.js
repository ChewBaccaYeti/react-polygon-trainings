import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import styles from './MEF.module.css';

const Input = styled(Field)`
  border: 3px solid orange;
  border-radius: 3px;
  font-size: 30px;
`;

export const MaterialEditorForm = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <label className={styles.label}>
            Description:
            <Input name="title" type="text" />
          </label>
          <label className={styles.label}>
            Link:
            <Field name="link" type="url" />
          </label>
          <button type="submit" disabled={isSubmitting}>
            Add material
          </button>
        </Form>
      )}
    </Formik>
  );
};
