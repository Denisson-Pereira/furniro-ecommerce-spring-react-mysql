
import { BrowserRouter } from 'react-router-dom';
import { IsUser } from './IsUser';
import { NotUser } from './NotUser';
import { useAuthContext } from '../context/authContext';

export const RoutesApp = () => {
  const { user } = useAuthContext();
  return (
    <BrowserRouter>
      {user ? <IsUser /> : <NotUser />}
    </BrowserRouter>
  )
}
