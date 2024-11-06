// components/SecurityContent.js
const SecurityContent = () => (
    <div className="mt-4 max-w-[313px] font-outfit ml-5">
        <h2 className="text-[14px] py-4">Change Password</h2>
        <form>
        <label className="text-[13px] font-medium text-gray-700">Current Password</label>
        <input type="password" className="mt-1 block w-full px-3 py-3 border  rounded-[15px] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="********"
            style={{ color: '#718EBF',borderColor:'#DFEAF2' }}
        />
        <label className="text-[13px] font-medium text-gray-700 ">New Password</label>
        <input type="password" className="mt-1 block w-full px-3 py-3 border  rounded-[15px] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="********"
            style={{ color: '#718EBF',borderColor:'#DFEAF2' }}
        />
        </form>
    </div>
);

export default SecurityContent;
