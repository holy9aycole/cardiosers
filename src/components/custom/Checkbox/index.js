import React, { useEffect } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Checkbox as MaterialCheckbox, FormHelperText, FormControl } from '@mui/material';

const Checkbox = React.forwardRef((props, ref) => {
  const { control, setValue, getValues } = useFormContext();
  const { name, bool, ...rest } = props;
  useEffect(() => {
    if (getValues(name) === undefined) setValue(name, bool ? false : 0);
  }, [getValues(name)]);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { invalid, error } }) => {
        const onChange = (e) => {
          if (bool) {
            field.onChange(e);
          } else {
            setValue(name, e.target.checked ? 1 : 0);
          }
        };
        return (
          <FormControl error>
            <MaterialCheckbox
              {...rest}
              {...field}
              onChange={onChange}
              checked={bool ? field.value : field.value === 1}
              inputRef={ref}
            />
            {invalid && <FormHelperText error>{error?.message}</FormHelperText>}
          </FormControl>
        );
      }}
    />
  );
});

export default Checkbox;
