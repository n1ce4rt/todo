import { Button } from "@mui/material"
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from "react-redux";
import { filterType, setFilterAC } from "../../reducers/tasks-reducer";
import { rootReducerType } from "../../store/store-redux";

export const FilterBar = () => {
    const dispatch = useDispatch();

    let active = useSelector((state : rootReducerType): filterType => state.tasks.filter)

    return (

        <Box sx={{ flexGrow: 1  , display: 'flex', justifyContent: 'space-between'}}>
        
                <Button variant='contained'  sx={{
                    
                    backgroundColor: active === 'all'? '#013F56' : '#2CA5A9',
                    '&:hover': {
                        background: '#013F56',
                    },
                    
                
                }}
                onClick={()=> dispatch(setFilterAC('all'))}
                >All</Button>
    
                <Button variant='contained' sx={{backgroundColor: active === 'progress'? '#013F56' : '#2CA5A9',
                '&:hover': {
                    background: '#013F56',
                },}}
                     onClick={()=> dispatch(setFilterAC('progress'))}
                >Progress</Button>
    
                <Button variant='contained' sx={{backgroundColor: active === 'done'? '#013F56' : '#2CA5A9',
                '&:hover': {
                        background: '#013F56',
                    }}}
                     onClick={()=> dispatch(setFilterAC('done'))}
                >Done</Button>
        </Box>
    )
}