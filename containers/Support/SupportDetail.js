import React, {Component}                           from 'react';
import {Badge, Box, Col, Content, Row, SimpleTable} from 'adminlte-2-react';
import { Button }                                   from 'reactstrap';
import FastAnswerButtons                            from '../../components/SupportDetail/FastAnswerButtons';
import {getDefaultTextes}                           from '../../utils/SuppotHelper';
import UserComment                                  from '../../components/SupportDetail/UserComment';

const comments = [
  {
    id: 1,
    user: {
      name: 'Banana man 2000',
      id: 12312312,
      avatar: '/images/avatar-default-icon.png',
    },
    text: 'Thank you!',
    date: '14.06.12312 12:12:12',
  },
  {
    id: 1,
    user: {
      name: 'Banana man 2000',
      id: 12312312,
      avatar: null,
    },
    text: 'Thank you!',
    date: '14.06.12312 12:12:12',
  },
  {
    id: 1,
    user: {
      name: 'Banana man 2000',
      id: 12312312,
      avatar: null,
    },
    text: 'Thank you!',
    date: '14.06.12312 12:12:12',
  },
  {
    id: 1,
    user: {
      name: 'Banana man 2000',
      id: 12312312,
      avatar: null,
    },
    text: 'Thank you!',
    date: '14.06.12312 12:12:12',
  },
];

class SupportDetail extends Component {
  state = {
    text: '',
  };

  getHeaderButtons = () => {
    return [
      <Button color="primary">Назад</Button>,
      ' ',
      <Button color="success">Просмотренно</Button>,
      ' ',
      <Button color="danger">Закрыть</Button>,
    ];
  };

  fastAnswerButtonsChangeHandler = (type) => {
    this.setState({
      text: getDefaultTextes(type),
    })
  };

  textChangeHandler = (event) => {
    this.setState({
      text: event.target.value,
    })
  };

  removeComment = id => {
    console.log('removeComment');
  };

  render() {
    const {text} = this.state;
    return (
      <Content title="Поддрежка" browserTitle="Поддержка">
        <Row>
          <Col lg={12}>
            <Box type={'warning'}
                 header={this.getHeaderButtons()}>
              <Box type={'success'}>
                <FastAnswerButtons onChange={this.fastAnswerButtonsChangeHandler}/>
                <textarea name="text"
                          value={text}
                          className="support-textarea"
                          onChange={this.textChangeHandler}
                />
                <p><input type="file"/></p>
                <p className="text-center"><Button color="success">Отправить</Button></p>
              </Box>
              <Box type={'warning'}>
                {comments.map(item => <UserComment data={item} onDelete={this.removeComment}/>)}
              </Box>
            </Box>
          </Col>
        </Row>
      </Content>
    );
  }
}

export default SupportDetail;