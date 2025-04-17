const Header = () => {
    return (
        <header className="border-b border-gray-200 px-3 py-2 flex justify-between">
            <div className="mb-2 flex items-center">
                <img src="./logo.png" alt="logo_img" className="w-12" />
                <h1 className="text-black text-2xl font-medium">WhatBytes</h1>
            </div>

            <div className="flex mt-1 h-11 items-center rounded-lg gap-x-1 border-2 py-0.5 px-1 border-gray-200">
                <div className="avatar rotate-135">
                    <div
                        className="w-7 "
                        style={{ borderRadius: "40% 60% 40% / 60% 40%" }}
                    >
                        <img alt="profile-img" src="./profile.jpg" className="rotate-40" />
                    </div>
                </div>

                <p className="text-[13px] text-black font-bold">Rahil Siddique</p>
            </div>
        </header>
    )
}

export default Header