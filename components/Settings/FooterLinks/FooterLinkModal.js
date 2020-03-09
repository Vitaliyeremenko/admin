import React, {useEffect, useState}                                                  from 'react';
import {Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import Select                                                                        from 'react-select';
import {isNotEmptyObject}                                                            from '../../../utils/Helpers';


const FooterLinkModal = ({hook}) => {
  const initialFormData = {
    page: '',
    column: '',
    order: '',
    available: 0,
  };

  const [data, setData] = hook;
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    const dataCopy = {...data.data};
    if (isNotEmptyObject(dataCopy)) {
      dataCopy.page = pageOptions.find(item => item.value === dataCopy.page);
      dataCopy.column = positionOptions.find(item => item.value === dataCopy.column);
      setFormData(dataCopy);
    } else {
      setFormData(initialFormData);
    }
  }, [data.data]);

  const updateFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  };

  const hideModal = () => {
    setData({isOpen: false});
  };

  const updateCheckbox = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    })
  };

  const saveModal = () => {
    console.log(formData);
  };


  const pageOptions = [
    {value: 'page', label: 'page'},
    {value: 'about', label: 'about'},
    {value: 'nice', label: 'nice'},
  ];

  const positionOptions = [
    {value: 1, label: '1 column'},
    {value: 2, label: '2 column'},
    {value: 3, label: '3 column'},
  ];
  return (
    <Modal isOpen={data.isOpen} toggle={hideModal} fade={null}>
      <ModalHeader toggle={hideModal}>Modal title</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label>Page</Label>
          <Select options={pageOptions}
                  value={formData.page}
                  onChange={type => {setFormData({...formData, page: type})}}
          />
        </FormGroup>
        <FormGroup>
          <Label>Position</Label>
          <Select options={positionOptions}
                  value={formData.column}
                  onChange={type => {setFormData({...formData, column: type})}}
          />
        </FormGroup>
        <FormGroup>
          <Label>Order </Label>
          <Input placeholder="Order"
                 name="order"
                 value={formData.order}
                 onChange={updateFormData}
          />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <span style={{marginRight: '10px'}}>Available</span>{' '}
            <Input type="checkbox"
                   name="available"
                   checked={formData.available}
                   onChange={updateCheckbox}
            />
          </Label>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={saveModal}>Confirm</Button>{' '}
      </ModalFooter>
    </Modal>
  );
};

export default FooterLinkModal;