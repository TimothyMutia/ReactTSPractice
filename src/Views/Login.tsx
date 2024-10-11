import { useTheme } from '@/Contexts/ThemeContext'
import React from 'react'
 
import { useForm } from "react-hook-form"
import { z } from "zod"
import {zodResolver} from '@hookform/resolvers/zod';
import { Button } from "@/Components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";

const Login = () => {

    const UserSchema = z.object({
        username: z.coerce.string({
            required_error: "username is required",
            invalid_type_error: "username must be a string",
        }).max(20, {
            message: "username shouldn't be longer than 20 characters"
        }),
        password: z.coerce.string().min(8, {message: "password should be at least 8 characters long"}),
    });
    
    
    function onSubmit(values:z.infer<typeof UserSchema>) {
        console.log(values)
    }
    const form = useForm<z.infer<typeof UserSchema>>({
        resolver: zodResolver(UserSchema),
        defaultValues: {
          username: "",
        },
    })

    const {theme} = useTheme();
  return (
    <div className={theme === 'light' ? 'light' : 'dark'}>
        <div id="login page" className='flex flex-row bg-light-blue justify-center items-center p-20 dark:bg-dark'>
            <div id='login container' className='flex flex-col bg-grey rounded-3xl border-solid p-4 h-full gap-10 w-1/4 dark:bg-light-orange'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <img src='src\assets\react.svg' className='h-[40px] w-[40px]'></img>
                    <h1 className='font-New-Amsterdam text-4xl text-light-orange dark:text-blue-700'>Login Page</h1>
                </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col justify-center p-5">
                    <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-light-orange dark:text-brown'>Username</FormLabel>
                            <FormControl>
                                <Input className='text-white dark:text-dark dark:bg-white' placeholder="user" {...field} />
                            </FormControl>
                            <FormDescription className='text-slate-400 dark:text-slate-700'>
                                Enter your username.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-light-orange dark:text-brown'>Password</FormLabel>
                            <FormControl>
                                <Input className='text-white dark:text-dark dark:bg-white' type='password' placeholder="pass" {...field} />
                            </FormControl>
                            <FormDescription className='text-slate-400 dark:text-slate-700'>
                                Enter your Password.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
            </div>
        </div>
    </div>
  )
}

export default Login