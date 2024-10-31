export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <h2>IT&apos;S TIME TO GET</h2>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          FANTASTICALLY <span className="text-blue-400">FIT</span>
        </h1>
      </div>

      <p className="text-sm md:text-base font-light">
        I hereby acknowledge that I may become{" "}
        <span className="text-blue-400">unbelievably massivse</span> and accept
        all risks of becoming the local{" "}
        <span className="text-blue-400">mass montrosity</span>, afflicted with
        severe body dismorphia, unable to fit through doors.
      </p>
      <button
        onClick={() => {
          window.location.href = "#generate";
        }}
        className="bg-slate-950 font-semibold py-4 px-6 outline outline-blue-600 rounded-md 
             hover:-translate-y-2 hover:-translate-x-2 hover:shadow-lg hover:shadow-blue-600 
             shadow-blue-600 transition-all duration-300"
        type="button"
      >
        <p>Accept & Begin</p>
      </button>
    </div>
  );
}
