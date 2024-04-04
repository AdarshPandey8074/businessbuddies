'use client'
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { auth, db } from '../../firebase/config.js';
import { useRouter } from 'next/navigation'
import { doc, getDoc, collection, query, where } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
const dashboard = () => {


    // const interestRef = collection(db, "user");
    // const q = query(interestRef, where("interest", "==", true));

    // Create a query against the collection.
    // const q = query(citiesRef, where("interest", "==", maininterest));

    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const [matchingUsers, setMatchingUsers] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [maininterest, setmainInterest] = useState('');
    const [correctmatch, setCorrectmatch] = useState([]);
    const [acn, setacn] = useState('');

    const [matchinglen, setMatchinglen] = useState('');

    const router = useRouter();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            router.push('/'); // Redirect to home page after sign-out
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // Check for logged-in user
        onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) router.push('/'); // Redirect if not logged in
            setUser(currentUser);
        });
    }, []);

    useEffect(() => {
        console.log(user);
        // Fetch user data if a user is logged in
        if (user) {
            const fetchUserData = async () => {
                const docRef = doc(db, 'user', user.uid);
                const docSnap = await getDoc(docRef);
                setUserData(docSnap.data());
                console.log("user data saved in" + userData);
            }
            fetchUserData();
        }
    }, [user]);

    useEffect(() => {
        // ... (Existing useEffect for fetching user data) ...
        const fetchMatchingUsers = async () => {
            console.log(userData);
            if (user) {
                setDisplayName(userData.name || 'User'); // Set display name if available
                setacn(userData.acn || 'User'); // Set display name if available
                setmainInterest(userData.interest || 'User');
                console.log("interest is" + userData.interest);

                // fetching
                const q = query(collection(db, 'user'), where('interest', '==', userData.interest));
                const querySnapshot = await getDocs(q);
                const matching = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                console.log("interest" + userData.interest);
                // Exclude the current user
                setMatchingUsers(matching.filter(user => user.id !== user.uid));
                console.log("matching users is" + matching);
                const matcheduser = (matching.filter(user => user.id !== user.uid)).entries;
                console.log("matching users are" + matcheduser);
                // setMatchingUsers(matcheduser);
                // console.log("matching users are" + matchingUsers);
                // console.log("matching users are" + maininterest);
                setMatchinglen((matching.filter(user => user.id !== user.uid)).length);

                // new try
                const matchedUsersInfo = matching.filter(user => user.id !== user.uid).map(user => ({
                    name: user.name,
                    number: user.number,
                    designation: user.designation,
                    whatsapp: user.whatsappno,
                }));

                console.log(matchedUsersInfo);
                setCorrectmatch(matchedUsersInfo);

            }

            // if (userData?.interest) {

            //     const q = query(collection(db, 'user'), where('interest', '==', maininterest));
            //     const querySnapshot = await getDocs(q);
            //     const matching = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            //     console.log("interest" + userData.interest);
            //     // Exclude the current user
            //     setMatchingUsers(matching.filter(user => user.id !== user.uid));
            //     console.log(matchingUsers.length);
            //     console.log("matching users are" + (matching.filter(user => user.id !== user.uid)));
            //     // console.log("matching users are" + matchingUsers);
            //     // console.log("matching users are" + maininterest);
            //     setMatchinglen((matching.filter(user => user.id !== user.uid)).length);




            // }
        };

        fetchMatchingUsers();
    }, [user, userData]);

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
                    <button onClick={handleSignOut} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Signout
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24" >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>

                </div>
            </header>


            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                        <div className="w-full sm:p-4 px-4 mb-6">
                            {displayName && (
                                <h2 className='title-font font-medium text-xl mb-2 text-gray-900'>Hi, {displayName}!</h2>
                            )}
                            <h1 className="title-font font-medium text-xl mb-2 text-gray-900">Welcome to your Business Buddies Dashboard!</h1>

                            <div className="leading-relaxed">Here's where the magic happens - your central hub for all things networking and collaboration. Whether you're looking to connect with fellow entrepreneurs, explore new opportunities, or stay updated on industry trends, your dashboard has you covered.</div>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-1xl text-gray-900">{matchinglen} users with similar interests</h2>
                        </div>

                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">{acn}</h2>
                            <p className="leading-relaxed">Aadhar Card Number</p>
                        </div>

                        <div className="container mx-auto p-4">
                            <h2 className="text-2xl font-bold mb-4">Matching Users:</h2>
                            <ul className="list-disc list-inside"> {/* Tailwind classes for list */}


                                {correctmatch.map((user, index) => (
                                    <li key={index} className="mb-2">
                                        <span className="font-semibold">Name:</span> {user.name} <br />
                                        <span className="font-semibold">Designation:</span> {user.designation} <br></br>
                                        <span className="font-semibold">Chat on Whatsapp <button
                                            type="button"
                                            data-twe-ripple-init
                                            data-twe-ripple-color="light"
                                            class="mb-2 inline-block rounded bg-[#128c7e] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                                            <span class="[&>svg]:h-4 [&>svg]:w-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 448 512">

                                                    <path
                                                        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                                </svg>
                                            </span>
                                        </button></span> {user.whatsappno}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <br></br>
                        {/* <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">{matchingUsers}</h2>
                            <p className="leading-relaxed">Matching users</p>
                        </div> */}

                    </div>
                    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                        <img className="object-cover object-center w-full h-full" src="https://files.catbox.moe/09x7pb.jpeg" alt="stats" />
                    </div>
                </div>
            </section>



        </div>

    )
}

export default dashboard;

