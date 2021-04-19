import { combineReducers } from 'redux';
import { parksReducer } from './parksReducer';
import { visitedParksReducer } from './visitedParksReducer';
import { bucketListParksReducer } from './bucketListParksReducer';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';
import { displayedParksReducer } from './displayedParksReducer';
import { usStatesReducer } from './usStatesReducer';
import { parkCardReducer } from './parkCardReducer';
import { showUsStateReducer } from './showUsStateReducer';
import { displayAboutReducer } from './displayAboutReducer';

const rootReducer = combineReducers({
  parks: parksReducer,
  usStates: usStatesReducer,
  visitedParkCodes: visitedParksReducer,
  bucketListParkCodes: bucketListParksReducer,
  parksToDisplay: displayedParksReducer,
  error: errorReducer,
  loading: loadingReducer,
  currentParkCode: parkCardReducer,
  showUsState: showUsStateReducer,
  showAbout: displayAboutReducer,
});

export default rootReducer;