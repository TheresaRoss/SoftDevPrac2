import Button from "@mui/material/Button";
import Link from "next/link";
export default function Home() {
  return (
    <main className=' h-screen w-screen center  '>
      <div
        style={{
          position: "absolute",
          filter: "brightness(53%) ",
          backgroundImage: `url('/park.jpg')`,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      ></div>
      <div className='center flex-col  bg-gradient-to-r via-[rgba(0,0,0,0.5)] from-[rgba(94,255,34,0.2)] to-[rgba(94,255,34,0.2)] bg-opacity-30 border-2 border-[#EEEEEE] rounded-3xl p-10  max-w-[60%]'>
        <h2 className='text-white text-3xl mb-8'>
          Nature&#39; Playground: Join the Ultimate Park Party!
        </h2>
        <p className='mb-10 text-white'>
          Experience the magic of an outdoor extravaganza! Join us for a day of
          fun, music, games, and good vibes at our Park Party. Don&#39;t miss
          out on this unforgettable event in the heart of nature.
        </p>

        <Button
          size='large'
          variant='contained'
          href='/register'
          className='bg-white text-black hover:scale-110 '
        >
          Register Now!
        </Button>
      </div>
    </main>
  );
}
