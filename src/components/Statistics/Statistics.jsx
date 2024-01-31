import { getRandomBgColor } from 'utils/getRandomBgColor';
import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statList}>
        {stats.map(el => {
          return (
            <li
              key={el.id}
              className={css.item}
              style={{ backgroundColor: getRandomBgColor() }}
            >
              <span>{el.label}</span>
              <span className={css.percentage}>{el.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
