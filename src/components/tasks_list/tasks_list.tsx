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

    if (filter !== 'all') {
      filterTasks = tasks.filter((task: taskType) => task.status === filter)
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