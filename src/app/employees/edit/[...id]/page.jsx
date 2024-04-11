'use client'
import React, { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from '@/components/InputField';
import SelectOption from '@/components/SelectOption';
import { departments, positions } from '@/data/employee';
import { employeeSchema } from '@/utils/FromSchema';
import useEmployees from '@/hooks/useEmployees';
import CTA from '@/components/CTA';

export default function UpdateEmployee() {
    const router = useRouter();
    const { id } = useParams();
    const { employees, editEmployee } = useEmployees();

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(employeeSchema)
    });

    useEffect(() => {
        if (id[0] && employees.length > 0) {
            const newEmployee = employees.find(employee => employee.employee_id === id[0]);
            if (newEmployee) {
                reset({
                    name: newEmployee.name,
                    email: newEmployee.email,
                    phone: newEmployee.phone,
                    position: newEmployee.position,
                    department: newEmployee.department
                });
            }
        }
    }, [id, employees, reset]);


    const onSubmit = data => {
        const updatedData = { employee_id: id[0], ...data };
        editEmployee(updatedData);
        router.push('/employees');
    };

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className='max-w-lg p-10 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
                <h1 className='text-2xl font-bold text-center mb-6'>Update Employee Information</h1>
                <form className='w-full space-y-5 ' onSubmit={handleSubmit(onSubmit)} >
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
                        data={positions}
                        register={register('position')}
                        error={errors?.position?.message}
                    />
                    <SelectOption
                        label="Department"
                        data={departments}
                        register={register('department')}
                        error={errors?.department?.message}
                    />
                    <CTA
                        title={isSubmitting ? 'Updating...' : 'Update'}
                        variant="primary"
                        type="submit"
                    />
                </form>
            </div>
        </div>
    );
}

