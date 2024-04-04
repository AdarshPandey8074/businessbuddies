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
    const [matchingUsers, setMatchingUsers] = useState([]);
    const [displayName, setDisplayName] = useState('');
    const [maininterest, setmainInterest] = useState('');
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
            }

            if (userData?.interest) {

                const q = query(collection(db, 'user'), where('interest', '==', maininterest));
                const querySnapshot = await getDocs(q);
                const matching = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                console.log("interest" + userData.interest);
                // Exclude the current user
                setMatchingUsers(matching.filter(user => user.id !== user.uid));
                console.log(matchingUsers.length);
                console.log("matching users are" + matchingUsers.length);
                // console.log("matching users are" + matchingUsers);
                // console.log("matching users are" + maininterest);
                setMatchinglen(matchingUsers.length);




            }
        };

        fetchMatchingUsers();
    }, [user, userData]);

    return (
        <div>

            <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span class="ml-3 text-xl">Business Bingo</span>
                    </a>
                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

                    </nav>
                    <button onClick={handleSignOut} class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Signout
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24" >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>

                </div>
            </header>


            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                        <div class="w-full sm:p-4 px-4 mb-6">
                            {displayName && (
                                <h2 className='title-font font-medium text-xl mb-2 text-gray-900'>Hi, {displayName}!</h2>
                            )}
                            <h1 class="title-font font-medium text-xl mb-2 text-gray-900">Welcome to your Business Buddies Dashboard!</h1>

                            <div class="leading-relaxed">Here's where the magic happens - your central hub for all things networking and collaboration. Whether you're looking to connect with fellow entrepreneurs, explore new opportunities, or stay updated on industry trends, your dashboard has you covered.</div>
                        </div>
                        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 class="title-font font-medium text-1xl text-gray-900">{matchinglen} users with similar interests</h2>
                        </div>

                        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 class="title-font font-medium text-3xl text-gray-900">{acn}</h2>
                            <p class="leading-relaxed">Aadhar Card Number</p>
                        </div>
                        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 class="title-font font-medium text-3xl text-gray-900">4</h2>
                            <p class="leading-relaxed">Products</p>
                        </div>
                    </div>
                    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                        <img class="object-cover object-center w-full h-full" src="https://files.catbox.moe/09x7pb.jpeg" alt="stats" />
                    </div>
                </div>
            </section>


        </div>

    )
}

export default dashboard;

