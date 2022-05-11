import FormInput from "../../elements/FormInput";

function NewsletterForm() {
  return (
    <form className="flex flex-col gap-4 p-4">
      <label htmlFor="subscription-fname" className="text-dark">
        First Name
      </label>
      <FormInput inputId="subscription-fname" type="text" name="fname" />
      <label htmlFor="subscription-email" className="text-dark">
        Email
      </label>
      <FormInput inputId="subscription-email" type="email" name="email" />
    </form>
  );
}

export default NewsletterForm;
