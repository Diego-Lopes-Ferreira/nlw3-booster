import React, { useState } from 'react';

// * Routes
import AppRoutes from './app.routes';
import OnboardingRoutes from './onboarding.routes';

function Routes() {

  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return <AppRoutes />
  } else {
    return <OnboardingRoutes />
  } // else
}

export default Routes;
