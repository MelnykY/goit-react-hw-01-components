import PropTypes from 'prop-types';
import {
  SectionStat,
  StatTitle,
  StatList,
  StatItem,
} from './Statistics.styled';

export function Statistics({ title = 'Upload stats', stats }) {
  return (
    <SectionStat>
     {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </SectionStat>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
