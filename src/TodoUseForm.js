import { Box,Button, TextField, Typography } from '@mui/material'
import React from 'react'
import useForm from './read'

const TodoUseForm = () => {

  var[todoitems,setTodoitems] = useForm({item:"",quant:0,desp:""})

  return (
    <Box sx={{backgroundColor:'beige', mt:5, pb:5, mr:40, ml:40, pl:10, pr:10}}>
      <div>
      <br></br><br></br>
      <Typography variant='h3'>Todo Application</Typography>
      <br></br>
      <TextField name='item' value={todoitems.item} onChange={setTodoitems} label="Todo-items" variant='outlined' fullWidth margin='normal'></TextField><br></br>
      <TextField name='quant' value={todoitems.quant} onChange={setTodoitems} label="Item-Quantity" variant='outlined' fullWidth margin='normal'></TextField><br></br>
      <TextField name='desp' value={todoitems.desp} onChange={setTodoitems} label="Description" variant='outlined' fullWidth margin='normal'></TextField><br></br>
      <Button variant='contained'>Submit</Button>
      <br></br>
      <Typography variant='h7'>Item: {todoitems.item}</Typography><br></br>
      <Typography variant='h7'>Quantity: {todoitems.quant}Kg/L</Typography><br></br>
      <Typography variant='h7'>Description: {todoitems.desp}</Typography><br></br>
      </div>
    </Box>
  )
}

export default TodoUseForm
