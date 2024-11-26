import Image from "next/image";

export default function Home() {
  return (
      <div className="main-container">
      <div className="myinfo">
        <div className="container">
        <h1 className="text">Hello!</h1>
       <h1 className="text">I am Warda</h1>
       <p className="text">A Passionate Web Developer</p>
       </div>
       <br />
       <br />
        <p>Nowaday i am learning next.js and artificial intellegence</p>
      </div>
      <div className="image-container">
        <Image
        src="/profile.jpg" alt="profile picture" width={400} height={400} className="image-container"></Image>        
    </div>
    </div>
  );
}