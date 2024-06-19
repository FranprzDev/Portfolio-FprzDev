function Contact() {
  return (
    <section className="w-full max-w-3xl flex justify-center">
      <article className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="pl-3 sm:rounded-lg md:flex md:flex-col md:justify-center lg:auto-cols-max">
          {/* Pate del Contacto */}
          <h2 className="text-4xl text-first underline underline-offset-[7px] font-bold inline-block">
            Contact
          </h2>
          <p className="pt-3 text-third">Feel free to get in touch..</p>

          <div className="flex items-center mt-2 text-third">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-second"
            >
              <path
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div className="ml-2 text-sm">Argentina, Tucumán</div>
          </div>

          <div className="flex items-center mt-2 text-third">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-second"
            >
              <path
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div className="ml-2 text-sm">+54 9 381 541-2480</div>
          </div>
        </div>
        {/* Parte de los inputs */}
        <div className="pl-3 sm:rounded-lg md:flex md:flex-col md:justify-center lg:auto-cols-max">
          <form className="p-6 flex flex-col justify-center">
            <div className="flex flex-col">
              <label htmlFor="name" className="hidden">
                Full Name
              </label>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Full Name"
                className="lg:max-w-[400px] w-100 mt-2 py-3 px-3 rounded-xl bg-input text-third focus:outline-none"
              />
            </div>

            <div className="flex flex-col mt-2">
              <label htmlFor="email" className="hidden">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="lg:max-w-[400px] w-100 mt-2 py-3 px-3 rounded-xl bg-input text-third focus:outline-none"
              />
            </div>

            <div className="flex flex-col mt-2">
              <label htmlFor="tel" className="hidden">
                Number
              </label>
              <input
                type="tel"
                name="tel"
                id="tel"
                placeholder="Telephone Number"
                className="lg:max-w-[400px] w-100 xl:max-w-[24rem] mt-2 py-3 px-3 rounded-xl bg-input text-third focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="md:w-32 md:mx-auto lg:w-64 xl:w-72 bg-submit hover:bg-black-500 text-third font-bold py-3 px-6 rounded-lg mt-3"
            >
              Submit
            </button>
          </form>
        </div>
      </article>
    </section>
  );
}

export default Contact;
