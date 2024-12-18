"use client"
import { createContext, useContext, useState } from 'react'

interface NavbarMobileContextProps {
    isOpen: boolean;
    toggleNavbar: () => void
}

const NavbarContext = createContext<NavbarMobileContextProps | undefined>(
	undefined,
);

export const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen)
    }

    return (
        <NavbarContext.Provider
			value={{ isOpen, toggleNavbar }}
		>
			{children}
		</NavbarContext.Provider>

    )

}

export const useNavbarMobile = (): NavbarMobileContextProps => {
	const context = useContext(NavbarContext);
	if (!context) {
		throw new Error(
			"useNavbarMobile must be used within a NavbarMobileProvider",
		);
	}
	return context;
};
