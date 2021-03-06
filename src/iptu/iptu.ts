import { IPTUVALIDATE } from './validate';
import { IPTUMASKS } from './mask';
import { getAllDigits } from '../utils';
import { IPTUCREATE } from './create';

export const create_iptu = (number, estado, cidade) => {
  if (!IPTUCREATE[estado] || !IPTUCREATE[estado][cidade]) {
    return true;
  }
  number = getAllDigits(number);
  return IPTUCREATE[estado][cidade](number);
};

export const mask_iptu = (number, estado, cidade) => {
  if (!IPTUMASKS[estado] || !IPTUMASKS[estado][cidade]) {
    return number;
  }
  return IPTUMASKS[estado][cidade];
};
export const validate_iptu = (number, estado, cidade) => {
  if (!IPTUVALIDATE[estado] || !IPTUVALIDATE[estado][cidade]) {
    return true;
  }
  number = getAllDigits(number);
  return IPTUVALIDATE[estado][cidade](number);
};