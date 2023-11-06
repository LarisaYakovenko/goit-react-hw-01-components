import styled from 'styled-components';


export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
  max-width: 100%;
  width: 400px;
  height: 90px;
  border-radius: 30px;
  box-shadow:  -1px -1px 1px #fff, 1px 1px 1px #babecc;
  background-color: #e1c39b;
`;

const setBgColor = props => {
  return props.isOnline ? 'green' : 'red';
};
export const Status = styled.span`
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${setBgColor};
`;
export const Avatar = styled.img`
  width: 60px;
`;
export const Name = styled.p`
  font-weight: 600;
`;
