import React from 'react';
import { FormProvider } from 'react-hook-form';

const Form = (props) => {
  const { methods, onSubmit, children, ...rest } = props;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit, (err) => console.log('FORM FIELD ERROR', err))}
        {...rest}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
