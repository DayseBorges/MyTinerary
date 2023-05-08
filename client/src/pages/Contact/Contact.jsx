import style from "./styles/Contact.module.css";
import Swal from "sweetalert2";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    name && email && message
      ? Swal.fire({
          title: "Success!",
          text: "Message sent",
          icon: "success",
          confirmButtonText: "OK",
        })
      : Swal.fire({
          title: "Error!",
          text: "Missing Data",
          icon: "error",
          confirmButtonText: "OK",
        });
  };

  return (
    <div className={style.containerCreate}>
      <h2 className={style.create}>Leave us a message</h2>
      <form className={style.containerForm} onSubmit={handleSubmit}>
        <label className={style.label} htmlFor="name">
          Name
          <br />
          <input
            className={style.input}
            type="text"
            name="name"
            placeholder="Your name here"
          />
        </label>
        <label className={style.label} htmlFor="email">
          E-mail
          <br />
          <input
            className={style.input}
            type="email"
            name="email"
            placeholder="example@example.com"
          />
        </label>
        <label className={style.label} htmlFor="message">
          Message
          <br />
          <textarea className={style.input} name="message" />
        </label>
        <button type="submit" className={style.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
