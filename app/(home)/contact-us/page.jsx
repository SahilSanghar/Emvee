"use client"

import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Button } from "/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "/components/ui/dropdown-menu";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        description: ''
    });

    const [errors, setErrors] = useState({});
    const [position, setPosition] = useState("bottom"); // Dropdown position state

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = 'Name is required';
        if (!formData.email) tempErrors.email = 'Email is required';
        if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid';
        if (!formData.number) tempErrors.number = 'Number is required';
        if (!/^\d+$/.test(formData.number)) tempErrors.number = 'Number is invalid';
        if (!formData.description) tempErrors.description = 'Description is required';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log(formData);
            // Clear form data
            setFormData({
                name: '',
                email: '',
                number: '',
                description: ''
            });
            toast.success('Message sent successfully!');
        } else {
            toast.error('Please correct the errors before submitting.');
        }
    };

    return (
        <div className="max-w-lg mx-auto p-4 pt-[100px] h-[100vh]">
            <Toaster />
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <p className='text-center text-2xl font-semibold'>Get in touch</p>
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2 mt-[30px]">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                </div>

                <div className="mb-4">
                    <label htmlFor="number" className="block text-gray-700 font-bold mb-2">Number</label>
                    <input
                        type="text"
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.number ? 'border-red-500' : ''}`}
                    />
                    {errors.number && <span className="text-red-500 text-sm">{errors.number}</span>}
                </div>

                {/* DropdownMenuRadioGroupDemo inserted here */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-full">Choose Services</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Choose service</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                            <DropdownMenuRadioItem value="Parking">Parking</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="Pharmaceutical-machine">Pharmaceutical machine</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="Hvac-project-contracting">Hvac project contracting</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.description ? 'border-red-500' : ''}`}
                    ></textarea>
                    {errors.description && <span className="text-red-500 text-sm">{errors.description}</span>}
                </div>

                <button
                    type="submit"
                    className="inline-flex h-12 w-[482px] text-xl py-6 animate-shimmer items-center justify-center rounded-md border bg-[linear-gradient(110deg,#3b82f6,45%,#2563eb,55%,#3b82f6)] bg-[length:200%_100%] px-6 font-bold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default ContactUs;
