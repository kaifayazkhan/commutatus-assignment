"use client"
import EmployeeTable from '@/components/Employee/EmployeeTable'
import useEmployees from '@/hooks/useEmployees'

export default function Employees() {
    const { employees } = useEmployees();
    return (
        <main className='min-h-screen w-full p-24'>
            <EmployeeTable employees={employees} />
        </main>
    )
}
