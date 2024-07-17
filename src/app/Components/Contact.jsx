import { useForm } from "../hooks/useForm";

const initialForm = {
  email: "",
  subject: "",
  message: ""
};

const validationsForm = (form) => {
  let errors = {};
  let regexSubject = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,40}$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexMessage = /^.{1,255}$/;

  if (!form.email.trim()) {
    errors.email = "**Email is required**";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "Invalid email";
  }
  console.log("form", form)

  if (!form.subject.trim()) {
    errors.subject = "**Subject is required**";
  } else if (!regexSubject.test(form.subject.trim())) {
    errors.subject = "Invalid Subject"; 
  }

  if (!form.message.trim()) {
    errors.message = "**The Message field is required**";
  } else if (!regexMessage.test(form.message.trim())) {
    errors.message = "Must be less than 255 characters";
  }

  return errors;
};

function Contact() {
  const {
    form,
    errors,
    response,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <section className="w-full max-w-3xl flex justify-center" id="contact">
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

        <div className="pl-3 sm:rounded-lg md:flex md:flex-col md:justify-center lg:auto-cols-max">
          <form className="p-6 flex flex-col justify-center" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="name" className="hidden">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="userEmail"
                placeholder="Email"
                className="lg:max-w-[400px] w-100 mt-2 py-3 px-3 rounded-xl bg-input text-third focus:outline-none"
                onChange={handleChange}
                value={form.email}
                onBlur={handleBlur}
                required
              />
              {errors.email && <p className="my-1 text-first">{errors.email}</p>}

            </div>

            <div className="flex flex-col mt-2">
              <label htmlFor="email" className="hidden">
                subject
              </label>
              <input
                type="subject"
                name="subject"
                id="userSubject"
                placeholder="Subject"
                className="lg:max-w-[400px] w-100 mt-2 py-3 px-3 rounded-xl bg-input text-third focus:outline-none"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.subject}
                required
              />
              {errors.subject && <p className="my-1 text-first">{errors.subject}</p>}
            </div>

            <div className="flex flex-col mt-2">
              <label htmlFor="tel" className="hidden">
                Message
              </label>
              <textarea
                type="message"
                name="message"
                id="userMessage"
                placeholder="Leave a message"
                className="lg:max-w-[400px] w-100 xl:max-w-[24rem] mt-2 py-3 px-3 rounded-xl bg-input text-third focus:outline-none"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.message}
                required
              >
              </textarea>
              {errors.message && <p className="my-1 text-first">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="md:w-32 md:mx-auto lg:w-64 xl:w-72 bg-buttons hover:bg-black-500 text-third font-bold py-3 px-6 rounded-lg mt-3"
              value="Submit"
            >
              Submit
            </button>
          </form>
          {/* {response && <Modal/>} */}
        </div>
      </article>
    </section>
  );
}

export default Contact;
