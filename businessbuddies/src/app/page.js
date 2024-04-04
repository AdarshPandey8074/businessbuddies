'use client'
import Image from "next/image";
import Link from "next/link";

// import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {


  const scroll = () => {
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };
  const scrollbtm = () => {
    window.scrollTo({ top: 9000, behavior: "smooth" });
  };




  return (

    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Business Bingo</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

          </nav>
          <button onClick={scroll} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">How it works?

          </button>
        </div>
      </header>


      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            {/* <image className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"></image> */}
            <img className="object-cover object-center rounded" alt="hero" src="https://files.catbox.moe/09x7pb.jpeg"></img>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">🚀 Welcome to Business Buddies! 🚀 Unlock the Power of Connection!
            </h1>
            <p className="mb-8 leading-relaxed">🤝 Connect with Ease:
              Say goodbye to awkward introductions! Our intuitive app makes it a breeze to find and connect with professionals who share your passions and goals.
              <br></br>
              🎯 Targeted Networking:
              No more wasting time at generic networking events. With Business Buddies, you can pinpoint exactly who you want to connect with based on industry, interests, and expertise.
              <br></br>

              📈 Grow Your Circle:
              Expand your network exponentially! Whether you're a seasoned entrepreneur or just starting out, there's always room to grow. Business Buddies provides the platform to make meaningful connections that last a lifetime.
              <br></br>

              💡 Spark Creativity:
              Surround yourself with innovative thinkers and watch your ideas flourish! With Business Buddies, you'll tap into a community brimming with inspiration and collaboration opportunities.</p>
            <br></br>

            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <Link
                  href="/signup"
                  className="text-lg font-normal text-white-500 hover:text-gray-900"
                >
                  SignUp
                </Link></button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"><Link
                href="/signin"
                className="text-lg font-normal text-gray-500 hover:text-gray-900"
              >
                SignIn
              </Link></button>
            </div>
          </div>
        </div>
      </section>


      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">How we work?</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">At Business Buddies, we believe in simplicity, efficiency, and effectiveness when it comes to connecting like-minded individuals. Here's how we work:</p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Create Your Profile</h2>
                <p className="leading-relaxed text-base">Get started by creating your personalized profile. Highlight your skills, expertise, interests, and goals to ensure you're matched with the right people.</p>

              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Discover Potential Connections</h2>
                <p className="leading-relaxed text-base">Our intelligent algorithm analyzes your profile and preferences to suggest potential connections tailored to your needs. Browse through profiles, explore common interests, and find individuals who align with your objectives.</p>

              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Grow Your Network</h2>
                <p className="leading-relaxed text-base">Keep nurturing your connections and watch your network flourish. Whether you're seeking advice, collaboration opportunities, or simply looking to expand your circle, Business Buddies provides the platform to help you grow professionally and personally.</p>

              </div>
            </div>
          </div>

        </div>
      </section>


    </div>


  );
}
