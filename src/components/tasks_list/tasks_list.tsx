import Box from '@mui/material/Box';
import { rootReducerType } from '../../store/store-redux';
import { useSelector } from 'react-redux';
import { filterType, taskType } from '../../reducers/tasks-reducer';
import { AnimatePresence } from 'framer-motion';
import { TaskItem } from '../task_item/task_item';


export const TasksList = () => {

    const tasks = useSelector((state: rootReducerType): Array<taskType> => state.tasks.tasks)
    const filter = useSelector((state: rootReducerType): filterType  => state.tasks.filter)
    let filterTasks = tasks.filter((task: taskType) => task)

    if (filter === 'done') {
      filterTasks = tasks.filter((task: taskType) => task.completed)
    } 
    if (filter === 'progress') {
      filterTasks = tasks.filter((task: taskType) => !task.completed)
    }
  return (
      <Box sx={{ flexGrow: 1}}>
        <AnimatePresence>
          {
            filterTasks.map((task: taskType) => <TaskItem key={task.id} task={task}/>)
          }
        </AnimatePresence>
      </Box>
  );
}