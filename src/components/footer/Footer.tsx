import React from 'react'

function Footer() {
  const footerYear = new Date().getFullYear()
  return (
    <div className="px-6 xl:px-20 lg:px-14 md:px-8 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
        <p className="text-sm text-center md:text-start">
          Copyright &copy; {footerYear} ajaysinhaorigin.in
        </p>
        <p className="text-sm -order-1 text-center md:text-end md:order-1 ">
          Made with ❤️ by Ajay Sinha{' '}
        </p>
      </div>
    </div>
  )
}

export default Footer
