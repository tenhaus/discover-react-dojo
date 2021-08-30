import { PersonalProfile } from './features/personal-profile/PersonalProfile';
import { PersonalProfileSaved } from './features/personal-profile/PersonalProfileSaved';
import './App.css';
import { useAppDispatch } from './app/hooks';
import {
  loadProfile,
  isProfileSaved,
} from './features/personal-profile/personalProfileSlice';
import { useSelector } from 'react-redux';

function App() {
  // For this reference application we will simply
  // load the profile once when the application starts
  const dispatch = useAppDispatch();
  dispatch(loadProfile());

  const isPersonalProfileSaved = useSelector(isProfileSaved);

  return (
    <div className="App">
      {!isPersonalProfileSaved && <PersonalProfile />}
      {isPersonalProfileSaved && <PersonalProfileSaved />}

      <footer className="App-footer">
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
