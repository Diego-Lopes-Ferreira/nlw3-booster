import React, { useContext } from 'react';
import OnboardingContext from '../contexts/onboardingContext';
import SplashPage from '../pages/SplashPage';

// * Routes
import AppRoutes from './app.routes';
import OnboardingRoutes from './onboarding.routes';

function Routes() {

  const { isFirstTime, loading } = useContext(OnboardingContext);

  if (loading) {
    return <SplashPage />
  } else {

    if (isFirstTime) {
      return <AppRoutes />
    } else {
      return <OnboardingRoutes />
    } // else - isFirstTime
  } // else - loading
}

export default Routes;
