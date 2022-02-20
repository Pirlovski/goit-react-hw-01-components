
export default function Profile({avatar, username, tag, location, followers, views, likes})  {

return (
  <div>

  <div class="profile">
  <div class="description">
    <img className="Avatar"
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <p class="name">{username}</p>
    <p class="tag">{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">{followers}</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">{views}</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">{likes}</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>

</div>)

}
