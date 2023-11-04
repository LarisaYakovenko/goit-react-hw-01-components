import styled from 'styled-components';

export const ProfileCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-top: 50px;
  margin: 0 auto;

  width:400px;
  border-radius:30px;
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  background-color:#eed7b8;
  overflow: hidden;
`;

export const Description = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap:5px;
   margin-bottom: 30px;

`;

export const Avatar = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 200px;
    width: 200px;

    border-radius: 50%;
    box-shadow: -2px -2px 5px #ffffff, 3px 3px 5px #ceced1;

    &:hover {
      background: #ebe1d4;
      box-shadow: inset -2px -2px 5px #ffffff, inset 3px 3px 5px #ceced1;
    }
`;

export const Name = styled.p`
  color: #161616;
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 0px;
`;
export const Tag = styled.p`
  color: #473a3a;
  font-size: 24px;
  margin-bottom: 0px;
`;
export const Location = styled.p`
   color: #473a3a;
  font-size: 24px;
  margin-bottom: 0px;
`;
export const Stats = styled.ul`
  display: flex;
  gap: 0px;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  width: 100%;
  list-style-type: none;
  margin: 0;
  background-color: #e1c39b;


`;
export const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 120px;
  border: 1px solid #edebe8;
`;
export const Label = styled.span`
  font-size: 24px;
  margin: 0 ;

`;
export const Quantity = styled.span`
  font-size: 30px;
`;
