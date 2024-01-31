import FriendlistItem from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(el => {
        return (
          <FriendlistItem
            key={el.id}
            avatar={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;
