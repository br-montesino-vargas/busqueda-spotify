import { useEffect, useState } from "react"
import axios from "axios"
import { NavBar } from "./components/NavBar"
import { Card } from "./components/Card"


const CLIENT_ID = "2a5c5608884845b7b27e87be189f3fb1"
const REDIRECT_URI = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

const URL_AUTH_SPOTIFY = `${ AUTH_ENDPOINT }?client_id=${ CLIENT_ID }&redirect_uri=${ REDIRECT_URI }&response_type=${ RESPONSE_TYPE }`
const URL_SEARCH_SPOTIFY = "https://api.spotify.com/v1/search"

export const App = () =>
{
    const storage_token = window.localStorage.getItem("token")

    /* Hooks */
    const [token, setToken] = useState( storage_token || "" )
    const [searchKey, setSearchKey] = useState("")
    const [dataSearch, setDataSearch] = useState({ items: [] })

    useEffect( () =>
    {
        const hash = window.location.hash.substring(1)

        const params = new URLSearchParams( hash )
        const access_token = params.get("access_token")
        if( !storage_token && access_token )
        {
            window.localStorage.setItem("token", access_token)
            setToken( access_token )
        }

    }, [])

    /* Functions */
    const handleSearch = async (e) =>
    {
        e.preventDefault()
        try {
                
        
            const { data } = await axios.get( URL_SEARCH_SPOTIFY,
            {
                headers:
                {
                    Authorization: `Bearer ${ token }`
                },
                params:
                {
                    q: searchKey,
                    type: "track"
                }
            })

            setDataSearch( data.tracks )
        }
        catch (error )
        {

            if (error.status==401) {//muy probable que sea por que caduco el token
                alert('Caducó el token, ingresa nuevamente')
                handleLogout(); 
            }
        }
    }

    const handleLogout = () =>
    {
        window.localStorage.removeItem("token")
        setToken("")
        setDataSearch({ items: [] })
    }

    /* Render */
    return (
        <div className="App">
            <>
                <NavBar token={ token } url={ URL_AUTH_SPOTIFY } handleLogout={ handleLogout } />

                {   token
                    &&
                    <form onSubmit={ handleSearch } className="place-content-center">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="w-3/5 rounded-full mx-4 shadow-md py-3 focus:shadow-xl duration-700 px-5 text-center outline-none"
                            onChange={ (e) => setSearchKey( e.target.value )}
                        />
                        
                        <button type="submit" className="shadow-md hover:shadow-xl duration-700 rounded-lg p-3 text-center">Buscar</button>
                    </form>
                }
                <div className="w-4/5 my-5 place-content-center grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 duration-700">
                    
                    {   dataSearch
                        &&
                        dataSearch.items.map(( item, index ) =>
                        (
                            <Card
                                item={ item }
                                key={ index }
                            />
                        ))
                    }
                </div>
            </>
        </div>
    );
}