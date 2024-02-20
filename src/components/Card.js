import React from "react";

const UserProfile = ({ data }) => {
  return (
    <div className="user-profile">
      <h2>{data.name} Profile</h2>
      <div>
        <img src={data.picture} alt="Profile" />
      </div>
      <div>
        <p>Name: {data.name}</p>
        <p>Nickname: {data.nickname}</p>
        <p>Email: {data.email}</p>
        <p>Email Verified: {data.email_verified ? "Yes" : "No"}</p>
        <p>Family Name: {data.family_name}</p>
      </div>
    </div>
  );
};

export default UserProfile;
