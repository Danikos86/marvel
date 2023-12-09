import { Link } from "react-router-dom"

const Page404 = () => {
    return (
        <div>
            <img style={{display: 'block', width: '550px', height: '550px', objectFit: 'contain', margin: '0 auto'}} src="https://media.tenor.com/IHdlTRsmcS4AAAAC/404.gif" alt="error404" />
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '44px', 'marginTop': '30px'}}>Page doesn't exist</p>
            <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px', 'color': '#9f0013'}} to="/">Back to main page</Link>
        </div>
    )
}

export default Page404