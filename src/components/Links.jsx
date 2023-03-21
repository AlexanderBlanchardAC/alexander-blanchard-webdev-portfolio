import React from 'react';
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub  } from "react-icons/fa";
import ABlanchardCV from "../assets/ABlanchardCV.pdf"

const Links = () => {

    const links = [
        {
            id: 0,
            child: (
                <>
                    Email <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto: alexanderblanchardac@yahoo.com",
            style: "rounded-tr-md"
        },
        {
            id: 1,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/AlexanderBlanchardAC",
        },
        {
            id: 2,
            child: (
                <>
                    CV <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: ABlanchardCV,
            style: "rounded-br-md",
            download: true,
        }
    ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
            {links.map(({ id, child, href, style, download}) => (
                <li
                key={id}
                className={
                    "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-400 bg-gray-500" + " " + style}
                >
                    <a
                    href={href}
                    className="flex justify-between items-center w-full text-white"
                    download={download}
                    target="_blank"
                    rel="noreferrer"
                    >
                        {child}
                    </a>
                </li>
                
            ))}
        </ul>
      
    </div>
  )
};

export default Links;
