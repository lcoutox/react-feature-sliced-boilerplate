import { MdEmail, MdLock } from "react-icons/md";
import { FaEye, FaEyeSlash, FaUserAlt } from "react-icons/fa";
import cl from "classnames";
import styles from "./text-input.module.css";
import { useState } from "react";

type Props = {
  password?: boolean;
  name: string
  icon?: "email" | "password" | "user";
  label?: string;
  placeholder?: string;
  error?: string;
  register?: any
};

export default function TextInput({
  label,
  name,
  placeholder,
  icon,
  password,
  error,
  register,
  ...rest
}: Props) {
  let Icon = null;
  const [showPassword, setShowPassword] = useState(false);

  if (icon === "email") {
    Icon = MdEmail;
  } else if (icon === "password") {
    Icon = MdLock;
  } else if (icon === "user") {
    Icon = FaUserAlt
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
          name={name}
          type={inputType}
          placeholder={placeholder}
          className={styles.input_base}
          {...register(name)}
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
