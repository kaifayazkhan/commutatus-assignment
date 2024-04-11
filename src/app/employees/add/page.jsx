"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import InputField from '@/components/InputField'
import SelectOption from '@/components/SelectOption'

import { employeeSchema } from '@/utils/FromSchema'
import { departments, positions } from '@/data/employee'
import useEmployees from '@/hooks/useEmployees'
import { generateRandomID } from '@/utils/generateRandomID'

export default function AddEmployee() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(employeeSchema)
    });
    const { addEmployee } = useEmployees();

    const onSubmit = (data) => {
        const updatedData = {
            employee_id: generateRandomID(),
            ...data
        }
        addEmployee(updatedData)
        router.push('/employees');

    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className='max-w-lg p-10 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
                <h1 className='text-2xl font-bold text-center mb-6'>Add New Employee</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full space-y-5'>
                    <InputField
                        type="text"
                        placeholder="Name"
                        label="Name"
                        register={register('name')}
                        error={errors?.name?.message}
                    />
                    <InputField
                        type="email"
                        placeholder="Email"
                        label="Email"
                        register={register('email')}
                        error={errors?.email?.message}
                    />
                    <InputField
                        type="number"
                        placeholder="Phone"
                        label="Phone"
                        register={register('phone')}
                        error={errors?.phone?.message}
                    />
                    <SelectOption
                        label="Position"
                        data={positions.sort()}
                        register={register('position')}
                        error={errors?.position?.message}
                    />
                    <SelectOption
                        label="Department"
                        data={departments.sort()}
                        register={register('department')}
                        error={errors?.department?.message}
                    />
                    <button className='w-full p-4 bg-blue-400 rounded-lg' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}
