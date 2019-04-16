import React from 'react';
import styled, { css } from 'styled-components';

const styles = css`
`;

const StyledInput = styled.input`
  ${styles}
`;

export default function Input({ ...props }) {
  return <StyledInput {...props} />;
}
