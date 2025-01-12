import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({target: {name, value}}) => {
    setForm({...form, [name]: value});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
        await emailjs.send(
            'service_mqza8rw',
            'template_eyju736',
            {from_name: form.name, 
                to_name: 'Jonas H@ckkid',
                from_email: form.email,
                to_email: 'ezealijonas@gmail.com',
                message: form.message
            },
            '7sF8yRi6Jv-LkNItU'
            
        )

        setLoading(false);

        alert('Message sent successfully');
        setForm({name: '', email: '', message: ''});
    } catch (error) {
        setLoading(false);
        console.log(error);
        alert('An error occurred while sending your message');
    }
    
  };



  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center flex-col justify-center">
        <img
          src="/assets/terminal.png"
          alt="terminal-bacground"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container pt-20 pb-10 px-5 sm:px-10">
          <h3 className="head-text text-pink-500 ">Contact player</h3>
          <p className="text-lg text-white-600 mt-3">
            If you have any project or opportunity in mind, feel free to reach
            out to me.</p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col space-y-7"
            >
              <label className="space-y-3">
                <span className="field-label">Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="Jonas H@ckkid"
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="abc@ymail.com"
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">Your message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="field-input"
                  placeholder="Hi' I want to build an e-commerce website..."
                />
              </label>
              <button className="field-btn" type="submit">
                {loading ? "Sending..." : "Send"}
                <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
              </button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
