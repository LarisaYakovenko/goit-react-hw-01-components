import {FriendListCard}  from './FriendList.styled';
import {FriendListItem} from '../FriendListItem/FriendListItem'
// import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
  return (
    <FriendListCard>{
      friends.map(friend => (
        <FriendListItem
          key={friend.id}
          id={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline} />

      ))
    }
    </FriendListCard>
  )
}



