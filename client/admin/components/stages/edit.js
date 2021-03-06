import { CardActions } from '@material-ui/core'
import {
  Edit,
  TabbedForm,
  FormTab,
  TextInput,
  NullableBooleanInput,
  ReferenceInput,
  DateInput,
  DeleteButton
} from 'react-admin'
import SearchableSelectInput from '../searchable-select-input'
import TextEditor from '../text-editor'

const Actions = ({ basePath, data, resource }) => (
  <CardActions style={{
    zIndex: 2,
    display: 'inline-block',
    float: 'right'
  }}
  >
    <DeleteButton basePath={basePath} record={data} resource={resource} />
  </CardActions>
)

const ListTitle = ({ record }) => (
  <div>
    <span>{record ? `${record.title}` : ''}</span>
  </div>
)

export default (props) => (
  <Edit title={<ListTitle />} undoable={false} actions={<Actions />} {...props}>
    <TabbedForm redirect={false}>
      <FormTab label='hechalaley.stageAttributes'>
        <ReferenceInput
          source='bill'
          reference='bills'
          validation={{ required: true }}
          allowEmpty
          width={'400px'}
        >
          <SearchableSelectInput optionText='title' />
        </ReferenceInput>
        <NullableBooleanInput source='published' />
        <TextInput source='title' validation={{ required: true }} />
        <TextInput source='summary' validation={{ required: true }} />
        <TextInput source='identification' validation={{ required: true }} />
        <TextInput source='currentCondition' allowEmpty />
        <TextInput source='nextCondition' allowEmpty />
        <DateInput source='stageDate' validation={{ required: true }} />
        <ReferenceInput source='authors' reference='politicians' allowEmpty>
          <SearchableSelectInput
            optionText='fullname'
            options={{ multi: true }}
          />
        </ReferenceInput>
      </FormTab>
      <FormTab label='hechalaley.stageText'>
        <TextEditor source='text' />
      </FormTab>
    </TabbedForm>
  </Edit>
)
