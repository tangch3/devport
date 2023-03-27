import Link from 'next/link'

export default () => (
    <div>
        <h1>Contact Me</h1>
        <h3>Let's get this conversation started. Tell me about yourself and I'll get in touch as soon as I can</h3>
        <h2>Email Adress</h2>
        <img src="./static/image.png" alt="my image"/>
        <Link className='link' href="/" style={{textDecoration: 'none', color: 'white'}}>
                <h2>Home</h2>
        </Link>
        <style jsx> {`
            h1 {
                font-size: 60px;
                color: white;
                text-align: center
            }

            h3 {
                padding-left: 200px;
                padding-right: 200px;
                text-align center;
            }

            h2 {
                padding-top: 50px;
                text-align: center
            }

            ul {
                padding-left: 200px;
                padding-right: 200px;
                text-align: center;
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