import '../style/Footer.css'

import Flip from 'react-reveal/Flip'

const Footer = () => {
  return (
    <footer>
      <Flip bottom>
        <p>&copy; 2023 Super Shop. All rights reserved.</p>
        <p>
          Follow us on{' '}
          <a href="https://www.facebook.com" target="_blank">
            Facebook
          </a>{' '}
          and
          <a href="https://www.instagram.com" target="_blank">
            {' '}
            Instagram
          </a>
          .
        </p>
      </Flip>
    </footer>
  )
}
export default Footer
