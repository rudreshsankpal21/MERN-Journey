const ProfileCard = (props) => {
  return (
    <>
      <div className="m-10 p-4 border-4 w-100 flex justify-center flex-col ">
        <img src={props.profile} alt="Profile image" />
        <h3>
          <b>Name :</b>
          {props.name}
        </h3>
        <h3>
          <b>Age :</b>
          {props.age}
        </h3>
        <h3>
          <b>Bio :</b>
          {props.bio}
        </h3>

        <button className="border-2 p-2 m-4 rounded-3xl bg-red-500 text-white border-black">
          Click me
        </button>
      </div>
    </>
  );
};

export default ProfileCard;
