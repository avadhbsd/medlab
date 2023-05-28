import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LabtestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="TestName" source="name" />
      </SimpleForm>
    </Create>
  );
};
