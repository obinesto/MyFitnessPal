import backgroundVideo from "../assets/6388427-uhd_3840_2160_25fps.mp4";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src={backgroundVideo}
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="relative z-20 flex flex-col gap-4">
        <h2>IT&apos;S TIME TO GET</h2>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          FANTASTICALLY <span className="text-blue-400">FIT</span>
        </h1>
      </div>

      <p className="relative z-20 text-sm md:text-base font-light">
        I hereby acknowledge that I may become{" "}
        <span className="text-blue-400">unbelievably massive</span> and accept
        all risks of becoming the local{" "}
        <span className="text-blue-400">mass monstrosity</span>, afflicted with
        severe body dysmorphia, unable to fit through doors.
      </p>
      <button
        onClick={() => {
          window.location.href = "#generate";
        }}
        className="relative z-20 bg-slate-950 font-semibold py-4 px-6 outline outline-blue-600 rounded-md 
             hover:-translate-y-2 hover:-translate-x-2 hover:shadow-lg hover:shadow-blue-600 
             shadow-blue-600 transition-all duration-300"
        type="button"
      >
        <p>Accept & Begin</p>
      </button>
    </div>
  );
}
