import { Field, Form, Formik } from 'formik';

const initialValues = {
  cardHolders: '',
  cardNumber: '',
  cvv: '',
};

export const VisaPaymentFrom = () => {
  const HandleSubmit = (values, actions) => {
    console.log(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={HandleSubmit}>
      <Form>
        <label>
          <span>Card holder</span>
          <Field name="cardHolder"></Field>
        </label>
        <label>
          <span>Card number</span>
          <Field name="cardNumber"></Field>
        </label>
        <label>
          <span>CVV</span>
          <Field name="cvv"></Field>
        </label>
        <button type="submit">Pay</button>
      </Form>
    </Formik>
  );
};
