import makeActionCreator from '../../utils/ActionHelpers';

export const FCH_USER_DONE         = 'APP/FCH_USER_DONE';
export const CLR_USER              = 'APP/CLR_USER';

export const fchUserDone           = makeActionCreator(FCH_USER_DONE, 'user');
export const clrUser               = makeActionCreator(CLR_USER);
