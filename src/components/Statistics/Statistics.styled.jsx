// import data from 'data/data.json'
import styled from 'styled-components';
// import {getRandomHexColor}  from '../utils/getRandomHexColor'


export const Section = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  max-width: 100%;
  width: 400px;

  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  border-radius: 8px;
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  border-radius: 30px;
  overflow: hidden;

`;

export const StatList = styled.ul`
  display: flex;
  width: 100%;
  height: 120px;
  list-style-type: none;
  border: 1px solid #edebe8;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 120px;
  border: 1px solid #edebe8;
  color: #fff;


`;
export const Title = styled.h2`
  text-transform: uppercase;
  padding: 20px;
  align-items: centr;
  text-align: center;
  color: #161616;
  font-size: 36px;
  font-weight: 600;
  margin: 0px;
  background-color: #eed7b8;

`;
export const Label = styled.span`
  font-size: 24px;
  margin: 0 ;

`;
export const Percentage = styled.span`
font-size: 30px;
`;






