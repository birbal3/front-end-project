

const ContectUs = () => {
  return (
    <>
    <section className="bg-gradient-to-r from-yellow-500 to-blue-900 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold uppercase mb-2">1% of the industry</p>
        <h2 className="text-3xl font-bold mb-6">Welcome to your new digital reality. Now.</h2>
        <div className="flex justify-center items-center mb-6">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-2/3 md:w-1/2 px-4 py-2 rounded-l-md text-gray-900"
          />
          <button className="bg-[#ffa229] hover:bg-[#ff9029] px-6 py-2 rounded-r-md font-semibold">
            Submit
          </button>
        </div>
        <div className="flex justify-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <span className="text-green-400"> <img src="/static/Pasted Graphic 48.png" alt="Star" className="w-4 h-4" />  </span>
            <p>Instant results</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-400"><img src="/static/Pasted Graphic 48.png" alt="Star" className="w-4 h-4" /></span>
            <p>User-friendly interface</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-400"><img src="/static/Pasted Graphic 48.png" alt="Star" className="w-4 h-4" /></span>
            <p>Personalized customization</p>
          </div>
        </div>
      </div>
    </section>
        <section className="flex flex-col justify-between p-10">
        <div className="flex justify-evenly items-center flex-wrap p-5">
          <img
            src="static/coinbase.png"
            alt="Coinbase"
            className="h-10 pl-2"
          />
          <img
            src="static/spotify.png"
            alt="Spotify"
            className="h-10 pl-4"
          />
          
          <img
            src="/static/Pasted Graphic 49.png"
            alt="Coinbase"
            className="h-10 pl-4"
          />
          <img
            src="/static/webflow.png"
            alt="Spotify"
            className="h-10 pl-4"
          />
          
          <img
            src="/static/Pasted Graphic 52.png"
            alt="Coinbase"
            className="h-10 pl-4"
          />
          
          
        </div>
      </section>
    </>
  );
};

export default ContectUs;
