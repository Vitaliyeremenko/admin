import React from 'react';
import useCollapse from 'react-collapsed';
import { Card, Button, CardHeader, CardFooter, CardBody, } from 'reactstrap';

import '../../styles/UI/Collapse.sass';

const Collapse = ({title, description, order, onEdit}) => {
  const {getCollapseProps, getToggleProps} = useCollapse();

  return (
    <div className='collapse-item'>
      <Card>
        <CardHeader {...getToggleProps()} >
          <span>{title}</span>
          <span className="order">Order: {order}</span>
          <i className="fa fa-chevron-down"/>
        </CardHeader>
        <CardBody {...getCollapseProps()}>
          <div className="collapse-item__content" dangerouslySetInnerHTML={{__html: description}}>
          </div>
          <CardFooter>
            <Button color="primary" onClick={onEdit}>Edit</Button>
          </CardFooter>
        </CardBody>
      </Card>
    </div>

  );
};

export default Collapse;