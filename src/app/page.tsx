
export default function Home() {
  return (
    <main>
      <section
        className="h-screen bg-cyan-900"
      >
        <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
          <div className="max-w-2xl text-center">
            <h1 className="text-3xl sm:text-5xl capitalize tracking-widest text-white lg:text-7xl">
              Welcome to my assignment
            </h1>

            <p className="mt-6 lg:text-lg text-white">
            I have completed this assignment successfully 
            </p>

            <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
            

              <button className="transform rounded-md bg-cyan-700 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-cyan-300 focus:bg-cyan-300 focus:outline-none sm:mx-2">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
