import { Dispatch } from '@reduxjs/toolkit';

import { setButtonDisabled } from 'src/store/comment/commentSlice';

export default function disableButton(dispatch: Dispatch) {
  dispatch(setButtonDisabled(true));

  setTimeout(() => {
    dispatch(setButtonDisabled(false));
  }, Number(process.env.REACT_BUTTON_DISABLED_TIME));
}
