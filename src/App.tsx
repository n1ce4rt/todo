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
import { CustomizedSnackbars } from './components/snackbar/snackbar';


function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#013F56' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Todo List
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Box sx={{ bgcolor: '0000', boxShadow: '5px 5px 20px', borderRadius: '10px', minWidth: '350px', height: 'fit-content', padding: '10px'}}>
          <FilterBar />
          <NewTask />
          <TasksList />
        </Box>
        <CustomizedSnackbars /> 
      </Container>

    </>
  );
}

export default App;
