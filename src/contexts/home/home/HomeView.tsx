import React from 'react';

import User from './domain/User';
import HomeViewModel from './domain/HomeViewModel';

interface HomeViewProps {
  user: User | undefined;
  homeViewModel: HomeViewModel;
}

function HomeView(props: HomeViewProps) {
  const { homeViewModel } = props;

  if (homeViewModel.isNotReady()) {
    return <div>Loading</div>;
  }

  const user = props.user!;

  return (
    <div className="home-view">
      <header>Home</header>
      <main>
        <div>Fullname: {user.getFullname()}</div>
        <div>Firstname: {user.firstname.getValue()}</div>
        <div>Lastname: {user.lastname.getValue()}</div>
        <div>
          <button onClick={() => user.updateRandomLastname()}>
            Refresh the lastname
          </button>
        </div>

        <div>Money: {user.money.getValue()}</div>
        <div>Money with symbol: {user.money.showWithCurrency()}</div>

        <div>
          <button onClick={() => homeViewModel.updateUser()}>
            Change the User
          </button>
        </div>
      </main>
    </div>
  );
}

export default HomeView;
