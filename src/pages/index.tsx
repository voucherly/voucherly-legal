import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

const Home: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    history.push('/category/privacy');
  }, [history]);

  return null; // No need to render anything since the redirection is immediate
};

export default Home;
