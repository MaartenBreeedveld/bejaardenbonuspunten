import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

import { Responsive, Sidebar, Menu, Segment, Container, Icon, Button, Header } from 'semantic-ui-react';
import { routes } from '../../App';
import Auth from '../../auth';

const getWidth = () => {
  return window.innerWidth
}

const Navbar: React.FC = ({ children }) => {
  const { pathname } = useLocation();
  const history = useHistory();

  const [sidebarOpened, setSidebarOpened] = useState(false);

  const handleSidebarHide = () => setSidebarOpened(false);

  const handleToggle = () => setSidebarOpened(true);

  return (
    <Responsive
      as={Sidebar.Pushable}
      getWidth={getWidth}
      // maxWidth={Responsive.onlyMobile.maxWidth}
    >
      <Sidebar
        as={Menu}
        animation='push'
        inverted
        onHide={handleSidebarHide}
        vertical
        visible={sidebarOpened}
      >
        <Menu.Item as={Link} to={routes.overview} active={pathname === routes.overview}>
          Overzicht
        </Menu.Item>
        <Menu.Item as={Link} to={routes.withdraw} active={pathname === routes.withdraw}>Opnemen</Menu.Item>
        <Menu.Item as='a' 
          onClick={() => { 
            Auth.signOut();
            history.push(routes.home);
          }}>Afmelden</Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened}>
        <Segment
          inverted
          textAlign='center'
          vertical
        >
          <Container>
            <Menu inverted pointing secondary size='large'>
              <Menu.Item onClick={handleToggle}>
                <Icon name='sidebar' />
              </Menu.Item>
              <Menu.Item position='right'>
                {Auth.getCurrentUser() ? 
                <Header as="p" content={`Welkom ${Auth.getCurrentUser().name}`} inverted style={{fontSize: '12px'}}/>
                :
                <Button as={Link} to={routes.signin} inverted>
                  Aanmelden
                </Button>
                }
              </Menu.Item>
            </Menu>
          </Container>
        </Segment>
        {children}
      </Sidebar.Pusher>
    </Responsive>
  )
}

export default Navbar;