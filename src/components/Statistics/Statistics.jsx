// import PropTypes from 'prop-types';
import {Section, Title, StatList, Item, Label, Percentage} from './Statistics.styled';

export const Statistics = ({title, stats}) => {
  return (
    <Section>
      <Title>{title}</Title>

      <StatList>
      {stats.map(stat => (
        <Item key={stat.id}>
          <Label>{stat.label}</Label>
          <Percentage>{stat.percentage}%</Percentage>
        </Item>
      ))
      }
      </StatList>
    </Section>
  )
}
