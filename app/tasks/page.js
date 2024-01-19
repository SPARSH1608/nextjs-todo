import DeleteForm from '@/components/DeleteForm';
// import TaskForm from '@/components/TaskForm';
import TaskFormCustom from '@/components/TaskFormCustom';
import TaskList from '@/components/TaskList';
import Link from 'next/link';
export const dynamic = 'force dynamic';
const TasksPage = () => {
  return (
    <div className="max-w-lg">
      {/* <h1 className="text-4xl"> TasksPage</h1>
      <Link href="/">Home</Link> */}
      {/* <TaskForm /> */}
      <TaskFormCustom />
      <TaskList />
    </div>
  );
};
export default TasksPage;
