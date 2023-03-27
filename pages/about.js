import Link from 'next/link'

export default () => (
    <div>
        <h1>About Me</h1>
        <h2>Education</h2>
        <ul>
            <li>High School - South Africa High School</li>
            <li>College - South Africa High College</li>
            <li>University - South Africa High University</li>
        </ul>
        <h2>Employment History</h2>
        <ul>
            <li>Job 1 - Window cleaner 1920 - 1940</li>
            <li>Job 2 - Blacksmith 1940 - 2020</li>
            <li>Job 3 - GDPR Interigator - 2020 - 3000</li>
        </ul>
        <h2>Key Skills</h2>
        <ul>
            <li>Skill 1 - Dancing</li>
            <li>Skill 2 - Blowing the trumpet</li>
            <li>Skill 3 - Snowboarding</li>
        </ul>
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