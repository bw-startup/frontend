import React from 'react';
import {Link} from 'react-router-dom';
import * as S from '../../styles';

export default function(props) {
  return (
    <S.FormFooterLink primary={props.primary}>
      {props.text} <Link to={props.to}>{props.linkText}</Link>
    </S.FormFooterLink>
  );
}
