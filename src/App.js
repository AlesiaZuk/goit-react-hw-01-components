import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import friends from './components/FriendListItem/friends.json';
import transactions from './components/TransactionHistory/transactions.json';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import FriendListItem from './components/FriendListItem/FriendListItem';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import Container from './components/Container/Container';

function App() {
  return (
    <>
      <section>
        <Container>
          <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </Container>
      </section>
      <section>
        <Container>
          <Statistics title="Upload stats" stats={statisticalData} />
          {/* <Statistics stats={statisticalData} /> */}
        </Container>
      </section>
      <section>
        <Container>
          <FriendList>
            <FriendListItem friends={friends} />
          </FriendList>
        </Container>
      </section>
      <section>
        <Container>
          <TransactionHistory items={transactions} />
        </Container>
      </section>
    </>
  );
}

export default App;
