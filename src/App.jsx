import { useState, useEffect, useRef } from 'react'


function App() {

  const [email, setEmail] = useState("");
  const [buttonName, setButtonName] = useState("Get download link")
  const [downloadLink, setDownloadLink] = useState("");
  const intervalRef = useRef(null);
  const [isProcessing, setIsProcessing] = useState(null)

  useEffect(() => {
    const targetTime = new Date('2025-02-22T16:15:00+05:30');
    const now = new Date();
    const timeDifference = targetTime - now;

    if (timeDifference > 0) {
      setIsProcessing(true);
      const timer = setTimeout(() => {
        setIsProcessing(false);
      }, timeDifference);

      return () => clearTimeout(timer);
    } else {
      setIsProcessing(false);
    }
  }, []);

  const handleConvert = () => {
    const trimmedEmail = email.trim().toLowerCase();
    const convertedEmail = trimmedEmail.replace(/[^a-z0-9]/g, "_");

    let countdown = 3;
    setButtonName(`Link in ${countdown}...`);

    intervalRef.current = setInterval(() => {
      countdown -= 1;
      if (countdown > 0) {
        setButtonName(`Link in ${countdown}...`);
      } else {
        clearInterval(intervalRef.current);
        setButtonName("Link generated");
        setDownloadLink(convertedEmail);
      }
    }, 1000);
  };

  useEffect(() => {
    // Reset button and clear countdown when email changes
    setButtonName('Generate Link');
    setDownloadLink('');
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [email]);


  return (
    <>
      <div id="__next">
        <main className="__className_286e48">
          <div className="">
            <nav>
              <div className="bg-[#1B252F] relative z-10 m-auto ">
                <div
                  className="flex align-center items-center justify-between md:max-w-[1440px] m-auto md:px-24 px-6 m-auto px-10 lg:py-6 py-0 ">
                  <div id="logo"><a href="#"><img alt="synergy" title="synergy" loading="lazy" width="200"
                    height="400" decoding="async" data-nimg="1" className="m-auto" style={{ color: "transparent" }}
                    src="/images/logo.png" /></a>
                  </div>
                  <div className="hidden lg:flex justify-center items-center   ">
                    <div className="  lg:w-[100%] w-[90%] m-auto">
                      <div className="sm:mb-0 mega-menu ">
                        <div className=" container mx-auto w-full lg:mt-0 mt-3 bg-[#1B252F] py-2">
                          <div className="flex justify-center items-center gap-10 ">
                            <div className="lg:block hidden">
                              <p
                                className=" group transition-all duration-300 ease-in-out cursor-pointer text-[#1E1E1E] hover:text-black text-[16px] font-normal">
                                <a href="#downcert" className="bg-left-bottom bg-gradient-to-r from-[#134364] to-[#134364] bg-[length:0%_2px] bg-mb-10 bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-white 
                                          hover:text-[#F48632] font-medium
                                          ">Download Certificate</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <hr></hr>
            <div className="md:max-w-[1440px] m-auto md:px-24 px-6 py-10">
              <div className="lg:w-[100%]">
                <p className="text-2xl font-semibold text-[#35A99E]">Thank you for attending ! </p>
                <p className="font-light lg:w-[90%] text-lg pt-2 leading-8">Thank you for attending Synergy’s <span
                  className="text-[#DD6CA8] font-semibold">Digi Pro’25 </span>! We appreciate your participation in
                  this exciting event that merged digital innovation with hands-on learning. We hope you gained
                  valuable insights into digital marketing and <span className="text-[#DD6CA8] font-semibold">Generative
                    AI</span> to stay ahead in today’s competitive world.
                </p>
                <div id='downcert' className="grid lg:grid-cols-2 grid-cols-1 gap-20 mt-10">
                  {isProcessing ? (
                    <div className="bg-[#1A3F59] lg:w-full px-6 py-9">
                      <h2 className="text-[30px] text-center text-white font-medium">We are almost there...</h2>
                      <p className="text-white mt-4 text-center">We are busy preparing your certificate. Please wait!<br></br>
                      
                      Watch this video to learn more about Digital Marketing in 2025!<br></br>
                      </p>
                      <video width="75%" style={{ display: 'block', margin: '0 auto' }} controls autoPlay loop muted>
                        <source src="/images/digipro.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>


                    </div>
                  ) : (
                    <div className="bg-[#1A3F59] lg:w-full px-6 py-9">
                      <h2 className="text-[30px] text-center text-white font-medium">Download Certificate</h2>
                      <div className="mt-4">
                        <p className="text-white mb-2">Registered Email ID</p>
                        <input
                          type="email"
                          className="text-black block h-10 px-2 border border-theme-gray-100 bg-white shadow-sm focus:outline-none focus:ring-theme-red focus:border-theme-red sm:text-sm w-full"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your registered email id here"
                        />
                      </div>
                      <button
                        onClick={handleConvert}
                        type="button"
                        className="bg-[#F58634] text-white font-light text-lg mt-6 block py-2 w-3/4 mx-auto flex items-center justify-center gap-3"
                      >
                        <span>{buttonName}</span>
                      </button>
                      {downloadLink && (
                        <p className="text-center mt-4 text-white block w-full">
                          <a className="text-[#F58634]" href={`/cert/dipro/01/${downloadLink}.pdf`}>
                            <span>Click here to download</span>
                          </a>
                        </p>
                      )}
                      <p className="text-center mt-4 text-white block w-full">
                        <a href="#" className="text-white hover:text-green-500 no-underline">
                          <span>or click here to request certificate</span>
                        </a>
                      </p>
                    </div>
                  )}
                  <div className="">
                    <h2 className="text-2xl font-semibold text-[#35A99E]">Event Highlights</h2>
                    <div className="flex gap-4 mt-5 items-center"><img alt="image" loading="lazy" width="80" height="86"
                      decoding="async" data-nimg="1" style={{ color: "transparent" }}
                      src="https://synergysbs.com/assets/images/digipro/icons/01.png" />
                      <p className="text-lg font-semibold">Expert Webinars<span
                        className="text-md block !font-light">Industry leaders and digital marketing professionals
                        shared valuable insights, helping attendees stay ahead in the field.</span></p>
                    </div>
                    <div className="flex gap-4 mt-6 items-center"><img alt="image" loading="lazy" width="80" height="86"
                      decoding="async" data-nimg="1" style={{ color: "transparent" }}
                      src="https://synergysbs.com/assets/images/digipro/icons/02.png" />
                      <p className="text-lg font-semibold">Interactive Workshops<span
                        className="text-md block !font-thin">Participants explored the latest strategies and AI
                        tools through hands-on sessions, enhancing their digital expertise.</span></p>
                    </div>
                    <div className="flex gap-4 mt-6 items-center"><img alt="image" loading="lazy" width="80" height="86"
                      decoding="async" data-nimg="1" style={{ color: "transparent" }}
                      src="https://synergysbs.com/assets/images/digipro/icons/03.png" />
                      <p className="text-lg font-semibold">Exciting Contests<span
                        className="text-md block !font-thin">Enthusiastic competitors put their skills to the test,
                        engaged with peers, and took home exclusive rewards.</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-auto"><a href="#register"><img alt="Dream Quest 2025" title="Dream Quest 2025" loading="lazy"
              width="1920" height="477" decoding="async" data-nimg="1" className="md:block hidden"
              style={{ color: "transparent" }} src="/images/banner.jpg" /></a>
              <div
                className="bg-[url(/images/launchbg.png)] no-repeat bg-cover bg-center; pt-10 pb-16 mt-5 relative">
                <div className="md:max-w-[1440px] m-auto md:px-24 px-6"><img alt="launch" title="launch" loading="lazy"
                  width="200" height="200" decoding="async" data-nimg="1"
                  className="m-auto absolute top-0 left-0 lg:w-[150px] w-[80px]" style={{ color: "transparent" }}
                  src="/images/tprib.png" /><img alt="launch" title="launch"
                    loading="lazy" width="350" height="200" decoding="async" data-nimg="1" className="m-auto"
                    style={{ color: "transparent" }} src="/images/launch-text.png" />

                  <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
                    <div className="border-2 border-[#39C1CD] p-5 relative bg-white lg:mt-24 mt-16"><img alt="launch"
                      title="launch" loading="lazy" width="100" height="400" decoding="async" data-nimg="1"
                      className="relative mt-[-70px] m-auto block" style={{ color: "transparent" }}
                      src="/images/discount.png" />
                      <p className="text-[#134364] text-xl text-center font-semibold mt-3">Inaugural Offer</p>
                      <p className="text-black text-md lg:w-[90%] m-auto leading-6 text-center mt-2">Be an early bird and save
                        big! Enrol in the Expert Certificate in Digital Marketing with GenAI and enjoy an
                        exclusive 20% off.</p>
                    </div>
                    <div className="border-2 border-[#39C1CD] p-5 relative bg-white lg:mt-24 mt-10"><img alt="launch"
                      title="launch" loading="lazy" width="100" height="400" decoding="async" data-nimg="1"
                      className="relative mt-[-70px] m-auto block" style={{ color: "transparent" }}
                      src="/images/certificate.png" />
                      <p className="text-[#134364] text-xl text-center font-semibold mt-3">Complimentary Google
                        Certification</p>
                      <p className="text-black text-md lg:w-[90%] m-auto leading-6 text-center mt-2">Boost your credentials and
                        stand out! Receive a Google Certification absolutely free when you join the program.</p>
                    </div>
                    <div className="border-2 border-[#39C1CD] p-5 relative bg-white lg:mt-24 mt-10"><img alt="launch"
                      title="launch" loading="lazy" width="100" height="400" decoding="async" data-nimg="1"
                      className="relative mt-[-70px] m-auto block" style={{ color: "transparent" }}
                      src="/images/offer.png" />
                      <p className="text-[#134364] text-xl text-center font-semibold mt-3">Limited-Time Offer</p>
                      <p className="text-black text-md lg:w-[70%] m-auto leading-6 text-center mt-2">Register now to unlock these
                        exciting benefits!</p>
                    </div><img alt="launch" title="launch" loading="lazy" width="200" height="200" decoding="async"
                      data-nimg="1" className="m-auto absolute bottom-0 right-0 lg:w-[150px] w-[80px]"
                      style={{ color: "transparent" }} src="/images/btrib.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1B252F] py-5">
              <div
                className="md:flex justify-between py-3 text-white text-[12px] font-medium divide-x md:max-w-[1440px] m-auto md:px-24 px-6 m-auto px-10">
                <footer className="text-sm md:flex gap-5 lg:divide-x divide-[#557798] lg:space-x-5 justify-between">
                  <div className="">
                    <div className="flex flex-col space-y-2 font-normal">
                      <div className="text-lg text-theme-red mb-[2px] text-white font-medium">For enquiries & supports
                      </div>
                      <p className="text-white text-md font-normal">Synergy School for Business Skills <br></br>3rd Floor, Square 9 Mall,<br />Near New Bus
                        Stand<br />Kasaragod - 671 121, <br />Kerala, India.</p>
                    </div>
                  </div>
                  <div className="lg:mt-0 mt-6 lg:pl-10">
                    <div className="flex flex-col space-y-3 font-light ">
                      <div className="text-lg text-theme-red mb-[2px] text-white font-medium">Get in touch</div>
                      <a href="mailto:info@caddclub.com"
                        className="bg-[#F58634] text-white font-light text-center p-1 text-lg mt-10 block mb-10 flex items-center gap-3 justify-center"><img
                          alt="" title="" loading="lazy" width="18" height="5" decoding="async" data-nimg="1"
                          style={{ color: "transparent" }} src="/images/mail.png" />
                        info@caddclub.com</a>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
