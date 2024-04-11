import React from 'react';
import ErrorMessage from './ErrorMessage';

export default function SelectOption({ label, data, register, error }) {
  return (
    <div className="mb-4 flex flex-col gap-1">
      {label && <label htmlFor={label} className="text-label_text">{label}</label>}
      <select
        id={label}
        {...register}
        className={`appearance-none border rounded-lg w-full py-2 h-12 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error ? "border-red-500 focus:border-red-500" : "focus:border-blue-400"
          }  rounded-lg `}
      >
        <option value="">Select a category</option>
        {data?.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      {error && <ErrorMessage message={error} />}
    </div>
  );
}