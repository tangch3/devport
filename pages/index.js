import Link from 'next/link'

export default () => (
    <div className='container'>
        <div className='navbar'>
            <Link className='link' href="/about" style={{textDecoration: 'none', color: 'white'}}>
                <h2>About</h2>
            </Link>
            <Link href="/projects" style={{textDecoration: 'none', color: 'white'}}>
                <h2>Projects</h2>
            </Link>
            <Link href="/contact" style={{textDecoration: 'none', color: 'white'}}>
                <h2>Contact</h2>
            </Link>
        </div>
        <style jsx> {`

            div .navbar {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                gap: 50px
            }

            h2 {
                font-size: 80px;
            }


        `}
        </style>
        <style global jsx> {`
            body {
                background: black;
                font-family: sans-serif;
                color: white
            }
        
        `}</style>
    </div>
)