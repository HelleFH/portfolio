import SocialLinks from "../../../components/SocialLinks/SocialLinks";

const Contact = () => {
  return (
    <section className="flex text-left flex-col max-w-fit gap-2">
      <h4 className="text-2xl font-semibold">Contact Info</h4>
      <p>hellefruergaardh@gmail.com</p>
      <p>+45 29664077</p>
      <SocialLinks onClick={undefined} />
    </section>
  );
};

export default Contact;
