'use client';
import { deleteTask } from '@/utils/actions';
import { useEffect } from 'react';
import { useFormStatus, useFormState } from 'react-dom';
import toast from 'react-hot-toast';
const initialState = {
  message: null,
};
const DelBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-xs btn-error" disabled={pending}>
      {pending ? 'please wait' : 'delete'}
    </button>
  );
};

const DeleteForm = ({ id }) => {
  //how will we send the id to server action - we will use input and hide it
  const [state, formAction] = useFormState(deleteTask, initialState);
  useEffect(() => {
    console.log('Effect triggered with state:', state);

    if (state.message === 'error') {
      console.log('Error message received. Showing error toast.');
      toast.error('There was an error while deleting');
    }

    if (state.message === 'success') {
      console.log('Success message received. Showing success toast.');
      toast.success('Deleted successfully');
    }
  }, [state]);

  return (
    <form action={formAction}>
      {state.message ? <p className="mb-2">{state.message}</p> : null}
      <input type="hidden" name="id" value={id} />
      <DelBtn />
    </form>
  );
};

export default DeleteForm;
