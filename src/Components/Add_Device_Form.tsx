import { useMutation, useQueryClient } from "@tanstack/react-query"; 
import { postDevice} from "../Api/deviceApi";
import { useState } from "react"; 
import { Device } from "../types/global";

const Add_Device_Form = () => {
    const [form, setForm] = useState<Device>({ 
        name: "", 
        data: { 
          color: "", 
          price: 0, 
        }, 
      }); 
       
      // Mutation setup 
      const queryClient = useQueryClient(); 
      const mutation = useMutation({ 
      mutationFn: postDevice, 
      onSuccess: () => { 
        queryClient.invalidateQueries({ queryKey: ["devices"] }); 
      }, 
      }); 
       
      // Submit handler 
      const handleSubmit = (e: React.FormEvent) => { 
      e.preventDefault(); 
      mutation.mutate(form); // Invoke mutate and pass the form data 
      setForm({
        name: "", 
        data: { 
        color: "", 
        price: 0, 
        } 
      }); 
    }

    return(
        <form className='p-3 flex flex-col gap-1 border-solid border-2 border-grey' onSubmit={handleSubmit}> 
            <div> 
                <label>Name: </label> 
                <input 
                type="text" 
                value={form.name || ""} 
                className="border-solid border-slate-400 border-2"
                onChange={(e) => setForm({ ...form, name: e.target.value })} 
                /> 
            </div> 
            <div> 
                <label>Color: </label> 
                <input 
                type="text" 
                value={form.data?.color || ""} 
                className="border-solid border-slate-400 border-2"
                onChange={(e) => 
                setForm({ ...form, data: { ...form.data, color: e.target.value 
                }}) 
                } 
                /> 
            </div> 
            <div> 
                <label>Price: </label> 
                <input 
                type="number" 
                value={form.data?.price || ""} 
                className="border-solid border-slate-400 border-2"
                onChange={(e) => 
                setForm({ 
                ...form, 
                data: { ...form.data, price: Number(e.target.value) }, 
                }) 
                } 
                /> 
            </div> 
            <button type="submit" className="bg-light-orange text-grey font-bold w-1/2 self-center rounded-md"> 
            Add Device 
            </button> 
        </form> 
    )
}

export default Add_Device_Form