import React, { createRef, useEffect, useState } from 'react'
import { Table, Header, Grid, Form, Segment, Button, Message, Input } from 'semantic-ui-react'
import Auth from '../auth';
import { useHistory } from 'react-router';
import { routes } from '../App';

const SignInPage = () => {
  const [pass, setPass] = useState('xxxx');
  const history = useHistory();

  return (
    <>
      <Header as='h2' textAlign='center'>
        Aanmelden voor je BBP account
      </Header>
      <Form style={{margin: '0px 20px'}}>
        <Segment stacked vertical >
          <Header as="h3" content="Christine Breedveld"></Header>
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            onChange={e => setPass(e.target.value)}
          />
          <Button fluid size='large' onClick={() => Auth.signIn('Christine Breedveld', pass).then((result) => {
            if (result) history.push(routes.overview);
          })}>
            Login
          </Button>
        </Segment>
      </Form>
    </>
  );
}

export default SignInPage;
