import React from 'react';

import User from './domain/User';

interface HomeViewProps {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

function HomeView(props: HomeViewProps) {
  const { user, setUser } = props;
  return (
    <div className="home-view">
      <header>Home</header>
      <main>
        <section>Fullname: {user?.getFullname()}</section>
        <section>Firstname: {user?.firstname}</section>
        <section>Lastname: {user?.lastname}</section>
        <section>
          <button onClick={() => setUser(user?.updateRandomLastname())}>
            Refresh the lastname
          </button>
        </section>
        <section>Quote: {user?.getQuote()}</section>
        <section>
          <button onClick={() => setUser(user?.updateRandomQuote())}>
            Refresh the quote
          </button>
        </section>
      </main>
    </div>
  );
}

export default HomeView;
