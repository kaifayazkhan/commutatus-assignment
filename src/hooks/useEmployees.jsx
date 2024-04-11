'use client';
import { useState, useEffect } from 'react';
import { EMPLOYEE_KEY } from '@/utils/const';

export default function useEmployees() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const storedEmployees = localStorage.getItem(EMPLOYEE_KEY);
        if (storedEmployees) {
            setEmployees(JSON.parse(storedEmployees));
        }
    }, []);

    const addEmployee = (newEmployee) => {
        const updatedEmployees = [...employees, newEmployee];
        setEmployees(updatedEmployees);
        localStorage.setItem(EMPLOYEE_KEY, JSON.stringify(updatedEmployees));
    };

    const deleteEmployee = (employeeId) => {
        const updatedEmployees = employees.filter((employee) => employee.employee_id !== employeeId);
        setEmployees(updatedEmployees);
        localStorage.setItem(EMPLOYEE_KEY, JSON.stringify(updatedEmployees));
    }

    const editEmployee = (updatedEmployee) => {
        const updatedEmployees = employees.map((employee) => {
            if (employee.employee_id === updatedEmployee.employee_id) {
                return updatedEmployee;
            }
            return employee;
        });
        setEmployees(updatedEmployees);
        localStorage.setItem(EMPLOYEE_KEY, JSON.stringify(updatedEmployees));
    }

    return {
        employees,
        addEmployee,
        deleteEmployee,
        editEmployee
    };
}