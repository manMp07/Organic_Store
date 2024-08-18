import React from 'react';

function Header() {
    return (
        <>
            {/* NavBar Starts Here */}
            <nav>
                <div class="flex justify-between m-4 mx-8 gap-10">
                    {/* Left Portion */}
                    <header class="flex gap-10 items-center">
                        {/* PageLgo */}
                        <div>
                            <a href="#logo">
                                <img src="../Images/organic-store-logo.svg" alt="OrganicStore-Logo" class="h-16 min-[910px]:h-20" />
                            </a>
                        </div>
            
                        {/* NavList */}
                        <div class="hidden min-[910px]:flex text-lg gap-10 text-[#333333]">
                            <a href="../Shop/shop.html" class="hover:text-[#8bc34a] hover:transition-all hover:ease-linear">Everything</a>
                            <a href="#Groceries" class="hover:text-[#8bc34a] hover:transition-all hover:ease-linear">Groceries</a>
                            <a href="#Juice" class="hover:text-[#8bc34a] hover:transition-all hover:ease-linear">Juice</a>
                        </div>
                    </header>
            
                    {/* Right Portion */}
                    <div class="flex gap-8 items-center">
                        {/* About Contact */}
                        <div class="hidden min-[910px]:flex text-lg gap-10 text-[#333333]">
                            <a href="#About" class="hover:text-[#8bc34a] hover:transition-all hover:ease-linear">About</a>
                            <a href="#Contact" class="hover:text-[#8bc34a] hover:transition-all hover:ease-linear">Contact</a>
                        </div>
            
                        {/* Cart */}
                        <div class="pt-1">
                            <a href="#cart" class="flex gap-4 text-[#8bc34a]">
                                <span class="font-bold">&#8377;0.00</span>
                                <div class="relative">
                                    <img src="../Images/shopping-basket_2.png" alt="Basket-icon" class="h-5 w-5" />
                                    <div class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                                        <span class="flex items-center justify-center h-5 w-5 text-xs font-bold border-none rounded-full bg-[#8bc34a] text-black">
                                            0
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
            
                        {/* Menu button */}
                        <div class="min-[910px]:hidden">
                            <button class="h-10 w-10 pl-2 bg-[#8bc34a]">
                                <a href="#menu">
                                    <img src="../Images/menu.png" alt="menu-icon" />
                                </a>
                            </button>
                        </div>
                        
                        {/* Account button */}
                        <div class="hidden min-[910px]:block">
                            <button class="h-6 w-6 pt-2">
                                <a href="#acccount">
                                    <img src="../Images/account-icon.png" alt="account-icon" />
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;