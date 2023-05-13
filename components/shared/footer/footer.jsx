import fo from '../../../styles/pages/footer.module.css';
const Footer = () => {
  return (
    <div className={fo.footer}>
      <div className={fo.container}>
        <div className={fo.row}>
          <div className={fo.col}>
            <h4>Product</h4>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Pricing plans</a></li>
              <li><a href="#">Product updates</a></li>
            </ul>
          </div>
          <div className={fo.col}>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">User guides</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Developers</a></li>
              <li><a href="#">Legal</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>
          <div className={fo.col}>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className={fo.col}>
            <h4>Subscribe to our newsletter</h4>
            <ul>
              <li>
                <form className='SubscribeForm'>
                  <input type="text" placeholder="Enter your email address" />
                  <button class type="submit">Subscribe now</button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer