import React from 'react'
import { Device, deviceProps } from '../types/global';
import { useState } from 'react';
import { updateDevice } from '../Api/deviceApi';
import { useMutation } from '@tanstack/react-query';

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

      const handleEdit = () => {
        if(editing) {setEditing(false)}
        else{
          setEditing(true)
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
      const handleDelete = () => {
      
      }
      const handleSubmit = (e: React.FormEvent) => { 
        e.preventDefault(); 
        mutation.mutate(form); // Invoke mutate and pass the form data 
      }
  return (
    <div key={device.id} style={{ display: "flex", flexDirection: "row", justifyContent: "spacebetween", alignItems: "center", padding: "16px", border: "1px solid #ccc", borderRadius: "5px" }}> 
    
    {editing ? 
    <form onSubmit={handleSubmit}>

    </form> : 

    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "baseline", width:"100%" }}> 
        <p style={{ fontWeight: "bold", margin: "0 0 0.5rem 0" }}>   
        {device.name} 
        </p> 
        <p style={{ margin: 0, fontSize: "0.85rem" }}> 
        {device.data?.color} 
        </p> 
      </div> 
      <div style={{width:"100%", alignSelf:"baseline"}}> 
        <p style={{fontWeight:"bold", margin: "0 0 0.5rem 0" }}> 
        {device.data?.price && `$${device.data.price}`} 
        </p> 
      </div>

      <div className={open ? 'dropdown': "j"} style={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'flex-start', padding:'0px'}}>
      {open ? 
      <>
        <button className='dropdown_Button' onClick={handleEdit}>
          edit
        </button>
        <button onClick={handleDelete} >
          delete
        </button>
      </>:
        <svg style={{height:"10px", width:"10px"}} onClick={handleToggle} href='my-react-app\src\assets\more-horizontal.svg'></svg>
      }
      </div> 

    </>
    } 
</div>
  )
}

export default Item