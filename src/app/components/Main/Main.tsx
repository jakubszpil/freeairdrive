import { Provider } from 'react-redux';

import { store } from 'app/store';

function Main() {
  return (
    <Provider store={store}>
      <h1>Hello world!</h1>
    </Provider>
  );
}

export default Main;
