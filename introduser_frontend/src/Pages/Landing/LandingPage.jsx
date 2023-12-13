import React from 'react';
import { useUserContext } from '../../Providers/UserProvider';

const LandingPage = () => {

  const handleAddAudio = () => {
    // Logic to add audio file
  };

  const {user} = useUserContext();

  return (
    <div className="landing-page">
      {user !== null ? <div className="user-details">
        <span className="user-name">{user.username}</span>
      </div> : <div>
        Loading
      </div>
      }
    </div>
  );
};

export default LandingPage;
