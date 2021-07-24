import {ButtonHTMLAttributes} from 'react';

import './style.scss';

export const Button = (props:ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props}>{props.children}</button>
}
