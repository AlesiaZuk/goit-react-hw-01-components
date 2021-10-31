import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendList({ children }) {
  return (
    <div className={s.friends}>
      <div className={s.titleContainer}>
        <h2 className={s.title}>Friends</h2>
      </div>
      <ul className={s.list}>{children}</ul>;
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.node,
};

export default FriendList;
