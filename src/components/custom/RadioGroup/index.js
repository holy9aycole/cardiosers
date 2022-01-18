import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { FormHelperText, RadioGroup as MaterialRadioGroup } from '@mui/material';

const RadioGroup = React.forwardRef((props, ref) => {
  const { control } = useFormContext();
  const { name, defaultValue, children, ...rest } = props;

  return (
    <Controller
      control={control}
      defaultValue={defaultValue || ''}
      name={name}
      render={({ field, fieldState: { invalid, error } }) => (
        <>
          <MaterialRadioGroup {...rest} {...field} inputRef={ref}>
            {children}
          </MaterialRadioGroup>
          {invalid && <FormHelperText error>{error?.message}</FormHelperText>}
        </>
      )}
    />
  );
});

export default React.memo(RadioGroup);
