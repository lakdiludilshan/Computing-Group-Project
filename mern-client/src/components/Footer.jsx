import React from 'react'

function Footer() {
  return (
    <div>
      <footer class="bg-gray-900 text-white py-12">
  <div class="container mx-auto flex justify-between items-center">
    <div class="flex-shrink-0">
      <span class="font-bold text-xl">Your Logo</span>
    </div>
    <div class="flex space-x-4">
      <a href="#" class="hover:text-gray-500">Home</a>
      <a href="#" class="hover:text-gray-500">About</a>
      <a href="#" class="hover:text-gray-500">Services</a>
      <a href="#" class="hover:text-gray-500">Contact</a>
    </div>
    <div class="flex-shrink-0">
      <div class="flex space-x-4">
        <a href="#" class="text-white hover:text-gray-500">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {/* <!-- Your social media icon, e.g., Facebook icon --> */}
          </svg>
        </a>
        <a href="#" class="text-white hover:text-gray-500">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {/* <!-- Your social media icon, e.g., Twitter icon --> */}
          </svg>
        </a>
        <a href="#" class="text-white hover:text-gray-500">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {/* <!-- Your social media icon, e.g., Instagram icon --> */}
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
