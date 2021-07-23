import {ButtonHTMLAttributes} from 'react';

import './styles.scss';

export const Button = (props:ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props}>{props.children}</button>
}
