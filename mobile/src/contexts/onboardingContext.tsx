import React, { useState, createContext, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

interface OnboardingContextData {
  loading: boolean;
  isFirstTime: boolean;
  firstTimeRoutine(): Promise<void>;
}

const OnboardingContext = createContext<OnboardingContextData>({} as OnboardingContextData);

export const OnboardingContextProvider: React.FC = ({ children }) => {
  const [isFirstTime, setIsFirstTime] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  async function firstTimeEntryRoutine(): Promise<void> {
    await AsyncStorage.setItem('happy_is_first_time', 'true');
    setIsFirstTime(true);
  }
  useEffect(() => {
    async function checkEntryRoutine() {

      const isFirstTimeStored = await AsyncStorage.getItem('happy_is_first_time');

      if (isFirstTimeStored === 'true') {
        setIsFirstTime(true);
        setLoading(false);
        return true;
      } else {
        setIsFirstTime(false);
        setLoading(false);
        return false;
      } // else
    } // function

    checkEntryRoutine();
  }, [])
  return (
    <OnboardingContext.Provider value={{
      loading: loading,
      isFirstTime: isFirstTime,
      firstTimeRoutine: firstTimeEntryRoutine,
    }}>
      {children}
    </OnboardingContext.Provider>
  )
}

export default OnboardingContext;
