import React , {useState} from 'react';
import { Button }         from 'reactstrap';
import { BUTTONS_TYPE}    from '../../constants/support.constants';

const FastAnswerButtons = ({onChange}) => {
  const [currentType, setCurrentType] = useState(null);
  const [currentButton, setCurrentButton] = useState(null);

  function buttonClickHandler(button) {
    setCurrentButton(button);
    onChange(button);
  }

  function goBack() {
    setCurrentType(null);
    setCurrentButton(null);
  }

  if(currentType) {
   switch (currentType) {
     case BUTTONS_TYPE.INCOME:
       return <div>
         <Button color="primary" onClick={goBack}>Назад</Button>{' '}
         <Button color={currentButton === BUTTONS_TYPE.CHECK ? 'success' : 'default'}
                 onClick={() => {buttonClickHandler(BUTTONS_TYPE.CHECK)}}
         >Чек</Button>{' '}
         <Button color={currentButton === BUTTONS_TYPE.CHOOSE ? 'success' : 'default'}
                 onClick={() => {buttonClickHandler(BUTTONS_TYPE.CHOOSE)}}
         >Подтверждение</Button>{' '}
         <Button color={currentButton === BUTTONS_TYPE.CARD_PHOTO ? 'success' : 'default'}
                 onClick={() => {buttonClickHandler(BUTTONS_TYPE.CARD_PHOTO)}}
         >Фото карты</Button>
       </div>;
     default:
       return 'Ooops something went wrong...';
   }
  } else {
    return (
      <div>
        <Button color={'default'} onClick={() => {setCurrentType(BUTTONS_TYPE.INCOME)}}>Ввод</Button>{' '}
        <Button color={'default'} onClick={() => {setCurrentType(BUTTONS_TYPE.WITHDRAW)}}>Вывод</Button>{' '}
        <Button color={'default'} onClick={() => {setCurrentType(BUTTONS_TYPE.TECH)}}>Техническое</Button>{' '}
        <Button color={'default'} onClick={() => {setCurrentType(BUTTONS_TYPE.OTHER)}}>Другое</Button>{' '}
      </div>
    );
  }

};

export default FastAnswerButtons;