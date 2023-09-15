import HeroContainer from "./HeroContainer";
import LoginForm from "./LoginForm";
import Nav from "./Nav";

function Home() {
  return (
    <header className='px-24 py-8 font-poppins'>
      <Nav />
      <div className='mt-60 flex justify-between'>
        <HeroContainer />
        <LoginForm />
      </div>
    </header>
  );
}

export default Home;
