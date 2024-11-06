'use client'

import Image from 'next/image';
import { useState } from 'react';
import Upload from '@/app/assests/Csv.svg'

const AddDriverForm = () => {
    const [formData, setFormData] = useState({
        number: '',
        name: '',
        model: '',
        chassisNo: '',
        engineNo: '',
        manufacteredBy: '',
        vehicleType: '',
        vehicleColor: '',
        expiryDate: '',
        vehicleGroup: '',
        registrationExpiryDate: '',
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

        <h2 className="text-2xl font-bold mb-6 mt-10 md:mt-0">Add Vehicle</h2>
        <div className="w-full mx-auto p-8 bg-white rounded-md  border border-opacity-40 border-DriverBorder lg:h-[750px]">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-col-3 lg:grid-cols-3 gap-10">
                    <div>
                        <label className="block text-[18px] font-semibold mb-1">Registration Number *</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Registration Number"
                            className="w-full px-4 py-3 border border-black border-opacity-25 rounded-[10px] focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-[18px] font-semibold mb-1">Vehicle Name *</label>
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
                        <label className="block text-[18px] font-semibold mb-1">Model *</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                            placeholder="Model"
                            className="w-full px-4 py-3 border border-black border-opacity-25 rounded-[10px] focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-[18px] font-semibold mb-1">Chassis No *</label>
                        <input
                            type="text"
                            name="licenseNo"
                            value={formData.chassisNo}
                            onChange={handleInputChange}
                            placeholder="Chassis No"
                            className="w-full px-4 py-3 border border-black border-opacity-25 rounded-[10px] focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-[18px] font-semibold mb-1">Engine No *</label>
                        <input
                            type="text"
                            name="licenseExpiryDate"
                            value={formData.engineNo}
                            placeholder='Engine No'
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-black border-opacity-25 rounded-[10px] focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-[18px] font-semibold mb-1">Manufactured By *</label>
                        <input
                            type="text"
                            name="experience"
                            value={formData.manufacteredBy}
                            onChange={handleInputChange}
                            placeholder="Manufactured By"
                            className="w-full px-4 py-3 border border-black border-opacity-25 rounded-[10px] focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-[18px] font-semibold mb-1">Vehicle Type*</label>
                        <input
                            type="text"
                            name="joiningDate"
                            value={formData.vehicleType}
                            placeholder='Vehicle Type'
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-black border-opacity-25 rounded-[10px] focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-[18px] font-semibold mb-1">Vehicle Color *</label>
                        <input
                            type="text"
                            name="reference"
                            value={formData.vehicleColor}
                            onChange={handleInputChange}
                            placeholder="#F44FBF"
                            className="w-full px-4 py-3 border border-black  border-opacity-25 rounded-[10px] focus:outline-none"
                            style={{background:'#F44FBF',color:'white'}}
                        />
                    </div>
                    <div className="col-span-1 ">
                        <label className="block text-[18px] font-semibold mb-1">Registration Expiry Date *</label>
                        <input
                            name="address"
                            value={formData.registrationExpiryDate}
                            onChange={handleInputChange}
                            placeholder="Registration Expiry Date"
                            className="w-full px-4 py-3 border  border-black border-opacity-25 rounded-[10px] focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-[18px] font-semibold mb-1">Vehicle Group</label>
                        <input
                            name="text"
                            value={formData.vehicleGroup}
                            onChange={handleInputChange}
                            placeholder='Vehicle Group'
                            className="w-full px-4 py-3 border border-black border-opacity-25 rounded-[10px] focus:outline-none"
                        >
                        </input>
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
