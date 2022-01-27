import Link from 'next/link';
import appConfig from '../config.json';

const NotFound = () => {

    return (

        <div className="not-found">

            <img src="https://external-preview.redd.it/SVfkHWVio6HBxhkvDJ4BltHX_1KlTuK6HnGLAJm1IPk.jpg?width=640&crop=smart&auto=webp&s=461c44928437614898795e1e15128d349b18f400" alt="not-found-img" />
            <h1>404 error |</h1>
            <h1>Reage Shinji, entra no EVA</h1>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>


        </div>

    );

}

export default NotFound;