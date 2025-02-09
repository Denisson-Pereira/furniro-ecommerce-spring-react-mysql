
import { BrowserRouter } from 'react-router-dom';
import { IsUser } from './IsUser';
import { NotUser } from './NotUser';
import { useAuthContext } from '../Context/authContext';

export const RoutesApp = () => {
  const { user } = useAuthContext();
  return (
    <BrowserRouter>
      {user.id ? <IsUser /> : <NotUser />}
    </BrowserRouter>
  )
}
