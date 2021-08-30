import { useForm } from 'react-hook-form';
import { Profile } from './personalProfileTypes';
import { saveProfile, selectProfile } from './personalProfileSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { useEffect } from 'react';

export function PersonalProfile() {
  // dispatch() is used to send events from our components
  // to redux reducers
  const dispatch = useAppDispatch();

  // If the profile has been loaded and stored in the redux state
  // this will load it. If not, this will be undefined
  const profile: Profile | undefined = useAppSelector(selectProfile);

  // Initialize our form helper functions
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: profile });

  // When the submit button is pressed and validation has
  // suceeded, this will be called.
  // Dispatch the save event with our form data
  // for redux to handle
  const onSubmit = (data: Profile) => {
    dispatch(saveProfile(data));
  };

  // Reset the form if the profile in the redux data model changes
  useEffect(() => {
    reset(profile);
  }, [reset, profile]);

  // Render our form
  return (
    <div>
      <h1>Profile</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First Name */}
        <label htmlFor="fname">First Name</label>
        <br />
        <input {...register('fname', { required: true })} />
        {errors.fname && (
          <span className="error-required">This field is required</span>
        )}
        <br />

        {/* Last Name */}
        <label htmlFor="lname">Last Name</label>
        <br />
        <input {...register('lname', { required: true })} />
        {errors.lname && (
          <span className="error-required">This field is required</span>
        )}
        <br />

        {/* Email Address */}
        <label htmlFor="email">Email Address</label>
        <br />
        <input {...register('email', { required: true })} />
        {errors.email && (
          <span className="error-required">This field is required</span>
        )}
        <br />

        {/* Phone Number */}
        <label htmlFor="phone">Phone Number</label>
        <br />
        <input {...register('phone', { required: true })} />
        {errors.phone && (
          <span className="error-required">This field is required</span>
        )}
        <br />

        {/* Username */}
        <label htmlFor="married">Username</label>
        <br />
        <input {...register('username')} />
        <br />

        {/* Submit */}
        <input type="submit" />
      </form>
    </div>
  );
}
