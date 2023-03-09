import { AppRoutes } from './AppRoutes';
import { HeaderComponent } from './components';

export const App = () => {
  //No need for return statement
  return (
    <>
      <HeaderComponent />
      <AppRoutes />
    </>
  );
};
