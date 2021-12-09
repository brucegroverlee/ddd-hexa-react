import React from 'react';

function SigninView() {
  return (
    <div className="signin-view">
      <header>SigninView</header>
      <main>
        <form>
          <div>
            <label htmlFor="signin__form__username">Username:</label>
            <input type="text" id="signin__form__username" />
          </div>

          <div>
            <label htmlFor="signin__form__password">Password:</label>
            <input type="password" id="signin__form__password" />
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
