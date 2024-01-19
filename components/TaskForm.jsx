import { revalidatePath } from 'next/cache';
import { createTask } from '@/utils/actions';
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
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full "
          placeholder="type here"
          name="content"
          required
        />
        <button type="submit" className="btn btn-primary join-item">
          Create task{' '}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
