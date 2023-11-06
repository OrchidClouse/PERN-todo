import { useLocation } from 'react-router-dom';
import { StartPageHeader } from './StartPageHeader';
import { AuthHeader } from './AuthHeader';
import { ProjectHeader } from './ProjectHeader';

export const Header = () => {
  const location = useLocation();

  if (location.pathname === '/') {
    return <StartPageHeader />;
  } 
  else if(location.pathname === '/create-project' || location.pathname === '/projects'){
    return <ProjectHeader />
  }
  else if(location.pathname === '/login' || location.pathname === '/register'){
    return <AuthHeader />
  }
}