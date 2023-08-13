import Form from "../component/form";

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
      <div
        className='center p-10 flex-col
       rounded-3xl max-w-[60%] bg-gradient-to-r via-[rgba(0,0,0,0.5)] from-[rgba(94,255,34,0.2)] to-[rgba(94,255,34,0.2)] '
      >
        <h1 className='center text-3xl text-white mb-10'>Register Form</h1>

        <Form />
      </div>
    </main>
  );
}
