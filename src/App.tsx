import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './components/routers/AppRouter';

export const App: React.FC = () => {

  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
};