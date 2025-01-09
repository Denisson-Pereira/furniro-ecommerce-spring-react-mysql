import { useGlobalFurniroContext } from '../context'
import { BrowserRouter } from 'react-router-dom';
import { IsUser } from './IsUser';
import { NotUser } from './NotUser';

export const RoutesApp = () => {
  const { usuario } = useGlobalFurniroContext();
  return (
    <BrowserRouter>
      {usuario ? <IsUser /> : <NotUser />}
    </BrowserRouter>
  )
}
