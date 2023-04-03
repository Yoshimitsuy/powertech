import styled from 'styled-components';
// import { Container } from '../../globalStyles';
// import { Link } from 'react-router-dom';


export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${ ({ lightBg }) => (lightBg ? '#fff' : '#101522')}
`;

export const InfoRow = styled.div `
  display: flex;
  margin: - -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${ ({ imgStart }) => (imgStart ? 'row-reverse' : 'row')}

`;