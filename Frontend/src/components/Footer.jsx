import React from 'react';

function Footer() {
    return (
        <>
            {/* Footer Section Starts */}
            <footer className="bg-[#001524] text-white flex flex-col px-5 py-16 2xl:px-40 2xl:gap-9">
                {/* Top */}
                <div className="flex flex-col gap-16 min-[545px]:grid min-[545px]:grid-rows-1 min-[545px]:grid-cols-3 min-[545px]:gap-5 min-[920px]:grid-cols-4 2xl:gap-0">
                    {/* 1st block */}
                    <div className="flex flex-col gap-10 items-center min-[545px]:items-start min-[920px]:col-span-2">
                        <div>
                            <img src="../Images/organic-store-white-logo.png" className="h-20" />
                        </div>
                        <div className="text-[#ffffffa8] text-center font-bold italic px-3 min-[545px]:text-left min-[920px]:pr-44">
                            <p>Maecenas mi justo, interdum at consectetur vel, tristique et arcu. Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse quis faucibus urna. Suspendisse pellentesque.</p>
                        </div>
                    </div>

                    {/* 2nd Block */}
                    <div className="flex flex-col items-center text-center gap-10 min-[920px]:items-start min-[920px]:text-left">
                        <div className="flex flex-col gap-3 min-[920px]:gap-5">
                            <div className="text-white text-2xl font-semibold">
                                <h2>Quick Links</h2>
                            </div>

                            <ul className="text-[#FFFFFFA8]">
                                <li><a href="#" className="hover:text-white transition-all duration-300">About</a></li>
                                <li><a href="#" className="hover:text-white transition-all duration-300">Cart</a></li>
                                <li><a href="#" className="hover:text-white transition-all duration-300">Checkout</a></li>
                                <li><a href="#" className="hover:text-white transition-all duration-300">Contact</a></li>
                                <li><a href="#" className="hover:text-white transition-all duration-300">Home</a></li>
                                <li><a href="#" className="hover:text-white transition-all duration-300">My Account</a></li>
                                <li><a href="#" className="hover:text-white transition-all duration-300">Shop</a></li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-3 min-[920px]:gap-5">
                            <div className="text-white text-2xl font-semibold">
                                <h2>Site Links</h2>
                            </div>

                            <ul className="text-[#FFFFFFA8]">
                                <li><a href="#" className="hover:text-white transition-all duration-300">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-all duration-300">Shopping Details</a></li>
                                <li><a href="#" className="hover:text-white transition-all duration-300">Offers Coupons</a></li>
                                <li><a href="#" className="hover:text-white transition-all duration-300">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* 3rd Block */}
                    <div className="flex flex-col gap-10 items-center text-center min-[545px]:items-start  min-[545px]:text-left">
                        <div className="flex flex-col gap-5">
                            <div className="text-white text-xl font-semibold min-[920px]:text-2xl">
                                <h2>Download Our Mobile App</h2>
                            </div>
                            <div className="text-[#ffffffa8]">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam gravida sollicitudin. Praesent porta enim mi, non tincidunt libero interdum sit amet.</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div className="text-white text-xl font-semibold min-[920px]:text-2xl">
                                <h2>Quick Links</h2>
                            </div>
                            <ul className="text-[#8bc34a]">
                                <li><a href="#" className="hover:text-[#628a33] transition-all duration-300">Know More About Us</a></li>
                                <li><a href="#" className="hover:text-[#628a33] transition-all duration-300">Visit Store</a></li>
                                <li><a href="#" className="hover:text-[#628a33] transition-all duration-300">Let's Connect</a></li>
                                <li><a href="#" className="hover:text-[#628a33] transition-all duration-300">Locate Stores</a></li>
                            </ul>
                        </div>

                        {/* PlayStore & Appstore */}
                        <div className="flex gap-5">
                            <div>
                                <img src="../Images/play_store.png" alt="play_store" />
                            </div>
                            <div>
                                <img src="../Images/app_store.png" alt="app_store" />
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="m-10 border-none h-[0.1px] bg-[#ffffff1e]" />

                {/* Bottom */}
                <div className="text-center flex flex-col items-center justify-center gap-10 min-[545px]:flex-row min-[545px]:justify-between min-[545px]:mx-5">
                    <div className="text-[#ffffffa8]">
                        <p>Copyright © 2024 | Organic Store</p>
                    </div>

                    <div className="flex gap-5">
                        <a href="#"><img src="../Images/instagram.svg" className="h-5" /></a>
                        <a href="#"><img src="../Images/twitter.svg" className="h-5" /></a>
                        <a href="#"><img src="../Images/linkedin.svg" className="h-5" /></a>
                        <a href="#"><img src="../Images/github.svg" className="h-5" /></a>
                    </div>
                </div>
            </footer>
            {/* Footer Section Ends */}
            
        </>
    )
}

export default Footer