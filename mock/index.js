import Mock from 'mockjs';
import {getList} from './api.js';

Mock.mock(/\/mock\/ajaxList/, 'get', getList);