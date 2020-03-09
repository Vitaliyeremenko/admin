import { BUTTONS_TYPE } from '../constants/support.constants';

export const getDefaultTextes = type => {
  switch (type) {
    case BUTTONS_TYPE.CHECK:
      return 'Check it';
    case BUTTONS_TYPE.CHOOSE:
      return 'Choose it';
    case BUTTONS_TYPE.CARD_PHOTO:
      return 'Other it';
    default:
      return ''
  }
};