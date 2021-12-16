import { Alert, Stack } from "@chakra-ui/react";
import { isEmail } from "@formiz/validations";

import { FieldInput, FieldInputProps } from "./FieldInput";
import { FieldSelect, FieldSelectProps } from "./FieldSelect";

export type DynamicField = (FieldInputProps | FieldSelectProps) & {
  type: "text" | "email" | "select";
};

export type DynamicFieldsProps = {
  fields: DynamicField[];
};

export const DynamicFields = ({ fields }: DynamicFieldsProps) => {
  return (
    <Stack>
      {fields?.map((field) => {
        switch (field.type) {
          // Text
          case "text":
            return <FieldInput key={field.name} {...field} />;

          // Email
          case "email":
            return (
              <FieldInput
                key={field.name}
                inputType="email"
                placeholder="name@company.com"
                {...field}
                validations={[
                  { rule: isEmail(), message: "Email is not valid" },
                  ...(field.validations ?? [])
                ]}
              />
            );

          // Select
          case "select":
            return <FieldSelect key={field.name} options={[]} {...field} />;

          // Not Implemented
          default:
            return <Alert status="error">Not implemented</Alert>;
        }
      }) ?? null}
    </Stack>
  );
};
