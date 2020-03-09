import React, {useState}                                    from 'react';
import {Badge, Box, Col, Content, Row, SimpleTable}         from 'adminlte-2-react';
import {Button, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import Collapse                                             from '../../components/UI/Collapse';
import DocumentsCreateModal                                 from '../../components/Settings/Documents/DocumentsCreateModal';

const data = [
  {
    id: 0,
    lang: 'EN',
    name: 'Name',
    text: 'text',
    order: 1,
    available: 0,
  },
  {
    id: 0,
    lang: 'EN',
    name: 'Name',
    text: 'text',
    order: 2,
    available: 0,
  },
  {
    id: 0,
    lang: 'EN',
    name: 'Name',
    text: 'google.com',
    order: 4,
    available: 0,
  },
  {
    id: 0,
    lang: 'EN',
    name: 'Name',
    text: 'text',
    order: 3,
    available: 1,
  },
  {
    id: 0,
    lang: 'EN',
    name: 'Name',
    text: 'text',
    order: 5,
    available: 2,
  },
];

const Documents = () => {
  const createUpdateModal = useState({isOpen: false, data: null});
  const [tab, setTab] = useState(1);

  const sortedData = data.sort((prevItem, nextItem) => {
    if (prevItem.order < nextItem.order) {
      return -1;
    }
    if (prevItem.order > nextItem.order) {
      return 1;
    }
    return 0;
  })
    .reduce((acc, item) => {
      acc[item.lang].push(item);
      return acc;
    }, {
      'EN': [],
      'RU': [],
      'CH': [],
    });

  return (
    <Content title="Documents" browserTitle="Documents">
      <Row>
        <Col lg={12} style={{marginBottom: '20px'}}>
          <Button color="primary"
                  onClick={() => createUpdateModal[1]({isOpen: true, data: null})}
          >
            Create new
          </Button>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Box>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={tab === 1 ? 'active' : ''}
                  onClick={() => { setTab(1) }}
                >
                  EN
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={tab === 2 ? 'active' : ''}
                  onClick={() => { setTab(2) }}
                >
                  RU
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={tab === 3 ? 'active' : ''}
                  onClick={() => { setTab(3) }}
                >
                  CH
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={tab}>
              <TabPane tabId={1}>
                {sortedData['EN'].map(item =>
                  <Collapse title={item.name}
                            description={item.text}
                            order={item.order}
                            onEdit={() => {createUpdateModal[1]({isOpen: true, data: item})}}
                  />)}

              </TabPane>
              <TabPane tabId={2}>
                {sortedData['RU'].map(item =>
                  <Collapse title={item.name}
                            description={item.text}
                            order={item.order}
                  />)}
              </TabPane>
              <TabPane tabId={3}>
                {sortedData['CH'].map(item =>
                  <Collapse title={item.name}
                            description={item.text}
                            order={item.order}
                  />)}
              </TabPane>
            </TabContent>
          </Box>
        </Col>
      </Row>
      <DocumentsCreateModal hook={createUpdateModal}/>
    </Content>
  );
};

export default Documents;