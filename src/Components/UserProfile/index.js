import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {imageUrl, name, role} = userDetails

  return (
    <li className="user-card-container">
      <img className="avatar" src={imageUrl} alt="Avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
}

export default UserProfile
