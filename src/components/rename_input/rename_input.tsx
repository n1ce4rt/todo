import { TextField } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { renameTaskAC } from "../../reducers/tasks-reducer"


type propsType = {
    header: string
    taskId: string
}
export const RenameInput = ({taskId, header} : propsType) => {

    const [active, setActive] = useState(false)
    const [newValue, setNewValue] = useState(header)
    const dispatch = useDispatch();

    function rename ()  {
        setActive(false)
        dispatch(renameTaskAC(taskId, newValue))
    }
    return active ? 
            <TextField
            sx={{
                '& label.Mui-focused': {
                  color: '#2CA5A9',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: '#2CA5A9',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#2CA5A9',
                  },
                  '&:hover fieldset': {
                    borderColor: '#013F56',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#2CA5A9',
                  },
                },
              }}
                onBlur={() => rename()}
                value={newValue}
                onChange={(e)=> setNewValue(e.currentTarget.value)}
                onKeyPress={(e) => e.key === 'Enter' && rename()}
            ></TextField>
            :
            <p onDoubleClick={()=> setActive(true)}>{header}</p>
}