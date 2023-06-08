import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link
          href="/posts/first-post"
          className={styles.card}
          
          rel="noopener noreferrer"
        >
          <h2>
            Post Link! <span>-&gt;</span>
          </h2>
          <p>This is gonna go to the post now</p>
        </Link>

        <Link
          href="/posts/second-post"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Another <span>-&gt;</span>
          </h2>
          <p>Going to the second link</p>
        </Link>

        <Link
          href="/posts/third-post"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Click here <span>-&gt;</span>
          </h2>
          <p>Third link</p>
        </Link>

        <Link
          href="/posts/fourth-post"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Okay! <span>-&gt;</span>
          </h2>
          <p>
            Fourth Post
          </p>
        </Link>
      </div>
    </main>
  )
}
