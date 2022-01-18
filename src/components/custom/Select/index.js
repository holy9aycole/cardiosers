import React, { useEffect } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Select as MaterialSelect, FormHelperText, InputLabel, FormControl } from '@mui/material';

const Select = React.forwardRef((props, ref) => {
  const { control, setValue, getValues } = useFormContext();
  const {
    name,
    defaultValue,
    children,
    upperStyles,
    className,
    FormControlProps = {},
    ...rest
  } = props;
  useEffect(() => {
    if (!getValues(name)) setValue(name, children?.[0]?.props?.value);
  }, [getValues(name), children]);

  return (
    <Controller
      control={control}
      defaultValue={defaultValue || children?.[0]?.props?.value}
      name={name}
      render={({ field, fieldState: { invalid, error } }) => (
        <>
          <FormControl
            error={invalid}
            variant="standard"
            fullWidth
            sx={{ ...upperStyles }}
            {...FormControlProps}
          >
            {rest?.label && <InputLabel htmlFor={field.name}>{rest?.label}</InputLabel>}
            <MaterialSelect
              {...field}
              {...rest}
              ref={ref}
              value={field.value}
              className={className}
            >
              {children}
            </MaterialSelect>
            {invalid && <FormHelperText error>{error?.message}</FormHelperText>}
          </FormControl>
        </>
      )}
    />
  );
});

export default React.memo(Select);
