import { Formik, Form, Field } from 'formik';

export const MaterialEditorForm = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
      <Form>
        <label>
          Discription:
          <Field name="title" type="text" />
        </label>
        <br />
        <label>
          Link:
          <Field name="title" type="url" />
        </label>
        <br />
        <button type="submit">Add material.</button>
      </Form>
    </Formik>
  );
};
