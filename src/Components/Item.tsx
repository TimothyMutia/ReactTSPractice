import React from 'react'
import { Device, deviceProps } from '../types/global';
import { useState } from 'react';
import { updateDevice, deleteDevice } from '../Api/deviceApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BsThreeDots } from "react-icons/bs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from './ui/alert-dialog';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from "@/components/ui/button";
import { Label } from './ui/label';
import { Input } from './ui/input';
import { useTheme } from '@/Contexts/ThemeContext';

const Item:React.FC<deviceProps> = ({device}) => {
    
    const [open, setOpen] = useState(false);
    const {theme} = useTheme();
    const [editing, setEditing] = useState(false);
    const [form, setForm] = useState<Device>({ 
        id: device.id,
        name: device.name, 
        data: { 
          color: device.data?.color, 
          price: device.data?.price, 
        }, 
      });
      
      const queryClient = useQueryClient(); 
      const mutation = useMutation({
       mutationFn: updateDevice,
       onSuccess: () => { 
        queryClient.invalidateQueries({ queryKey: ["devices"] }); 
      }, 
     })
      const deleteMutation = useMutation({
        mutationFn: deleteDevice,
        onSuccess: () => { 
          queryClient.invalidateQueries({ queryKey: ["devices"] }); 
        }, 
     })
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate(form)
        setForm({
          id: device.id,
          name: device.name, 
          data: { 
            color: device.data?.color, 
            price: device.data?.price, 
          }, 
        })
        setEditing(false)
      }

  return (
  <div className={theme === 'light' ? 'light' : 'dark'}>
    <div key={device.id} className='flex flex-row justify-between items-center p-4 border-[1px] border-solid border-[#ccc] rounded-r-md'> 
    
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
      <DropdownMenu>
        <DropdownMenuTrigger>
          <BsThreeDots className=''/>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setEditing(true)}> Edit </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}> delete </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

        <AlertDialog open={open} onOpenChange={setOpen} >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete this entry from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpen(false)}>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={async() => {
                  deleteMutation.mutate(device)
                  setOpen(false)
              }}>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
      </AlertDialog>

    <Dialog open={editing} onOpenChange={setEditing}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" type='text' value={form.name || ""} className="col-span-3" onChange={(e) => setForm({ ...form, name: e.target.value })}  />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Color
            </Label>
            <Input id="name" type='text' value={form.data?.color || ""} className="col-span-3" onChange={(e) => setForm({ ...form, data: {...form.data, color: e.target.value}})} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Price
            </Label>
            <Input id="username" value={form.data?.price || ""} type='number' className="col-span-3" onChange={(e) => setForm({ ...form, data: {...form.data, price: Number(e.target.value)}})} />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  </div>
</div>
  )
}

export default Item