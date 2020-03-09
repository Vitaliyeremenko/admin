import React, {useEffect, useState}                                                  from 'react';
import {Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import CurrenciesList                                                                from './CurrenciesList';

const currencies = [
  {id: 1, name: 'Dollar', short_name: 'USD', logo: '', type: 'valute', active: 0},
  {id: 2, name: 'Dolfsadlar', short_name: 'USf', logo: '', type: 'valute', active: 1},
  {id: 3, name: 'Dollsadar', short_name: 'fSD', logo: '', type: 'coin', active: 0},
  {id: 4, name: 'Dol234lar', short_name: 'UgfsdSD', logo: '', type: 'coin', active: 1},
  {id: 5, name: 'Dollar', short_name: 'gsdf', logo: '', type: 'valute', active: 0},
];

const SystemsCreateModal = ({hook}) => {
  const initialFormData = {};
  const [data, setData] = hook;
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    const dataCopy = {...data.data};
    if (dataCopy) {
      setFormData(dataCopy);
    } else {
      setFormData(initialFormData);
    }
  }, [data.data]);

  const hideModal = () => {
    setData({isOpen: false});
  };

  const saveModal = () => {
    console.log(formData);
    hideModal();
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
      [e.target.name]: e.target.checked,
    })
  };

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
          <CurrenciesList currencies={currencies}
                          changeHandler={() => {}}
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

SystemsCreateModal.propTypes = {};

export default SystemsCreateModal;