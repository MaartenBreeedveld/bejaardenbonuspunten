import React, { useContext } from 'react';
import { Form, Segment, Header, Button, Dropdown } from 'semantic-ui-react';
import Auth from '../auth';
import { routes } from '../App';
import { AuthContext, StatsContext } from '../contexts/MainContextProvider';
import { PersonStats } from '../StatsApi';

export const WithdrawPage: React.FC = () => {
  const [ auth ] = useContext<any>(StatsContext);


  return (
  <Form size='large'>
      <Header as="h1" content="BBP's opnemen"></Header>
    <Segment stacked>
      <Header as="h5" content={`Saldo €${}`}></Header>
    </Segment>
    <Segment stacked>
      <Header as="h3" content="Naam"></Header>
      <DropdownPersons />
      <Header as="h3" content="Actie"></Header>
      <DropdownPersons />
      <Button fluid size='large'>Uitvoeren</Button>
    </Segment>
  </Form>
  )
}


const options = () => [
  { key: 1, text: 'Maarten', value: 1 },
  { key: 2, text: 'Christine', value: 2 },
  { key: 3, text: 'Frans', value: 3 },
  { key: 4, text: 'Mieke', value: 4 },
]



const DropdownPersons: React.FC = () => (
  <Dropdown clearable options={options()} selection value={1} />
)