import { DynamicField } from './components/DynamicFields';

export const fields: DynamicField[] = [
  {
    type: 'text',
    name: 'firstName',
    label: 'First Name',
    required: 'First Name is required',
  },
  {
    type: 'text',
    name: 'lastName',
    label: 'Last Name',
    required: 'Last Name is required',
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    required: 'Email is required',
  },
  {
    type: 'select',
    name: 'language',
    label: 'Language',
    required: 'Language is required',
    defaultValue: 'en',
    options: [
      { label: 'English', value: 'en' },
      { label: 'French', value: 'fr' },
    ],
  },
];
