function Nav() {
  return (
    <nav className='flex justify-between items-center'>
      <div>
        <ul className='flex gap-8 items-center'>
          <li>Home</li>
          <li>About</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className='flex gap-4 items-center'>
        <p className='text-[#4461f2] font-semibold'>Sign in</p>
        <p className='text-[#4461f2] font-semibold px-4 py-1 bg-white rounded-3xl shadow-xl'>
          Register
        </p>
      </div>
    </nav>
  );
}

export default Nav;
