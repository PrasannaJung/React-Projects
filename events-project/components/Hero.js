import React from "react";
import heroImg from "../public/images/hero.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className='grid grid-cols-2 py-32 justify-items-end max-w-7xl mx-auto'>
      <div>
        <h1 className='font-bold text-5xl'>
          Best Way to find and organize events
        </h1>
        <p className='text-lg mt-8'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          facere dolorum ipsum perferendis quod quaerat labore repudiandae vel
          ut! Blanditiis neque aliquam est consectetur perspiciatis quia, quis,
          minima hic, saepe modi nisi ipsa quisquam provident id. Tenetur
          aliquid expedita veniam minus esse amet distinctio quos pariatur dolor
          ratione labore repudiandae nam provident nostrum sapiente natus
          voluptatibus quam, dolorem quidem aliquam voluptates eligendi quia
          dolorum. Dolorem pariatur tempore enim excepturi fuga adipisci optio
          eum error consectetur? Veniam quae ex libero sed!
        </p>
      </div>
      <div>
        <Image
          width={500}
          src={heroImg}
          layout='fill'
          alt={"Hero Image"}
          objectFit='cover'
        />
      </div>
    </section>
  );
};

export default Hero;
