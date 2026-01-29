import { Button, IconButton } from "@mui/material"
import { assets, LinksRoute } from "../assets/assets"
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useRef } from "react";
import { useOutsideClick } from "../hooks/useOutClick";

export const NavBar = () => {
    const [openMenuMobile, setOpenMenuMobile] = useState(false);
    const BtnRef = useRef(null);
    useOutsideClick(BtnRef, () => setOpenMenuMobile(false))
    return (
        <div className="container">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img src={assets.logo_image} alt="logo" className="w-14 h-14 block shrink-0" />
                    {/* menu in large screen */}
                    <nav className="md:flex items-center hidden ">
                        {LinksRoute.map((link, index) => (
                            <Button

                                key={index}
                                sx={{
                                    position: "relative",
                                    color: "#ed8f0e",
                                    backgroundColor: "transparent",
                                    textTransform: "none",
                                    fontSize: '15px',

                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        left: "50%",
                                        bottom: 6,
                                        width: "0%",
                                        height: "2px",
                                        backgroundColor: "#ff6900",
                                        transition: "all 0.3s ease",
                                        transform: "translateX(-50%)",
                                    },

                                    "&:hover::after": {
                                        width: "60%",
                                    },

                                    "&:hover": {
                                        backgroundColor: "transparent",
                                    },
                                }}
                            >
                                {link.text}
                            </Button>
                        ))}
                    </nav>

                    {/* menu in small sreen */}
                    <nav className={`absolute p-2 top-[calc(100%+5px)] right-0 w-full bg-black rounded-md shadow-lg transition-all duration-200 ease-out ${openMenuMobile
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'}
                                    `}>
                        {LinksRoute.map((link, index) => (
                            <Button

                                key={index}
                                sx={{
                                    position: "relative",
                                    textAlign:'left',
                                    color: "#ed8f0e",
                                    display: 'block',
                                    width:'100%',
                                    backgroundColor: "transparent",
                                    textTransform: "none",
                                    fontSize: '15px',

                                    "&:hover": {
                                        backgroundColor: "#ed8f0e0d",
                                    },
                                }}
                            >
                                {link.text}
                            </Button>
                        ))}
                    </nav>
                </div>

                <div>
                    <span className="md:hidden">
                        <IconButton ref={BtnRef} onClick={() => setOpenMenuMobile(!openMenuMobile)} aria-label="languageIcon" sx={{
                            position: "relative",
                            color: "#ed8f0e",
                            backgroundColor: "transparent",
                            textTransform: "none",
                            fontSize: '15px'
                        }}>
                            {!openMenuMobile ? <MenuIcon /> : <CloseIcon />}
                        </IconButton>
                    </span>

                    <IconButton aria-label="languageIcon" sx={{
                        position: "relative",
                        color: "#ed8f0e",
                        backgroundColor: "transparent",
                        textTransform: "none",
                        fontSize: '15px'
                    }}>
                        <LanguageIcon />
                    </IconButton>

                </div>
            </div>
        </div>
    )
}