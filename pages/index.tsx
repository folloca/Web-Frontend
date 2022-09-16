import type {NextPage} from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <div>
            Folloca Web
            <ul>
                <li>
                    <Link href="/trend">
                        <a>move to trend</a>
                    </Link>
                </li>
                <li><Link href="/mypage">
                    <a>move to mypage</a>
                </Link>
                </li>

                <li><Link href="/search">
                    <a>move to search</a>
                </Link></li>


                <li><Link href="/selection">
                    <a>move to selection</a>
                </Link></li>


                <li>
                    <Link href="/signin">
                        <a>move to signin</a>
                    </Link>
                </li>


                <li>
                    <Link href="/signup">
                        <a>move to signup</a>
                    </Link>
                </li>


            </ul>

        </div>
    )
}

export default Home
