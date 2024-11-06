'use client'

import Image from 'next/image';
import { useState } from 'react';
import Upload from '@/app/assests/Csv.svg'

const AddDriverForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        age: '',
        licenseNo: '',
        licenseExpiryDate: '',
        experience: '',
        joiningDate: '',
        reference: '',
        address: '',
        status: '',
        image: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(formData);
    };

    return (<div className='font-outfit'>

        <h2 className="text-2xl font-bold mb-6 mt-10 md:mt-0">Add Driver</h2>
        <div className="w-full mx-auto p-8 bg-white rounded-md  border border-opacity-40 border-DriverBorder lg:h-[750px]">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-col-3 lg:grid-cols-4 gap-10">
                    <div>
                        <label className="block text-[18px] font-semibold mb-1">Driver Name*</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Driver Name"
                            className="w-full px-4 py-3 border border-black border-opacity-25 rounded-[10px] focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-[18px] font-semibold mb-1">Mobile*</label>
                        <input
                            type="text"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            placeholder="Mobile"
                            className="w-full px-4 py-3 border border-black border-opacity-25 rounded-[10px] focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-[18px] font-semibold mb-1">Age*</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                            placeholder="Age"
                            className="w-full px-4 py-3 border border-black border-opacity-25 rounded-[10px] focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-[18px] font-semibold mb-1">License No*</label>
                        <input
                            type="text"
                            name="licenseNo"
                            value={formData.licenseNo}
                            onChange={handleInputChange}
                            placeholder="License No"
                            className="w-full px-4 py-3 border border-black border-opacity-25 rounded-[10px] focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-[18px] font-semibold mb-1">License Expiry Date*</label>
                        <input
                            type="date"
                            name="licenseExpiryDate"
                            value={formData.licenseExpiryDate}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-black border-opacity-25 rounded-[10px] focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-[18px] font-semibold mb-1">Total Experience*</label>
                        <input
                            type="text"
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            placeholder="Total Experience"
                            className="w-full px-4 py-3 border border-black border-opacity-25 rounded-[10px] focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-[18px] font-semibold mb-1">Date of Joining*</label>
                        <input
                            type="date"
                            name="joiningDate"
                            value={formData.joiningDate}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-black border-opacity-25 rounded-[10px] focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-[18px] font-semibold mb-1">Reference/Notes*</label>
                        <input
                            type="text"
                            name="reference"
                            value={formData.reference}
                            onChange={handleInputChange}
                            placeholder="Reference/Notes"
                            className="w-full px-4 py-3 border border-black border-opacity-25 rounded-[10px] focus:outline-none"
                        />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-[18px] font-semibold mb-1">Address*</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder="Address"
                            className="w-full px-4 py-3 border lg:h-[126px] border-black border-opacity-25 rounded-[10px] focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-[18px] font-semibold mb-1">Driver Status</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-black border-opacity-25 rounded-[10px] focus:outline-none"
                        >
                            <option value="">Select Driver Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>

                    <div className="col-span-1 md:col-span-3 mb-6">
                        <label className="flex items-center justify-center w-48 h-16 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                            <input
                                type="file"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                            <span className="text-center text-gray-500 flex items-center gap-2">
                                Upload image <Image src={Upload} alt='Upload Images' className="text-gray-500" />
                            </span>
                        </label>
                        {formData.image && (
                            <p className="mt-2 text-sm text-gray-600">
                                Selected: {formData.image.name}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex justify-end mt-6 space-x-4">
                    <button type="button" className="px-8 py-4 border rounded-[12px] hover:bg-gray-100">
                        Cancel
                    </button>
                    <button type="submit" className="px-8 py-4 bg-blue-600 text-white rounded-[12px] hover:bg-blue-700">
                        Save
                    </button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default AddDriverForm;
