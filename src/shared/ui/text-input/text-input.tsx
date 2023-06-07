import { MdEmail, MdLock } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import cl from "classnames";
import styles from "./text-input.module.css";
import { useState } from "react";

type Props = {
  password?: boolean;
  icon?: "email" | "password";
  label?: string;
  placeholder?: string;
  error?: string;
};

export default function TextInput({
  label,
  placeholder,
  icon,
  password,
  error,
  ...rest
}: Props) {
  let Icon = null;
  const [showPassword, setShowPassword] = useState(false);

  if (icon === "email") {
    Icon = MdEmail;
  } else if (icon === "password") {
    Icon = MdLock;
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = password ? (showPassword ? "text" : "password") : "text";

  return (
    <div>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.input_wrapper}>
        {Icon && <Icon className={styles.icon} />}
        <input
          type={inputType}
          placeholder={placeholder}
          className={styles.input_base}
          {...rest}
        />
        {password && (
          <div
            className={cl(styles.password_icon)}
            onClick={toggleShowPassword}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </div>
        )}
      </div>
      {error && <p className={styles.error_text}>{error}</p>}
    </div>
  );
}
