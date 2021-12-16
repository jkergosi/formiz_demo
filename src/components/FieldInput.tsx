import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputProps,
} from '@chakra-ui/react';
import { useField } from '@formiz/core';
import { FieldCommonProps } from '../types';

export type FieldInputProps = FieldCommonProps &
  Pick<InputProps, 'placeholder'> & {
    inputType?: InputProps['type'];
  };

export const FieldInput = (props: FieldInputProps) => {
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
  const { label, helper, inputType = 'text', placeholder } = otherProps;
  const showError = !isValid && isSubmitted;

  return (
    <FormControl id={id} isRequired={!!required} isInvalid={showError}>
      {!!label && <FormLabel>{label}</FormLabel>}
      <Input
        type={inputType}
        value={value ?? ''}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      {!!helper && <FormHelperText>{helper}</FormHelperText>}
      {!!errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};
