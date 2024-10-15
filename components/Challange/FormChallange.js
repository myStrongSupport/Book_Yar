"use client";
import addToChallangeBook from "@/app/actions/addChallangeBook";
import { FaImage, FaBook, FaUser } from "react-icons/fa";
import useForm from "@/hook/use_form";

const validateImage = (value) => {
  const enterdLink = value.trim();
  if (enterdLink === "") {
    return false; // Empty input is invalid
  }
  return enterdLink.includes("https://img.ketabrah.ir/");
};

// Valdiate  part functions
const validateAuthor = (value) => {
  const enteredValue = value.trim();
  return enteredValue.length > 3;
};
const validateTitle = (value) => {
  return value.trim() !== "";
};
function FormChallange() {
  // Image Validation
  const {
    value: image,
    isInvalid: imageIsInValid,
    isValid: imageIsValid,
    valueChangeHander: imageChangeHandler,
    valueBlurHandler: imageBlurHandler,
    rest: restImage,
  } = useForm(validateImage);
  // title validation
  const {
    value: title,
    isInvalid: titleIsInValid,
    isValid: titleIsValid,
    valueChangeHander: titleChangeHandler,
    valueBlurHandler: titleBlurHandler,
    rest: restTitle,
  } = useForm(validateTitle);
  // Author validation
  const {
    value: author,
    isInvalid: authorIsInValid,
    isValid: authorIsValid,
    valueChangeHander: authorChangeHandler,
    valueBlurHandler: authorBlurHandler,
    rest: restAuthor,
  } = useForm(validateAuthor);

  // Check all field is ok or not
  let FormIsValid = false;

  if (imageIsValid && titleIsValid && authorIsValid) {
    FormIsValid = true;
  }
  return (
    <div className="w-full pt-10 md:w-[45%]">
      <form
        action={addToChallangeBook}
        className="m-auto w-full py-12 sm:w-1/2 md:sticky md:top-0 md:w-9/12 lg:m-0 lg:w-9/12 lg:px-8 xl:w-[70%]"
      >
        <h3 className="font-ka mb-8 text-center text-3xl font-bold text-primary-600">
          کتاب چالش{" "}
        </h3>
        {/* Form Container */}
        <div className="">
          {/* Image input */}
          <div className="mb-12">
            <label
              htmlFor="image"
              className="font-sayeh mb-3 block text-xl font-semibold"
            >
              تصویر
            </label>
            <div className="form-input">
              <FaImage size={15} />
              <input
                type="text"
                id="image"
                name="image"
                placeholder="لینک تصویر"
                value={image}
                onChange={imageChangeHandler}
                onBlur={imageBlurHandler}
                className="font-ka w-full pr-4 outline-none"
              />
            </div>
            {imageIsInValid && (
              <p className="absolute mt-3 text-sm text-red-600">
                لطفا لینک معتبر از دامنه https://img.ketabrah.ir وارد کنید
              </p>
            )}
          </div>
          {/* title of book */}
          <div className="mb-12">
            <label
              htmlFor="title"
              className="font-sayeh mb-3 block text-xl font-semibold"
            >
              نام کتاب
            </label>

            <div className="form-input">
              <FaBook size={15} />
              <input
                type="text"
                id="title"
                name="title"
                placeholder="وارد کردن نام کتاب"
                value={title}
                onChange={titleChangeHandler}
                onBlur={titleBlurHandler}
                className="font-ka w-full pr-4 outline-none"
              />
            </div>
            {titleIsInValid && (
              <p className="absolute mt-3 text-sm text-red-600">
                لطفا نام کتاب را وارد کنید{" "}
              </p>
            )}
          </div>
          {/* author of book */}
          <div className="mb-12">
            <label
              htmlFor="author"
              className="font-sayeh mb-3 block text-xl font-semibold"
            >
              نویسنده
            </label>

            <div className="form-input">
              <FaUser size={15} />
              <input
                type="text"
                id="author"
                name="author"
                placeholder="وارد کردن نام نویسنده"
                value={author}
                onChange={authorChangeHandler}
                onBlur={authorBlurHandler}
                className="font-ka w-full bg-transparent pr-4 outline-none"
              />
            </div>
            {authorIsInValid && (
              <p className="absolute mt-3 text-sm text-red-600">
                نام نویسنده باید بیشتر از کارکتر باشد{" "}
              </p>
            )}
          </div>
        </div>
        <div className="mt-5 w-full">
          <button
            disabled={!FormIsValid}
            className="font-ka w-full rounded-xl bg-primary-400 py-1 text-xl text-white shadow-2xl disabled:bg-gray-400"
          >
            اضافه کردن
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormChallange;
