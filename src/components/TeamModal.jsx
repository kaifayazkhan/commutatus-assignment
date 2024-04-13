import React from 'react'
import Modal from './Modal'
import InputField from './InputField'

export default function TeamModal() {
    return (
        <Modal title="Add Teams" modalBtnTitle='Add Teams'>
            <form className='w-full space-y-5'>
                <InputField
                    type="text"
                    placeholder="Enter team name..."
                    label="Team Name"
                />
                <InputField
                    type="text"
                    placeholder="Select your team leader..."
                    label="Team Leader"
                />
                <button className='w-full p-4 bg-blue-400 rounded-lg'>Submit</button>
            </form>
        </Modal>
    )
}
