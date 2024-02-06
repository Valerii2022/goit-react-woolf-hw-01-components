import css from './FriendListItem.module.css';

const FriendlistItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>

      <img src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendlistItem;
