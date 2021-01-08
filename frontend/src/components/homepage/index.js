import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Homepage() {
    return (
        <div id="homepage">
            <header>Welcome</header>

            <section>
                <Link to="/marksinput">
                    <button>ENTER MARKS</button>
                </Link>

                <Link to="/leaderboard">
                    <button>LEADERBOARD</button>
                </Link>
            </section>
        </div>
    )
}
