import React from 'react';
import NavbarButton from "@/app/components/navbarbutton/page";

const Navbar = () => {
    const menuOptions = [
        { title: "Documente", link: "/management-documente" },
        { title: "Settings", link: "/settings" },
        { title: "Logout", link: "/logout" },
    ];

    return (
        <div className="p-4 border-b-gray-200 border-solid border-b flex fixed bg-white w-full">
            <div>
                <img src="/websiteUI/logo.png" alt="Logo" className="min-w-4 w-4 p-0"/>
            </div>
            <NavbarButton title="MANAGEMENT" options={menuOptions} />
            <NavbarButton title="ELEVI" options={menuOptions} />
            <NavbarButton title="PROFESORI" options={menuOptions} />
            <NavbarButton title="EXAMENE" options={menuOptions} />
            <NavbarButton title="PROIECTE" link="/management-documente" />
        </div>
    );
};

export default Navbar;
