import React from 'react';
import * as S from '../../styles';

export default function Members(props) {
  return (
    <S.Members>
      List of Members
      {props.users.map(user => (
        <div key={user.id}>{user.email}</div>
      ))}
    </S.Members>
  );
}
