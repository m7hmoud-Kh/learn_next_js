'use client'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'


type FormValues = {
    username: string,
    email: string,
    channel: string,
    address: {
        line1: string,
        line2: string
    }
}

const defaultValues: FormValues =  {
    username: "",
    email:"khairy@gmail.com",
    channel: "youtube Channel",
    address: {
        line1: "assuit",
        line2: "cairo"
    }
}
const FormPage = () => {

    const form = useForm<FormValues>({
        defaultValues
    });

    const {register, handleSubmit, reset, formState, watch} = form;

    const submitForm = (values: FormValues) => {
        console.log('Data from form', values);
    }

    const onReset = () => {
        reset(defaultValues);
    };

    const {errors, isDirty, isValid} = formState
    useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            console.log(value, name, type)
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    return (
        <div>
            <h1>Learn web hook Form</h1>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="form-control">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username"  {...register('username', {
                        required: {
                            value: true,
                            message: "userName is required"
                        },
                        validate: (value) => {
                            if(value.length > 3){
                                return true
                            }else{
                                return "Must be greater than 3"
                            }
                        }
                        }
                    )}/>
                    <p className='error'>{errors?.username?.message}</p>
                </div>
                <div className="form-control">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" {...register('email')} />
                </div>
                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input type="text" id="channel" {...register('channel')}/>
                </div>

                <div className="form-control">
                    <label htmlFor="address1">Address 1</label>
                    <input type="text" id="address1" {...register('address.line1')} />
                </div>

                <div className="form-control">
                    <label htmlFor="address2">Address 2</label>
                    <input type="text" id="address2" {...register('address.line2')} />
                </div>

                <button type='submit' disabled={!isDirty || !isValid}>Submit</button>
                <button type='button' onClick={onReset}>
                    Reset
                </button>
            </form>
        </div>
    )
}
export default FormPage