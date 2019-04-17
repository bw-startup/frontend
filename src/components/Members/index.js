import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import axiosAuthentication from '../../utils/axiosAuthentication';
import * as S from '../../styles';

export default function Members() {
  const [cookie] = useCookies(['StartupTrajectoryPredictor']);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosAuthentication(cookie['StartupTrajectoryPredictor'])
      .get('https://startups7.herokuapp.com/api/users')
      .then(response => {
        setUsers(response.data);
        console.log(response);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <S.Members>
      List of Members
      {users.map(user => (
        <div key={user.id}>{user.email}</div>
      ))}
    </S.Members>
  );
}