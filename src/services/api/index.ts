import axios from 'axios';
import { getContentType } from './helper';

export const instance = axios.create({
  baseURL: 'https://test.tspb.su/test-task',
  headers: getContentType(),
});
