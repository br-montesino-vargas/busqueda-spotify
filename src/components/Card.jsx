import { PlayButton } from './PlayButton'

export const Card = ({ item }) =>
{
    const { name, album, preview_url } = item

    return (
        <div>
            <div className="flex justify-center">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!">
                        <img className="rounded-t-lg" src={ album.images[0].url } alt=""/>
                    </a>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{ name }</h5>
                        <p className="text-gray-700 text-base mb-4">
                            { album.name }
                        </p>
                        
                        {   preview_url
                            ?
                            <PlayButton preview_url={ preview_url } />
                            :
                            <p>NO PREVIEW</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}