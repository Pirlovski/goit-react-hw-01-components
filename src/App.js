
import Profile from './components/social-profile/profile'
import Statistics from './components/statistics/StatisticsList'
import data from './components/statistics/data.json'
import user from './components/social-profile/user.json'
import FriendList from 'components/friend-list/FriendList'
import friends from "./components/friend-list/friends.json"
// console.log(FriendList)

export default function App () {

    return <div className="profile" >
        <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics stats={data} />
<FriendList 
friends={friends} />

    </div>





}
