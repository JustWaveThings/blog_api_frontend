import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer'>
      <a
        href='https://github.com/justwavethings'
        target='_blank'
        rel='noreferrer'>
        <FaGithub />
      </a>
      <a
        href='https://www.linkedin.com/in/fredlove000/'
        target='_blank'
        rel='noreferrer'>
        <FaLinkedin />
      </a>
      <a href='mailto:justwavethings@pm.me' target='_blank' rel='noreferrer'>
        <FaEnvelope />
      </a>
      <a
        href='https://github.com/justwavethings/blog_api_frontend'
        target='_blank'
        rel='noreferrer'>
        <FaCode />
      </a>
      <p>© {currentYear} Fred Love</p>
    </div>
  );
}
export default Footer;
