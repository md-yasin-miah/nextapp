'use client'
import Link from 'next/link';
import styles from '../../styles/resendEmail.module.css';
import Image from 'next/image';

const ResendEmail = () => {
  const email = localStorage.getItem('email');
  return (
    <div className={styles.resendEmail}>
      <div className={styles.resendEmailContainer}>
        <div className={styles.imgBox}>
          <Image src="/img/logoBig.png" width={80} height={80} alt="" />
        </div>
        <h2 className={styles.title}>verify your email address</h2>
        <p className={styles.tag}>
          <span>
            You’ve entered <strong>{email || "N/A"}</strong> as the email address for your account
          </span>
        </p>
        <p className={styles.note}>
          <span>
            Just click on the link that email to complete your signup.</span>
        </p>
        <p className={styles.note}>
          <span>
            If you don’t see it, you may need to <strong>check your spam</strong> folder.
          </span>
        </p>
        <p className={styles.info}>
          <span>
            If you not got any mail, please clicking button below
          </span>
        </p>
        <button className={styles.action}>Resend Email</button>
        <p className={styles.haveIssue}>
          <span>Any Question? Email us at <Link href='mailto:anydemo@gmail.com'> <strong>anydemo@gmail.com</strong></Link></span>
        </p>
      </div>
    </div>
  )
}

export default ResendEmail