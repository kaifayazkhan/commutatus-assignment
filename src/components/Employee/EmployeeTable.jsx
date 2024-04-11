"use client";
import React, { useState, useCallback } from "react";
import Link from "next/link";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Filter from "./Filter";

import useDebounce from "@/hooks/useDebounce";

const employeeCols = [
    "ID",
    "Name",
    "Email",
    "Phone",
    "Position",
    "Department",
    "Actions",
];

const EmployeeTable = ({ employees }) => {
    const [filterOptions, setFilterOptions] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const debouncedFilterOptions = {
        name: useDebounce(filterOptions.name, 300),
        email: useDebounce(filterOptions.email, 300),
        phone: useDebounce(filterOptions.phone, 300),
    };

    const handleFilterChange = useCallback(
        (field, value) => {
            if (value !== filterOptions[field]) {
                setFilterOptions((prevOptions) => ({
                    ...prevOptions,
                    [field]: value,
                }));
            }
        },
        [filterOptions]
    );
    const filteredEmployees = employees?.filter(
        (employee) =>
            (debouncedFilterOptions.name === "" ||
                employee.name
                    .toLowerCase()
                    .includes(debouncedFilterOptions.name.toLowerCase())) &&
            (debouncedFilterOptions.email === "" ||
                employee.email
                    .toLowerCase()
                    .includes(debouncedFilterOptions.email.toLowerCase())) &&
            (debouncedFilterOptions.phone === "" ||
                employee.phone
                    .toLowerCase()
                    .includes(debouncedFilterOptions.phone.toLowerCase()))
    );

    console.log("FILTER");

    return (
        <div className="overflow-hidden  w-full">
            <div className="mb-4 w-fit ml-auto">
                <Link
                    className="`w-full  h-12 py-1 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg drop-shadow-lg flex justify-center items-center gap-1 "
                    href="/employees/add"
                >
                    Add New Employee
                </Link>
            </div>
            <Filter filterOptions={filterOptions} handleFilter={handleFilterChange} />
            <div className="overflow-x-auto w-full">
                <table className="min-w-full divide-y divide-gray-200">
                    <TableHeader columns={employeeCols} />
                    {filteredEmployees?.map((employee, i) => (
                        <TableRow key={employee.employee_id + i} employee={employee} />
                    ))}
                </table>
            </div>
        </div>
    );
};

export default EmployeeTable;
