import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h14 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""} `;

  const spanClasses = "relative z-20";

  const renderButton = () => (
    <button className={classes} onClick={onClick} href={href}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  // conditional statemnt for making the button appear
  return href ? renderLink() : renderButton();
};

export default Button;
