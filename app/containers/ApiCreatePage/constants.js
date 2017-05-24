/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CREATE_API = 'dashboard/Api/CREATE_API';
export const CREATE_API_SUCCESS = 'dashboard/Api/CREATE_API_SUCCESS';
export const CREATE_API_ERROR = 'dashboard/Api/CREATE_API_ERROR';

export const CHANGE_API_NAME = 'dashboard/Api/CHANGE_API_NAME';
export const CHANGE_API_HOST = 'dashboard/Api/CHANGE_API_HOST';
export const CHANGE_API_UPSTREAM = 'dashboard/Api/CHANGE_API_UPSTREAM';
