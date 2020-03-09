import React, {useState, useEffect}                                                  from 'react';
import {Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import Select                                                                        from 'react-select';
import {isNotEmptyObject}                                                            from '../../../utils/Helpers';

const CurrencyCreateModal = ({hook}) => {
  const initialFormData = {name: '', short_name: '', logo: '', type: '', active: 0};
  const [data, setData] = hook;

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    const dataCopy = {...data.data};
    if(isNotEmptyObject(dataCopy)){
      dataCopy.type = selectOptions.find(item => item.value === dataCopy.type);
      setFormData(dataCopy);
    } else {
      setFormData(initialFormData);
    }
  },[data.data]);

  const hideModal = () => {
    setData({isOpen: false});
  };

  const updateFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  };

  const updateCheckbox = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked ,
    })
  };

  const saveModal = () => {
    console.log(formData);
  };

  const selectOptions = [
    {value: 'coin', label: 'Coin'},
    {value: 'valute', label: 'Valute'},
  ];


  return (
    <Modal isOpen={data.isOpen} toggle={hideModal} fade={null}>
      <ModalHeader toggle={hideModal}>Modal title</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Input placeholder="Full name Currency"
                 name="name"
                 value={formData.name}
                 onChange={updateFormData}
          />
        </FormGroup>
        <FormGroup>
          <Input placeholder="Short name (ex: BTC)"
                 name="short_name"
                 value={formData.short_name}
                 onChange={updateFormData}
          />
        </FormGroup>
        <FormGroup>
          <Input type="file" name="logo" id="exampleFile"
                 onChange={e => {setFormData({...formData, logo: e.target.files[0]})}}
          />
        </FormGroup>
        <FormGroup>
          <Select options={selectOptions}
                  value={formData.type}
                  onChange={type => {setFormData({...formData, type: type})}}
          />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <span style={{marginRight: '10px'}}>Available</span>{' '}
            <Input type="checkbox"
                   name="active"
                   checked={formData.active}
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

export default CurrencyCreateModal;