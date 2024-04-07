import React from 'react';
import { GenericObject } from './types';

const AppApiContext = React.createContext<{
  appData: GenericObject;
}>({
  appData: {}
});

export default AppApiContext;
