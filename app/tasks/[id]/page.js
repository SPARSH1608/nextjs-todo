import EditForm from '@/components/EditForm';
import { getSingleTask } from '@/utils/actions';
import Link from 'next/link';

const SingleTaskpage = async ({ params }) => {
  //   console.log(params.id);
  const id = params.id;
  const task = await getSingleTask(id);
  //   console.log(task);
  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent">
          {' '}
          back to Tasks
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
};

export default SingleTaskpage;
