import React from 'react'
import { Table, Header } from 'semantic-ui-react'
import StatsApi from '../StatsApi'

const StatsPage = () => (
  <Table basic='very' celled>

    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Sinterklaas</Table.HeaderCell>
        <Table.HeaderCell>BBP's</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {StatsApi.getStats().map(stat => {
        return <Table.Row key={stat.id}>
          <Table.Cell>
            <Header as='h4'>
              <Header.Content>
                {stat.name}
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>{stat.bbp}</Table.Cell>
        </Table.Row>
      })}

    </Table.Body>
  </Table>
)

export default StatsPage;
