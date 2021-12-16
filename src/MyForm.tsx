import { Box, Button, ButtonGroup, Heading, Stack } from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';
import { DynamicFields } from './components/DynamicFields';
import { fields } from './fields';

export const MyForm = () => {
  const form = useForm();
  return (
    <Box p="4" maxW="lg" mx="auto">
      <Formiz autoForm connect={form} onValidSubmit={console.log}>
        <Stack spacing="4">
          <Heading>Dynamic Form</Heading>
          <DynamicFields fields={fields} />
          <ButtonGroup>
            <Button type="submit" colorScheme="green">
              Submit
            </Button>
          </ButtonGroup>
        </Stack>
      </Formiz>
    </Box>
  );
};
