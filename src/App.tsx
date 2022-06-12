
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NewTask } from './components/new_task/new_task';
import { TasksList } from './components/tasks_list/tasks_list';
import Container from '@mui/material/Container';
import { FilterBar } from './components/filter_bar/filter_bar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTaskListAC } from './reducers/tasks-reducer';
import { rootReducerType } from './store/store-redux';


function App() {

  const dispatch = useDispatch()
  const tasks = useSelector((state : rootReducerType) : any => state.tasks )
 
  // useEffect(()=> {
  //   const taskList = JSON.parse(localStorage.getItem('tasks') as string)
  //   dispatch(getTaskListAC(taskList))
      
  // },[])

  // useEffect(()=> {
  //   localStorage.setItem('tasks', JSON.stringify(tasks))
    
  // },[tasks])


  
  return (

    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#013F56'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo List
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Container maxWidth="xl" sx={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        <Box sx={{ bgcolor: '#A7BCBD', boxShadow: '5px 5px 20px', borderRadius: '10px', minWidth: '350px', height: 'fit-content', padding: '10px'}}>
          <FilterBar />
          <NewTask />
          <TasksList />
          </Box>
      </Container>
    
    </>
  );
}

export default App;
