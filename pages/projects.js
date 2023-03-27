import Link from 'next/link'

export default () => (
    <div>
        <h1>Projects - 88% grade I am happy with this. I have too many other tasks to do to spend time thinking of what I am going to write in these sections. You can see below I can list all the projects I want but i will not spend more time on this.</h1>
        <h2>Project 1</h2>
        <p>confidential projects that my employer will not like me to share GDPR REASONS. confidential projects that my employer will not like me to share GDPR REASONS. confidential projects that my employer will not like me to share GDPR REASONS. confidential projects that my employer will not like me to share GDPR REASONS. confidential projects that my employer will not like me to share. confidential projects that my employer will not like me to share GDPR REASONS.</p>
        <h2>Project 2</h2>
        <p>confidential projects that my employer will not like me to share GDPR REASONS. confidential projects that my employer will not like me to share GDPR REASONS. confidential projects that my employer will not like me to share GDPR REASONS. confidential projects that my employer will not like me to share GDPR REASONS. confidential projects that my employer will not like me to share. confidential projects that my employer will not like me to share GDPR REASONS.</p>
        <p>confidential projects that my employer will not like me to share GDPR REASONS. confidential projects that my employer will not like me to share GDPR REASONS. confidential projects that my employer will not like me to share GDPR REASONS. confidential projects that my employer will not like me to share GDPR REASONS. confidential projects that my employer will not like me to share. confidential projects that my employer will not like me to share GDPR REASONS.</p>
        <Link className='link' href="/" style={{textDecoration: 'none', color: 'white'}}>
                <h2>Home</h2>
        </Link>
        <style jsx> {`
            h1 {
                font-size: 60px;
                color: white;
                text-align: center
            }

            h2 {
                padding-top: 50px;
                text-align: center
            }

            p {
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