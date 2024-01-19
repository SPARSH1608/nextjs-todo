'use client';
import { revalidatePath } from 'next/cache';
import { useFormStatus, useFormState } from 'react-dom';
import { useEffect } from 'react';
import { createTaskCustom } from '@/utils/actions';
import toast from 'react-hot-toast';
// to update the state on based on the result of form action
// The useFormStatus Hook provides status information of the last form submission.
const initialState = {
  message: null,
};
const SubmitBtn = () => {
  //status of last form submission
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? 'please wait.. ' : 'create task'}
    </button>
  );
};

// import { createTask } from '@/utils/actions';
// const createTask = async (formData) => {
//   'use server';
//   const content = formData.get('content');
//   console.log(content);
//   await prisma.task.create({
//     data: {
//       content,
//     },
//   });
//   revalidatePath('/tasks');
// };
//why i dont see new task in browser , just like prisma page
//task page is static so in order to see the latest task
// we need to grab the revalidate path function from nextjs
//it revalidate the path and we get the latest changes in the db
const TaskForm = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);
  useEffect(() => {
    if (state.message === 'error') {
      toast.error('there was an error');
      return;
    }

    if (state.message === 'success') {
      toast.success('task created');
    }
  }, [state]);
  //   useFormState is a Hook that allows you to update state based on the result of a form action.
  return (
    <form action={formAction}>
      {state.message ? <p className="mb-2">{state.message}</p> : null}
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full "
          placeholder="type here"
          name="content"
          required
        />
        <SubmitBtn />
      </div>
    </form>
  );
};

export default TaskForm;

//to use pending state we have to make it a client component
