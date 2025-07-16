import icon from '@/assets/logo.svg';
import svg1 from '@/assets/svg1.svg';
import svg2 from '@/assets/svg2.svg';
import svg3 from '@/assets/svg3.svg';
import svg4 from '@/assets/svg4.svg';
import svg5 from '@/assets/svg5.svg';
import svg6 from '@/assets/svg6.svg';

import Image from 'next/image';

import Form from '@/components/Form';

export default function Home() {
  return <div className='relative flex flex-row items-center justify-center bg-[#121212] h-[120vh]'>

    <Image src={icon} alt="Description" width={280} height={280} className='absolute top-5 left-16' />
    <Image src={svg1} alt="Description" width={280} height={280} className='absolute -top-2/100 right-48/100 size-14/100' />
    <Image src={svg2} alt="Description" width={280} height={280} className='absolute top-18/100 right-26/100 size-25/100' />
    <Image src={svg3} alt="Description" width={280} height={280} className='absolute top-15/100 right-4/100 size-12/100' />
    <Image src={svg5} alt="Description" width={280} height={280} className='absolute bottom-0 left-5/100 size-26/100' />
    <Image src={svg4} alt="Description" width={280} height={280} className='absolute top-60/100 right-41/100  size-18/100' />
    <Image src={svg6} alt="Description" width={280} height={280} className='absolute bottom-8/100 right-3/100 size-18/100' />

    <p className='w-1/2 text-5xl font-bold text-white/80 ml-24 z-10'>Welcome to the world&apos;s <br /> oldest innovation - <span className='text-[#E42982D9]'>FAMILY!</span></p>
    <Form />
  </div>;
}
