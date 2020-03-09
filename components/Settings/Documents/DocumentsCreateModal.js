import React, {useEffect, useState}                                                  from 'react';
import {Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import Select                                                                        from 'react-select';
import {isNotEmptyObject}                                                            from '../../../utils/Helpers';

const DocumentsCreateModal = ({hook}) => {
  const initialFormData = {lang: '', name: '', order: '', text: '', available: 0};

  const [data, setData] = hook;
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    const dataCopy = {...data.data};
    if(isNotEmptyObject(dataCopy)){
      dataCopy.lang = selectOptions.find(item => item.label === dataCopy.lang);
      setFormData(dataCopy);
    } else {
      setFormData(initialFormData);
    }
  },[data.data]);

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


  const selectOptions = [
    {value: 'en', label: 'EN'},
    {value: 'ru', label: 'RU'},
    {value: 'ch', label: 'CH'},
  ];
  return (
    <Modal isOpen={data.isOpen} toggle={hideModal} fade={null}>
      <ModalHeader toggle={hideModal}>Modal title</ModalHeader>
      <ModalBody>
        <FormGroup>

          <Label>Lang</Label>
          <Select options={selectOptions}
                  value={formData.lang}
                  onChange={type => {setFormData({...formData, lang: type})}}
          />
        </FormGroup>
        <FormGroup>
          <Label>Question </Label>
          <Input placeholder="Question"
                 name="question"
                 value={formData.name}
                 onChange={updateFormData}
          />
        </FormGroup>
        <FormGroup>
          <Label>Link </Label>
          <Input placeholder="Link"
                 name="text"
                 value={formData.text}
                 onChange={updateFormData}
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

export default DocumentsCreateModal;