import FriendListItem from "./FriendListItem"

export default function FriendList({friends}) {
    return (
        <div>
            <ul class="friend-list">
            {friends.map(({  isOnline, avatar, name }) => (
        <li >
          <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
        </li>
      ))}

</ul>
        </div>
    )
}
// console.dir(FriendListItem)