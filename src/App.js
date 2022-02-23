import './App.css';
import Profile from './components/social-profile/profile';
import Statistics from './components/statistics/StatisticsList';
import data from './components/statistics/data.json';
import user from './components/social-profile/user.json';
import FriendList from 'components/friend-list/FriendList';
import friends from './components/friend-list/friends.json';
import TransactionHistory from 'components/transaction-history/TransactionHistory';
import transactions from './components/transaction-history/transactions.json';
import Section from './components/Section/Section';

import s from './components/social-profile/Profile.module.css';
export default function App() {
  return (
    <div>
      <Section title="1st task">
        <div className={s.App}>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />{' '}
        </div>
      </Section>
      <Section title="Upload stats">
        <Statistics stats={data} />
      </Section>
      <Section title="3rd task">
        <FriendList friends={friends} />
      </Section>
      <Section title="4 task">
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
}
