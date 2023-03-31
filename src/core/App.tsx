import UserDataConnected from '../components/users/UserDataConnected';
import { applicationStore } from '../stores';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={applicationStore}>
      <UserDataConnected />
    </Provider>
  );
};

export default App;
