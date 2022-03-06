import React, { useEffect } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Switch as MaterialSwitch, FormHelperText, FormControl } from '@mui/material';

const Switch = React.forwardRef((props, ref) => {
  const { control, setValue, getValues } = useFormContext();
  const { name, bool, onChange, ...rest } = props;
  useEffect(() => {
    if (getValues(name) === undefined) setValue(name, bool ? false : 0);
  }, [getValues(name)]);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { invalid, error } }) => {
        const customOnChange = (e) => {
          if (bool) {
            field.onChange(e);
          } else {
            setValue(name, e.target.checked ? 1 : 0);
          }
          if (onChange) onChange(e);
        };
        return (
          <FormControl error>
            <MaterialSwitch
              {...field}
              {...rest}
              inputRef={ref}
              checked={bool ? field.value : field.value === 1}
              onChange={customOnChange}
            />
            {invalid && <FormHelperText error>{error?.message}</FormHelperText>}
          </FormControl>
        );
      }}
    />
  );
});

export default React.memo(Switch);
