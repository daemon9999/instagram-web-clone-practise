import { useRef, useEffect } from "react";
import Input from "components/Input";
import { AiFillFacebook } from "react-icons/ai";
import { login } from "firebase.js";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Formik, Form } from "formik";
import { loginSchema } from "validation";
export default function Login() {
  

  const location = useLocation();
  const navigate = useNavigate();

  const images = [
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png",
  ];

  const imageStyle =
    "top-0 left-0 absolute h-full w-full opacity-0 duration-1000 transition-opacity ease-linear";
  const ref = useRef();

  const handleSubmit = async (values, actions) => {
    await login(values.username, values.password);
    navigate(location.state?.return_url || "/instagram-web-clone-practise", {
      replace: true,
    });
  };

  useEffect(() => {
    const images = ref.current.querySelectorAll("img");
    const total = images.length;
    let current = 0;
    const imageSlider = () => {
      images[(current > 0 ? current : total) - 1].classList.add("opacity-0");
      images[current].classList.remove("opacity-0");
      current = current === total - 1 ? 0 : current + 1;
    };
    const interval = setInterval(imageSlider, 3000);
    imageSlider();
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  return (
    <>
      <div className="hidden md:block bg-hero w-[380px] h-[581px] bg-[length:468.32px_634.15px] bg-[top_left_-46px] relative">
        <div
          className="h-[538px] w-[250px] absolute top-[27px] right-[18px]"
          ref={ref}
        >
          {images.map((image, key) => (
            <img src={image} alt={key} key={key} className={imageStyle} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <div className="bg-white flex flex-col pb-6 pt-8 px-[40px] border w-[350px] gap-y-3">
          <a href="#s" className="w-[175px] h-[51px] mb-8 flex mx-auto">
            <img
              className="h-full w-full"
              src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
              alt="logo"
            />
          </a>
          <Formik
            validationSchema={loginSchema}
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, dirty, isValid }) => (
              <Form className="gap-y-1.5 flex flex-col">
                <Input
                  label="Phone number, username or email"
                  name="username"
                />
                <Input
                  label="Password"
                  type="password"
                  name="password"
                />
                <button
                  disabled={!dirty || isSubmitting || !isValid}
                  type="submit"
                  className="h-[30px] mt-1 bg-brand text-semibold text-sm text-white rounded"
                >
                  Log In
                </button>
                <div className="flex items-center mt-[10px] mb-[14px]">
                  <div className="h-[0.5px] bg-gray-300 flex-1" />
                  <div className="px-4 text-[13px] text-gray-400 font-semibold">
                    OR
                  </div>
                  <div className="h-[0.5px] bg-gray-300 flex-1" />
                </div>
                <a
                  href="#s"
                  className="flex items-center justify-center gap-x-2 text-sm text-facebook font-semibold"
                >
                  <AiFillFacebook size={20} />
                  Log in with Facebook
                </a>
                <a
                  href="#s"
                  className="flex justify-center text-xs text-link font-semibold mt-[10px]"
                >
                  Forgot password?
                </a>
              </Form>
            )}
          </Formik>
          
        </div>
        <div className="bg-white  h-[54px] p-4 border text-sm flex justify-center items-center gap-x-1">
          Don't have an account?{" "}
          <a href="#s" className="text-brand font-semibold">
            Sign up
          </a>
        </div>
      </div>
    </>
  );
}
