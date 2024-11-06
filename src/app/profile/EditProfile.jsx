

export default function EditProfileTab({ isActive, onClick }) {
    return (
        <>
            <button
                onClick={onClick}
                className={`py-2 px-4  text-tabsBlue ${isActive ? 'border-b-2 border-blue-500 text-ActiveBlue' : 'hover:text-blue-500'
                    }`}
            >
                Edit Profile
            </button>
        </>
    )
}
