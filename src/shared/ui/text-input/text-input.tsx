import styles from "./text-input.module.css";

type Props = {
  label?: string
  placeholder?: string
}

export default function TextInput({
  label,
  placeholder
}: Props) {
  return (
    <div>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.input_wrapper}>
        <input placeholder={placeholder} className={styles.input_base} />
      </div>
    </div>
  );
}
