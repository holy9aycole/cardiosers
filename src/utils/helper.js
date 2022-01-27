import moment from 'moment';
import _ from 'lodash';

export const formatTime = (time, format = 'HH:mm') => moment(time, format).format('hh:mm A');

export const getError = (name, methods) => _.get(methods.formState.errors, name);

export const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
