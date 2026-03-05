import AdvancedImg from "../../assets/Advanced.png";
import ZeroFees from "../../assets/zero_fees_us.png";
import CB from "../../assets/CB_LOLP__1_.png";

const GridSection = () => {
  return (
    <div className="w-full bg-white">
      {/* Container with responsive padding */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20">
        {/* First Section - Advanced Trading */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <img
                src={AdvancedImg}
                alt="Advanced trading tools"
                loading="lazy"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none h-auto rounded-2xl md:rounded-[45px] shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-3 sm:gap-4 md:gap-5">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-bold leading-tight">
                Powerful tools, designed for the advanced trader.
              </h2>

              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                Powerful analytical tools with the safety and security of
                Coinbase deliver the ultimate trading experience. Tap into
                sophisticated charting capabilities, real-time order books, and
                deep liquidity across hundreds of markets.
              </p>

              <button
                type="button"
                className="py-3 sm:py-4 md:py-5 px-6 sm:px-8 w-fit rounded-full bg-black text-white font-bold text-sm sm:text-base md:text-lg hover:bg-gray-800 transition-colors shadow-lg"
              >
                Start trading
              </button>
            </div>
          </div>
        </div>

        {/* Second Section - Coinbase One */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-3 sm:gap-4 md:gap-5 order-2 lg:order-1">
              <div className="inline-flex w-fit">
                <p className="py-2 px-4 sm:px-5 border border-gray-400 rounded-2xl text-gray-700 text-xs sm:text-sm md:text-base font-semibold">
                  <span className="mr-2 sm:mr-3">C</span>COINBASE ONE
                </p>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-bold leading-tight">
                Zero trading fees, more rewards.
              </h2>

              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                Get more out of crypto with one membership: zero trading fees,
                boosted rewards, priority support, and more.
              </p>

              <button
                type="button"
                className="py-3 sm:py-4 md:py-5 px-6 sm:px-8 w-fit rounded-full bg-black text-white font-bold text-sm sm:text-base md:text-lg hover:bg-gray-800 transition-colors shadow-lg"
              >
                Claim free trial
              </button>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none bg-gray-100 rounded-2xl md:rounded-[45px] overflow-hidden">
                <img
                  src={ZeroFees}
                  alt="Zero trading fees feature"
                  loading="lazy"
                  className="w-full h-auto object-cover rounded-2xl md:rounded-[45px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Third Section - Base App */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none bg-gray-100 rounded-2xl md:rounded-[45px] overflow-hidden">
                <img
                  src={CB}
                  alt="Base App interface"
                  loading="lazy"
                  className="w-full h-auto object-cover rounded-2xl md:rounded-[45px]"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-3 sm:gap-4 md:gap-5">
              <div className="inline-flex w-fit">
                <p className="py-2 px-4 sm:px-5 border border-gray-400 rounded-2xl text-gray-700 text-xs sm:text-sm md:text-base font-semibold">
                  <span className="mr-2 sm:mr-3">C</span>BASE APP
                </p>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-bold leading-tight">
                Countless ways to earn crypto with the Base App.
              </h2>

              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                An everything app to trade, create, discover, and chat, all in
                one place.
              </p>

              <button
                type="button"
                className="py-3 sm:py-4 md:py-5 px-6 sm:px-8 w-fit rounded-full bg-black text-white font-bold text-sm sm:text-base md:text-lg hover:bg-gray-800 transition-colors shadow-lg"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridSection;
