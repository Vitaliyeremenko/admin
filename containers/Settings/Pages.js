import React, {useState}                            from 'react';
import {Badge, Box, Col, Content, Row, SimpleTable} from 'adminlte-2-react';
import {Button}                                     from 'reactstrap';
import ConfirmationModal                            from '../../components/ConfirmationModal';
import PagesCreateModal                             from '../../components/Settings/Pages/PagesCreateModal';

const Pages = () => {

  const createUpdateModal = useState({isOpen: false, data: null});
  const [confirmModal, setConfirmModal] = useState({id: '', isOpen: false});

  const hideConfirmModal = () => {
    setConfirmModal({id: '', isOpen: false})
  };

  const removeItem = () => {
    hideConfirmModal();
  };

  const renderButton = (data, rowInfo) => {
    return <div>
      <Button color={'primary'}
              style={{marginBottom: '5px'}}
              onClick={() => {createUpdateModal[1]({data: rowInfo, isOpen: true})}}
      ><i className="fa fa-fw fa-pencil"/></Button>{' '}
      <Button color={'danger'}
              style={{marginBottom: '5px'}}
              onClick={() => {setConfirmModal({id: rowInfo.id, isOpen: true})}}
      ><i className="fa fa-fw fa-trash"/></Button>
    </div>
  };

  const renderActivation = data => {
    switch (data) {
      case 0:
        return <Badge color={'red'} text={'Не активирован'}/>;
      case 1:
        return <Badge color={'green'} text={'Активирован'}/>
    }
  };

  const columns = [
    {title: 'Lang', data: 'lang'},
    {title: 'Slug', data: 'slug'},
    {title: 'Title', data: 'title'},
    {title: 'Type', data: 'type'},
    {title: 'Active', data: 'activation', render: renderActivation},
    {title: 'Last Update', data: 'updated_at'},
    {title: 'Действия', data: 'buttons', render: renderButton},
  ];
  const data = [
    {
      id: 0,
      lang: "EN",
      slug: '/hek',
      title: 'Title',
      type: 'docs',
      activation: 1,
      pink: 'Pink page',
      updated_at: '12.21.3232 :342',
      text: 'page data'
    },
    {
      id: 1,
      lang: "EN",
      slug: '/hek',
      title: 'Title',
      type: 'docs',
      activation: 0,
      pink: 'Pink page',
      updated_at: '12.21.3232 :342',
      text: 'page data'
    },
    {
      id: 2,
      lang: "EN",
      slug: '/hek',
      title: 'Title',
      type: '/page/title',
      activation: 1,
      pink: 'Pink page',
      updated_at: '12.21.3232 :342',
      text: 'page data'
    },
    {
      id: 3,
      lang: "EN",
      slug: '/hek',
      title: 'Title',
      type: '/pahe/gdj',
      activation: 0,
      pink: 'Pink page',
      updated_at: '12.21.3232 :342',
      text: 'page data'
    },
  ];

  return (
    <Content title="Pages" browserTitle="Pages">
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
          <SimpleTable
            responsive={true}
            columns={columns}
            data={data}
            className="table"
          />
        </Col>
      </Row>
      <ConfirmationModal isOpen={confirmModal.isOpen}
                         hide={hideConfirmModal}
                         submit={removeItem}
                         text={'Are you sure you want to delete?'}
                         title={'Confirm'}
      />
      <PagesCreateModal hook={createUpdateModal}/>
    </Content>
  );
};

export default Pages;