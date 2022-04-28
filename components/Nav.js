import React from "react";
import {RiMenuLine} from 'react-icons/ri'
export default function Nav() {
  let itens = [
        {
            name: 'Home',
            link:'#'
        },
        {   
            name: 'Sobre',
            link:'#'
        },
        {   
            name: 'Contato',
            link:'#'
        }
    ]
  const listMenu = itens.map((iten) => 
    <li className="nav-item">
        <a
            className="px-3 py-2 flex items-center
            text-sm uppercase font-bold leading-snug
            text-white hover:opacity-75"
            href={iten.link}
        >
            <span className="ml-3">{iten.name}</span>
        </a>
    </li>
  )
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center
        justify-between px-2 py-3 bg-pink-600 mb-3 m-0">
        <div className="container px-4 mx-auto flex flex-wrap
            items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto
            lg:static lg:block lg:justify-start">
            <img className="py-2 w-48 md:w-80" src="/img/logo.svg"/>
            <button
              className="text-white cursor-pointer text-xl
              leading-none px-3 py-1 border
              border-solid border-transparent rounded
              bg-transparent block lg:hidden outline-none
              focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <RiMenuLine />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                {listMenu}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}