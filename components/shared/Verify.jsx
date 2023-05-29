import Image from 'next/image';
import v from '../../styles/verify.module.css';
import Link from 'next/link';

const Verify = () => {
  return (
    <div className={v.verify}>
      <div className={v.verifyContainer}>
        <div className={v.imgBox}>
          <Image src="/img/logoBig.png" width={80} height={80} alt="" />
        </div>
        <h2 className={v.title}>Verify your identity</h2>
        <p className={v.tag}>Thank you for signing up. Please verify your email address by clicking the following link</p>
        <button className={v.action}>confirm your email</button>
        <p className={v.haveIssue}>Have any issues? Visit <Link href='#'> contact us</Link></p>
        <p className={v.contact}>If you got this mail as spam then click on "looks safe" or "Not spam". Hopefully, the button will work, If the button not working then mail your email address at <Link href="mailto:web@anydemo.com">web@anydemo.com</Link> or Call at <Link href='tel:0244545254245'></Link>, <Link href='tel:024554532354'>024554532354</Link>
        </p>
      </div>
    </div>
  )
}

export default Verify