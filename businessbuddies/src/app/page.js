import Image from "next/image";
import Link from "next/link";

// import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {



  return (

    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Business Buddies</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

          </nav>
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">How it works?
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
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
    </div>


  );
}
