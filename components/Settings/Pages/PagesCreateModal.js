import React, {useEffect, useState}                                                  from 'react';
import {Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import Select                                                                        from 'react-select';
import ReactQuill                                                                    from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import {isNotEmptyObject}                                                                    from '../../../utils/Helpers';

const PagesCreateModal = ({hook}) => {
  const initialFormData = {
    lang: "",
    slug: '',
    title: '',
    type: '',
    pink: '',
    activation: 0,
    updated_at: '',
    text: ''};

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
    setData({isOpen: false, data: {}});
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
    ],

    modules = {
      toolbar: [
        [{'header': [1, 2, false]}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean'],
      ],
    },
    formats = [
      'header',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image',
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
          <Label>Slug </Label>
          <Input placeholder="Slug"
                 name="slug"
                 value={formData.slug}
                 onChange={updateFormData}
          />
        </FormGroup>
        <FormGroup>
          <Label>Title </Label>
          <Input placeholder="Title"
                 name="title"
                 value={formData.title}
                 onChange={updateFormData}
          />
        </FormGroup>
        <FormGroup>
          <Label>Pink page</Label>
          <Input placeholder="Pink"
                 name="pink"
                 value={formData.pink}
                 onChange={updateFormData}
          />
        </FormGroup>
        <FormGroup>
          <Label>Content</Label>
          <ReactQuill value={formData.text}
                      onChange={(val) => {setFormData({...formData, text: val})}}
                      modules={modules}
                      formats={formats}
          />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <span style={{marginRight: '10px'}}>Available</span>{' '}
            <Input type="checkbox"
                   name="activation"
                   checked={formData.activation}
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

export default PagesCreateModal;