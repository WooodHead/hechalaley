import React from 'react'
import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  AutocompleteInput
} from 'admin-on-rest/lib/mui'

export default (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='name' validation={{ required: true }} />
      <TextInput source='lastname' validation={{ required: true }} />
      <TextInput source='bio' />
      <TextInput
        source='pictureURL'
        validation={{ required: true }}
        placeholder='http://perfiles.com/avatar-usuario.jpg' />
      <TextInput
        source='appoinment'
        validation={{ required: true }}
        placeholder='Diputado Nacional' />
      <TextInput
        source='party'
        validation={{ required: true }}
        placeholder='Unión Política Lateral' />
      <ReferenceInput source='jurisdiction' reference='jurisdictions'>
        <AutocompleteInput optionText='name' />
      </ReferenceInput>
    </SimpleForm>
  </Create>
)