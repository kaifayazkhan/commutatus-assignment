import React from 'react'

const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    outline: "bg-transparent border-2 border-secondaryText text-secondaryText hover:opacity-70",
}
export default function CTA({ className, type = "button", title, variant, disabled, onClick }) {
    return (
        <button
            type={type}
            className={`w-full  h-12 py-1 px-4 ${variants[variant]} rounded-lg drop-shadow-lg flex justify-center items-center gap-1 disabled:bg-disabled disabled:text-border  ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {title}
        </button >
    )
}
