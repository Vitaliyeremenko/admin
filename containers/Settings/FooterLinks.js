import React, {useState}                            from 'react';
import {Badge, Box, Col, Content, Row, SimpleTable} from 'adminlte-2-react';
import {Button}                                     from 'reactstrap';
import Collapse                                     from '../../components/UI/Collapse';
import FooterLinkModal                              from '../../components/Settings/FooterLinks/FooterLinkModal';

const FooterLinks = () => {
  const createUpdateModal = useState({isOpen: false, data: null});
  const data = [
    {
      id: 0,
      page: 'about',
      column: 2,
      order: 1,
      available: 1,
    },
    {
      id: 0,
      page: 'about',
      column: 2,
      order: 1,
      available: 1,
    },
    {
      id: 0,
      page: 'about',
      column: 2,
      order: 1,
      available: 1,
    },
  ];
  return (
    <Content title="Faq" browserTitle="Faq">
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
            {data.map(item =>
              <Collapse title={item.page}
                        description={item.column}
                        order={item.order}
                        onEdit={() => {createUpdateModal[1]({isOpen: true, data: item})}}
              />)}
          </Box>
        </Col>
      </Row>
      <FooterLinkModal hook={createUpdateModal}/>
    </Content>
  );
};

export default FooterLinks;