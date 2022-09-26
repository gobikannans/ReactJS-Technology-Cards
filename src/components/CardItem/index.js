import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} card-container`}>
      <div className="card-description">
        <h1 className="card-heading">{title}</h1>
        <p className="card-paragraph">{description}</p>
      </div>
      <img src={imgUrl} alt={title} className="img" />
    </li>
  )
}

export default CardItem
