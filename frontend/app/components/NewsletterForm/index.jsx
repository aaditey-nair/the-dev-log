import { useRef } from "react";
import FormInput from "../../elements/FormInput";

function NewsletterForm() {
  const name = useRef(null);
  const email = useRef(null);
  return (
    <form className="flex flex-col gap-4 p-4">
      <label htmlFor="subscription-fname" className="text-dark">
        First Name
      </label>
      <FormInput
        state={name}
        inputId="subscription-fname"
        type="text"
        name="fname"
      />
      <label htmlFor="subscription-email" className="text-dark">
        Email
      </label>
      <FormInput
        state={email}
        inputId="subscription-email"
        type="email"
        name="email"
      />
      <button>Submit</button>
    </form>
  );
}

export default NewsletterForm;
