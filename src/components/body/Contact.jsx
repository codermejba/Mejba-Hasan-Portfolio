import styled from "styled-components";
import SocialIcons from "../../assets/SocialIcons";
import Button from "../../assets/Button";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit =async (data) => {
    console.log(data);
    try {
      await addDoc(collection(db, "ClientsMessage"), data);
      console.log("Message Sent");
      alert("Message Sent Successfully");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
  return (
    <Main id="contact" className="secPadding bg-primary">
      <div className="container px-lg-5">
        {/*  title */}
        <div className="title mb-5">
          <h1 className="aboutTitle fw-600 text-uppercase text-center prevent-select">
            Contact
          </h1>
          <p
            className="text-9 fw-600 lh-base text-nowrap
          text-center position-absolute top-50 start-50 translate-middle text-white"
          >
            Get in Touch
            <span></span>
          </p>
        </div>
        {/*  */}
        <div className="row gy-5">
          <div className="col-md-4 col-xl-3 order-1 order-md-0 text-center text-md-start">
            <h2 className="mb-3 text-5 text-uppercase text-white">Address</h2>
            <p className="text-3 mb-4 text-light">
              Mohammadpur, Dhaka, Bangladesh
            </p>
            <p className="text-3 mb-1 text-light">
              <span className="text-primary text-4 me-2">
                <i className="fas fa-phone"></i>
              </span>
              +880 1767397345
            </p>
            <p className="text-3 mb-1 text-light">
              <span className="text-primary text-4 me-2">
                <i className="fas fa-fax"></i>
              </span>
              (XXX) XXX XXX XXX
            </p>
            <p className="text-3 mb-4 text-light">
              <span className="text-primary text-4 me-2">
                <i className="fas fa-envelope"></i>
              </span>
              mail.mejbahasan@gmail.com
            </p>
            <h2 className="mb-3 text-5 text-uppercase text-white">Follow Me</h2>
            <div className=" d-flex justify-content-center justify-content-md-start">
              {/* importing social icons  */}
              <SocialIcons />
            </div>
          </div>
          <div className="col-md-8 col-xl-9 order-0 order-md-1">
            <h2 className="mb-3 text-5 text-uppercase text-center text-md-start text-white">
              Send us a note
            </h2>
            <form
              className="form-dark"
              id="contact-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="row g-4">
                <div className="col-xl-6">
                  <input
                    name="user_name"
                    type="text"
                    className="form-control"
                    required=""
                    placeholder="Name"
                    spellCheck="false"
                    {...register("name", { required: "Enter your name" })}
                  />
                  {errors.name && (
                    <p className="text-danger mb-0">{errors.name.message}</p>
                  )}
                </div>
                <div className="col-xl-6">
                  <input
                    name="user_email"
                    type="email"
                    className="form-control"
                    required=""
                    placeholder="Email"
                    spellCheck="false"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|live\.com)$/,
                        message:
                          "Enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-danger mb-0">{errors.email.message}</p>
                  )}
                </div>
                <div className="col">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    required=""
                    placeholder="Tell us more about your needs........"
                    spellCheck="false"
                    {...register("message", { required: "Write a message" })}
                  />
                  {errors.message && (
                    <p className="text-danger mb-0">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>
              <p className="text-center mt-4 mb-0">
                <Button type="submit">Send Message</Button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Main>
  );
};
const Main = styled.section`
  .socialIcons {
    display: flex;
    gap: 1rem;
  }
  .form-dark .form-control:focus {
    border-color: #80bdff !important;
  }
  .form-control::placeholder {
    color: #7d7b7b !important;
  }
  .form-dark .custom-select,
  .form-dark .form-control {
    background: #232a31;
    border-color: #232a31;
    color: #fff;
  }
  .custom-select:focus,
  .form-control:focus {
    box-shadow: 0 0 5px rgba(128, 189, 255, 0.5);
  }
`;
export default Contact;
