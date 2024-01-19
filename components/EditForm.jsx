'use client';
import { editTask, getSingleTask } from '@/utils/actions';

const EditForm = async ({ task }) => {
  const { id, content, completed } = task;
  return (
    <div>
      <form
        action={editTask}
        className="max-w-sm p-12 border border-base-300 rounded-lg"
      >
        <input type="hidden" name="id" value={id} />
        <input
          type="text"
          defaultValue={task.content}
          required
          name="content"
          className="input input-bordered w-full mb-4"
        />
        <div className="form-control mt-4 mb-4 ">
          <label htmlFor="completed" className="label cursor-pointer ">
            <span className="label-text">Completed</span>
            <input
              type="checkbox"
              name="completed"
              id="completed"
              defaultChecked={task.completed}
              className="checkbox checkbox-primary checkbox-sm"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary btn-block btn-sm">
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditForm;
