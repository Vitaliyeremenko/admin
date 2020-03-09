import React      from 'react';
import PropTypes  from 'prop-types';
import {Col, Row} from 'adminlte-2-react';
import {Button}   from 'reactstrap';

import '../../styles/User/BasicInfo.sass';

const defaultInfo = {
  name: 'Ivan',
  email: 'Super mail.com',
  referral: '1',
  review_user: '0',
  rating_user: '0',
  double_auth_email: true,
  double_auth_google: false,
  email_notification: false,
  telegram_notification: true,
  user_country: 186,
  user_login_ip: '132.15.15.13',
};

const BasicInfo = ({info}) => {
  info = defaultInfo;

  function getCheckOrNotIcon(value) {
    return value ?
      <i className="fa fa-check"/>
      : <i className="fa fa-close"/>
  }
  return (
    <div className="basic-info">
      <Row>
        <Col lg={6}>
          <div className="basic-info-row">
            <span>User name</span>
            <div>{info.name}</div>
          </div>
          <div className="basic-info-row">
            <span>E-mail</span>
            <div>{info.email}</div>
          </div>
          <div className="basic-info-row">
            <span>referral</span>
            <div>{info.referral}</div>
          </div>
          <div className="basic-info-row">
            <span>review_user</span>
            <div>{info.review_user}</div>
          </div>
          <div className="basic-info-row">
            <span>rating_user</span>
            <div>{info.rating_user}</div>
          </div>
          <div className="basic-info-row">
            <span>Set User Online</span>
            <div>
              <Button color="primary">
                Set online
              </Button>
            </div>
          </div>
          <div className="basic-info-row">
            <span>Block User</span>
            <div>
              <Button color="primary">
                Block
              </Button>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="basic-info-row">
            <span>double_auth_email</span>
            <div>{getCheckOrNotIcon(info.double_auth_email) }</div>
          </div>
          <div className="basic-info-row">
            <span>double_auth_google</span>
            <div>{getCheckOrNotIcon(info.double_auth_google )}</div>
          </div>
          <div className="basic-info-row">
            <span>email_notification</span>
            <div>{getCheckOrNotIcon(info.email_notification )}</div>
          </div>
          <div className="basic-info-row">
            <span>telegram_notification</span>
            <div>{getCheckOrNotIcon(info.telegram_notification )}</div>
          </div>
          <div className="basic-info-row no-border">
            <span>User setting:</span>
          </div>
          <div className="basic-info-row no-border">
            <span>user_country</span>
            <div>{info.user_country}</div>
          </div>
          <div className="basic-info-row">
            <span>user_login_ip</span>
            <div>{info.user_login_ip}</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

BasicInfo.propTypes = {
  info: PropTypes.object,
};

export default BasicInfo;