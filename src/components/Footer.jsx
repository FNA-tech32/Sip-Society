import { useEffect, useState } from 'react'

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear()) 

  useEffect(() => {
    // keep year correct in long-lived sessions
    const t = window.setInterval(() => setYear(new Date().getFullYear()), 60_000) 
    return () => window.clearInterval(t) 
  }, []) 

  return (
    <footer className="footer">
      <div className="footer__container bd-grid"> 
        <p className="footer__copy">© {year} Sip Society</p>
        <div className="footer__social">
          <a
            className="footer__link"
            href="https://instagram.com/sipsociety"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <i className="bx bxl-instagram" />
          </a>
          <a
            className="footer__link"
            href="https://facebook.com/sipsociety"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <i className="bx bxl-facebook" />
          </a>
        </div>
      </div>
    </footer> 
  ) 
}

