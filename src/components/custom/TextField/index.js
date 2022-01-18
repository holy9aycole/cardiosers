import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import MaterialTextField from '@mui/material/TextField';

const TextField = (props) => {
  const { control } = useFormContext();
  const { name, defaultValue, error: showError = true, onChange, ...rest } = props;
  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field, fieldState: { invalid, error } }) => (
        <MaterialTextField
          {...field}
          {...rest}
          value={field.value || ''}
          onChange={(e) => {
            field.onChange(e);
            if (onChange) onChange(e);
          }}
          inputRef={field.ref}
          error={invalid}
          helperText={showError && (error?.message || ' ')}
        />
      )}
    />
  );
};

export default React.memo(TextField);
