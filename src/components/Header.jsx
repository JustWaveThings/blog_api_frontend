import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
        <h2>
          <a
            href='https://github.com/justwavethings'
            target='_blank'
            rel='noreferrer'>
            {' '}
            Fred Love
          </a>
        </h2>
        <p>Full Stack Web Developer</p>
        <p>
          <a
            href='https://github.com/justwavethings'
            target='_blank'
            rel='noreferrer'>
            {' '}
            The Odin Project
          </a>{' '}
          Moderator
        </p>
        <nav>
          <ul>
            <li>
              <Link to='/'>HOME</Link>
            </li>
            <li>
              <Link to='/posts'>POSTS</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
