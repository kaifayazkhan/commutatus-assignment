import React from 'react'
import Link from 'next/link'
import { FaEdit, FaTrash } from 'react-icons/fa'
import useEmployees from '@/hooks/useEmployees'

export default function TableRow({ employee }) {
    const { deleteEmployee } = useEmployees();
    return (
        <tbody>
            <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{employee.employee_id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{employee.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{employee.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{employee.phone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{employee.position}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{employee.department}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-4 justify-center">
                        <Link href={`/employees/edit/${employee.employee_id}`} className="text-blue-500 hover:text-blue-700 focus:outline-none" >
                            <FaEdit />
                        </Link>
                        <button className="text-red-500 hover:text-red-700 focus:outline-none" onClick={() => deleteEmployee(employee.employee_id)}>
                            <FaTrash />
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>

    )
}
