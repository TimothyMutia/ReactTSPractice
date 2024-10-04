import React from 'react'
import { Device, deviceProps } from '../types/global';
import { useState } from 'react';
import { updateDevice, deleteDevice } from '../Api/deviceApi';
import { useMutation } from '@tanstack/react-query';
import { confirm } from './confirm'

const Item:React.FC<deviceProps> = ({device}) => {

    const [editing, setEditing] = useState(false);
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState<Device>({ 
        name: "", 
        data: { 
          color: "", 
          price: 0, 
        }, 
      });

      const mutation = useMutation({
        mutationFn: updateDevice
      })
      const deleteMutation = useMutation({
        mutationFn: deleteDevice
      })

      const handleEdit = () => {
        if(editing) {setEditing(false)}
        else{
          setEditing(true)
          setOpen(false)
          setForm({
            name: device.name,
            data:{
              color: device.data?.color,
              price: device.data?.price,
            }
          })
        }
      }
      const handleToggle = () => {
        if(open) {setOpen(false)}
        else{setOpen(true)}
      }
      const handleDelete = async () => {
      if ( await confirm ({
        confirmation: "Are you Sure?, this action cannot be undone"
      })){ 
        if(device.id){
        deleteMutation.mutate(device)
        }else{
          alert("Device does not exist, or the id is wrong")
        }}else{
          console.log("cancelled")
        }
      }
      const handleSubmit = (e: React.FormEvent) => { 
        e.preventDefault(); 
        mutation.mutate(form);
         // Invoke mutate and pass the form data 
        setForm({
            name: "", 
            data: { 
              color: "", 
              price: 0, 
            },    
        })
        setEditing(false)
        setOpen(false)
      }
      const handleCancel = () => {
        setEditing(false)
        setOpen(false)
        setForm({
            name: "", 
            data: { 
              color: "", 
              price: 0, 
            },  
        })
      }
  return (
    <div key={device.id} className='flex flex-row justify-between items-center p-4 border-[1px] border-solid border-[#ccc] rounded-r-md'> 
    
    {editing ? 
    <form className='flex flex-col w-full justify-start' onSubmit={handleSubmit}>
        <div>
            <label>{device.name}</label>
            <textarea value={device.name}></textarea>
        </div>
        <div>
            <label>{device.data?.color}</label>
            <textarea value={device.data?.color}></textarea>
        </div>
        <div>
            <label>{device.data?.color}</label>
            <textarea value={device.data?.price}></textarea>
        </div>
        <div>
            <button type='submit'>save</button>
            <button onClick={handleCancel}>cancel</button>
        </div>
    </form> : 
    <>
      <div className='flex flex-col items-baseline w-full'> 
        <p className='font-bold mb-2'>   
        {device.name} 
        </p> 
        <p className='m-0 text-xs'> 
        {device.data?.color} 
        </p> 
      </div> 
      <div className='w-full self-baseline'> 
        <p className='font-bold mb-2'> 
        {device.data?.price && `$${device.data.price}`} 
        </p> 
      </div>

      <div className={open ? 'bg-grey': ''} style={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'flex-start', padding:'0px'}}>
      {open ? 
      <>
        <button className='h-[10px] w-[10px] bg-dropdown ' onClick={handleToggle}></button>
        <button className='bg-grey w-10 h-5 text-light-orange self-start hover:bg-white hover:text-grey' onClick={handleEdit}>
          edit
        </button>
        <button className='bg-grey w-10 h-5 text-light-orange self-start' onClick={handleDelete} >
          delete
        </button>
      </>:
        <button className='h-[10px] w-[10px] bg-dropdown' onClick={handleToggle}></button>
      }
      </div> 

    </>
    } 
</div>
  )
}

export default Item