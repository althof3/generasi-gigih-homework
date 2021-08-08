import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

export const InputText: React.FC<{
  register: (name: string, rules: { [key: string]: string }) => void;
  rules: { [key: string]: string }
}> = ({ register, rules, name, label, errors, ...props }) => {
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

export const InputTextArea: React.FC = ({
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
