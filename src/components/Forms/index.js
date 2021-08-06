import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

export const InputText = ({
  register,
  rules,
  name,
  label,
  errors,
  ...props
}) => {
  return (
    <FormControl id={name} isInvalid={errors[name]}>
      <FormLabel>{label}</FormLabel>
      <Input
        focusBorderColor="green.500"
        id={name}
        {...props}
        name={name}
        {...register(name, rules)}
      />
      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
};

export const InputTextArea = ({
  register,
  rules,
  name,
  label,
  errors,
  ...props
}) => {
  return (
    <FormControl id={name} isInvalid={errors[name]}>
      <FormLabel>{label}</FormLabel>
      <Textarea
        focusBorderColor="green.500"
        id={name}
        {...props}
        name={name}
        {...register(name, { ...rules })}
      />
      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
};
