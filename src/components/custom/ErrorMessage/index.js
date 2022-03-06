import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage as FormErrorMessage } from '@hookform/error-message';
import { FormHelperText } from '@mui/material';

const ErrorMessage = (props) => {
  const {
    formState: { errors }
  } = useFormContext();

  return (
    <FormErrorMessage
      errors={errors}
      {...props}
      render={({ message }) => <FormHelperText error>{message}</FormHelperText>}
    />
  );
};

export default React.memo(ErrorMessage);
