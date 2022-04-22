import React from 'react'

export const NavBar = ({ token, url, handleLogout }) =>
{
    return (
        <div>
            <nav className="relative w-full flex flex-wrap bg-items-center justify-around py-3 bg-green-600 text-black hover:text-black focus:bg-green-700 shadow-lg">
                <h1 className="text-xl text-center text-white">Busqueda en Spotify</h1>
                {   !token
                    ?
                    <a type="button" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' href={ url }>Ingresar a Spotify</a>
                    :
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' onClick={ handleLogout }>Cerrar sesión</button>
                }
            </nav>
            <br/>
            <br/>
        </div>
    )
}