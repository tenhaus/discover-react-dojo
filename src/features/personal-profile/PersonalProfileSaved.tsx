import { useAppDispatch } from '../../app/hooks';
import { showProfileForm } from './personalProfileSlice';

export const PersonalProfileSaved = () => {
  const dispatch = useAppDispatch();

  const onEdit = () => {
    dispatch(showProfileForm());
  };

  return (
    <div>
      <h1>Your profile has been saved</h1>
      <a href="#" onClick={() => onEdit()}>
        Edit your profile
      </a>
    </div>
  );
};
