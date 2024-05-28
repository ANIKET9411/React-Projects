import Signinwtihpassword from "../Signinwithpassword";

function Home() {
  return (
    <div className="flex">
      <div className="w-6/12 h-screen">
        <img
          src="https://wallpapercave.com/wp/DEUORtJ.jpg"
          alt=""
          width="100%"
          className="h-screen"
        />
      </div>
      <div className="w-6/12 p-40">
        <Signinwtihpassword />
      </div>
    </div>
  );
}
export default Home;
