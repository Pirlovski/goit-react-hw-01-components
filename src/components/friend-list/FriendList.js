import PropTypes from 'prop-types';
import s from './FriendList.module.css';

import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <div>
      <ul className={s.friendList}>
        {friends.map(({ isOnline, avatar, name, id }) => (
          <li className={s.friendListItem} key={id}>
            <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  id: PropTypes.number,
};
