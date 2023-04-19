import '../style/MainLeft.css'

const MainLeft = () => {
  return (
    <div className="mainleft">
      <h1>Quality apperal without the price tag</h1>
      <p className="subhead">
        No need to spend $xxx on apparel just for the name's sake. Our premium
        apparel is made from the same stuff.
      </p>
      <div className="cta-btns">
        <a href="#" className="primary-cta">
          Browse our collestion
        </a>
        <a href="#" className="secondary-cta">
          <span>Spring '23 Collection </span>
          <svg viewBox="0 0 19 9" fill="none">
            <path
              d="M18.3536 4.85355C18.5488 4.65829 18.5488 4.34171 18.3536 4.14645L15.1716 0.964466C14.9763 0.769204 14.6597 0.769204 14.4645 0.964466C14.2692 1.15973 14.2692 1.47631 14.4645 1.67157L17.2929 4.5L14.4645 7.32843C14.2692 7.52369 14.2692 7.84027 14.4645 8.03553C14.6597 8.2308 14.9763 8.2308 15.1716 8.03553L18.3536 4.85355ZM0 5H18V4H0V5Z"
              fill="black"
            />
          </svg>
        </a>
      </div>
      {/* <div className="news">
        <p className="employees">50K</p>
        <p className="details">
          We're thrilled to share that our workforce has grown to overs
          <strong>1000</strong> employees. None of this would have been possible
          without your support and dedication.
        </p>
      </div> */}
    </div>
  )
}
export default MainLeft
