import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod'
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Field, FieldError, FieldLabel } from '../components/ui/field';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import api from '../api/axios';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const formSchema = z.object({
  email: z.string().email().min(5, "Name must be atleast 5 characters").trim(),
  password: z.string().min(8, "Must be atleast 8 characters").trim(),
});


const Login = () => {

const navigate = useNavigate();


 const { onLogin, token } = useAuth();

    if(token){
        navigate("/dashboard");
    }

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email:"",
      password:""
    },
  })

const onSubmit = async (data) => {
  console.log(data);

try {
        const response = await api.post("/auth/login", data);
        console.log(response)

        if(response.status === 200) {
          toast.success("Logged in Successfully");

          onLogin(response.data.token, data);
          navigate("/dashboard");

        } else {
              toast.error( response.message || "Login failed");
        }


      } catch (error) {
        toast.error(error.message || "some error occured");
        console.log(error.message);
        
      }

}

  return (
        <div className='w-full h-dvh pt-30 bg-emerald-200 '>
          <div className='w-full lg:w-1/2 mx-auto bg-white rounded-lg grid grid-cols-1 lg:grid-cols-2 h-60dvh overflow-hidden'>
                <div className="w-full overflow-hidden hidden lg:block">
            <img src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="wanderwise login page" />
            </div>
          <div>
          
    <form className= 'h-full' onSubmit={form.handleSubmit(onSubmit)}>
      <Card className='h-full flex flex-col justifly-evenly'>
      <CardHeader>
        <CardTitle>Login to wanderwise </CardTitle>
        <CardDescription>Enter your login details </CardDescription>
        <CardAction>
          <img src="wanderwiseLogo.png" alt="wanderwise logo" className='w-12' />
        </CardAction>
      </CardHeader>
      <CardContent className={'space-y-4'}>
        <Controller
  name="email"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Enter Your Email</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="email"
        placeholder= "abc@gmail.com"
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
<Controller
  name="password"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Enter Your password</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="password"
        placeholder= "**********"
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
      </CardContent>

         <CardFooter className={"flex flex-col"}>
                                <Button type="submit" className={"w-full mb-4"}>Login</Button>

                                <p>Don't have an account? <a href="/register"> Register</a></p>
                                </CardFooter>

      </Card>
    </form>
    </div>
    </div>
    </div>
    

    
  )
}

export default Login