import * as React from "react"
import PropTypes from "prop-types"

const Footer = () => (
  <footer
    style={{
      position: 'fixed',
      bottom: 0,
      width: '100vw',
      color: 'white',
      margin: `0 auto`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      backgroundColor: '#fde000',
      padding: '16px'
    }}
  >
    <div
      style={{
        display: 'flex',
        maxWidth: '1000px',
        alignItems: 'center',
      }}
    >
      <h4 style={{ fontSize: '24px', margin: '0 20px 0 0', backgroundColor: 'rgb(53, 103, 50' }}>JLo te espera en el Bar Libra el Domingo día 2 de Octubre a las 16:00</h4>
      <h5 style={{ color: '#231f20', margin: 0, fontSize: '18px', lineHeight: '28px' }}>¡Nos vemos!</h5>
    </div>  
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
