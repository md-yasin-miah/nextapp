import joinStyles from '../../styles/pages/join-page.module.css';
import Image from 'next/image';
export default function JoinPage() {
  return (
    <div className={joinStyles.joinPage}>
      <div className={joinStyles.joinPageContainer}>
        <div className={joinStyles.joinPageHeading}>
          <h2><span>Join</span> For Monetization</h2>
          <p>Want to monetize your voice? we can help.</p>
        </div>
        <div className={joinStyles.mainForm}>
          <div className={joinStyles.joinPageImg}>
            <Image src="/img/join/join.png" width={570} height={774} alt="" />
          </div>
          <div className={joinStyles.joinPageForm}>
            <form>
              <div className={joinStyles.formGroup}>
                <label htmlFor="name">Artist’s Name</label>
                <input type="text" name="name" id="name" placeholder="Artist’s Name" />
              </div>
              <div className={joinStyles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" placeholder="Enter your email" />
              </div>
              <div className={joinStyles.formGroup}>
                <label htmlFor="phone">Mobile Number</label>
                <input type="text" name="phone" id="phone" placeholder="Enter your number" />
              </div>
              <div className={joinStyles.formGroup}>
                <label htmlFor="facebook-link">Artist's Facebook Link</label>
                <input type="text" name="facebook-link" id="facebook-link" placeholder="Enter your facebook link" />
              </div>
              <div className={joinStyles.formGroup}>
                <label htmlFor="message">Why do you join with us?</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <div className={joinStyles.formGroup}>
                <div className={joinStyles.formGroupBtn}>
                  <button className={joinStyles.btnReset} type="button">Reset</button>
                  <button className={joinStyles.btnSubmit} type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}