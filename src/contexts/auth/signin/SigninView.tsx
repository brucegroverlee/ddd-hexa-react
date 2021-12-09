import React from 'react';

interface SigninViewProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  isFetching: boolean;
  handleOnSubmit(event: React.FormEvent): void;
}

function SigninView(props: SigninViewProps) {
  return (
    <div className="signin-view">
      <header>SigninView</header>
      <main>
        <form onSubmit={props.handleOnSubmit}>
          <div>
            <label htmlFor="signin__form__username">Username:</label>
            <input
              type="text"
              id="signin__form__username"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                props.setUsername(event.target.value)
              }
              value={props.username}
            />
          </div>

          <div>
            <label htmlFor="signin__form__password">Password:</label>
            <input
              type="password"
              id="signin__form__password"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                props.setPassword(event.target.value)
              }
              value={props.password}
            />
          </div>

          <div>
            <button>signin</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default SigninView;
