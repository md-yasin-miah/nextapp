import style from '../../../styles/pages/footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__container__up}>
          <div className={style.footer__container__up__nav_links}>
            <h3>Product</h3>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Pricing plans</a></li>
              <li><a href="#">Product updates</a></li>
            </ul>
          </div>
          <div className={style.footer__container__up__nav_links}>
            <h3>Resource</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">User guides</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Developers</a></li>
              <li><a href="#">Legal</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>
          <div className={style.footer__container__up__nav_links}>
            <h3>Company</h3>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className={style.footer__container__up__nav_links}>
            <h3>Subscribe to our newsletter</h3>
            <div className={style.footer__container__up__nav_links__input}>
              <input type="text" placeholder="Enter your mail" />
              <span>Subscribe</span>
            </div>
          </div>
        </div>
        <hr />
        <div className={style.footer__container__down}>
          <div className={style.footer__container__down__left}>
            <p>© 2021. All rights reserved.</p>
          </div>
          <div className={style.footer__container__down__right}>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer