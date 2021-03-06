import { useRef, useState } from "react";

import FormInput from "../../elements/FormInput";
import SubmitDark from "../../elements/SubmitDark";

import { dataRequired, isEmail } from "../../utils";

function NewsletterForm() {
  const name = useRef(null);
  const email = useRef(null);
  const [errors, setErrors] = useState([]);

  function handleSubmit(params) {
    if (!dataRequired(name.current.value)) {
      setErrors((prev) => ["This field is required", prev[1]]);
    } else {
      setErrors((prev) => ["", prev[1]]);
    }
    if (!dataRequired(email.current.value)) {
      setErrors((prev) => [prev[0], "This field is required"]);
    } else if (!isEmail(email.current.value)) {
      setErrors((prev) => [prev[0], "Invalid email address"]);
    } else {
      setErrors((prev) => [prev[0], ""]);
    }
  }

  return (
    <form className="flex flex-col gap-4 p-4">
      <div className="space-y-2">
        <label htmlFor="subscription-fname" className="text-dark font-black">
          First Name
        </label>
        <FormInput
          state={name}
          inputId="subscription-fname"
          type="text"
          name="fname"
        />
        {errors && (
          <p className="text-dark font-black font-mono">{errors[0]}</p>
        )}
      </div>
      <div className="space-y-2">
        <label htmlFor="subscription-email" className="text-dark font-black">
          Email
        </label>
        <FormInput
          state={email}
          inputId="subscription-email"
          type="email"
          name="email"
        />
        {errors && (
          <p className="text-dark font-black font-mono">{errors[1]}</p>
        )}
      </div>
      <SubmitDark handleSubmit={handleSubmit} name="Subscribe" />
    </form>
  );
}

export default NewsletterForm;
