import React from 'react'

export const NavBar = ({ token, url, handleLogout }) =>
{
    return (
        <div>
            <nav className="relative w-full flex flex-wrap bg- items-center justify-between py-3 bg-green-600 text-black hover:text-black focus:bg-green-700 shadow-lg">
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <div className="container-fluid">
                        <a className="text-xl text-center text-black" href="/">Busqueda en Spotify</a>
                    </div>
                </div>
                <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                 
                  <li className="nav-item pr-2">
                {   !token
                    ?
                    <a className='nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0' href={ url }>Ingresar a Spotify</a>
                    :
                    <p className='nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0' onClick={ handleLogout }>Cerrar sesión</p>
                }
                   
                  </li>
                 
              </ul>
            </nav>
            <br/>
        </div>
    )
}