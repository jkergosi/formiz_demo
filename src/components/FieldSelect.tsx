import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  SelectProps,
} from '@chakra-ui/react';
import { useField } from '@formiz/core';
import { FieldCommonProps } from '../types';

export type FieldSelectOption = {
  label?: string;
  value: SelectProps['value'];
};

export type FieldSelectProps = FieldCommonProps &
  Pick<SelectProps, 'placeholder'> & {
    options?: FieldSelectOption[];
  };

export const FieldSelect = (props: FieldSelectProps) => {
  const {
    id,
    isValid,
    isSubmitted,
    errorMessage,
    value,
    setValue,
    otherProps,
  } = useField(props);
  const { required } = props;
  const { label, helper, placeholder = 'Select option', options } = otherProps;
  const showError = !isValid && isSubmitted;

  return (
    <FormControl id={id} isRequired={!!required} isInvalid={showError}>
      {!!label && <FormLabel>{label}</FormLabel>}
      <Select
        value={value || ''}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      >
        {(options || []).map((item: FieldSelectOption) => (
          <option key={item.value?.toString()} value={item.value}>
            {item.label || item.value}
          </option>
        ))}
      </Select>
      {!!helper && <FormHelperText>{helper}</FormHelperText>}
      {!!errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};
