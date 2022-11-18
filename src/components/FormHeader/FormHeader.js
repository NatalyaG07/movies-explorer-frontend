import "./FormHeader.css";

import Logo from "../Logo/Logo";

function FormHeader({ text }) {
  return (
    <header className="form-header">
      <Logo />
      <h1 className="form-header__title">{text}</h1>
    </header>
  );
}

export default FormHeader;