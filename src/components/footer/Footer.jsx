import React from 'react'

export const Footer = () => {
  return (
    <footer className="py-6 mt-10 border">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="text-gray-500 hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Contact Us</a>
          </div>
        </div>
      </footer>
  )
}
