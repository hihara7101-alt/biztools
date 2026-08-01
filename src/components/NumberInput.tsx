import {
  FocusEvent,
  KeyboardEvent,
  RefObject,
  useState,
} from "react";

type Props = {
  label: string;
  placeholder: string;
  value: number | "";
  onChange: (value: number | "") => void;
  inputRef?: RefObject<HTMLInputElement | null>;
  nextRef?: RefObject<HTMLInputElement | null>;
};

export default function NumberInput({
  label,
  placeholder,
  value,
  onChange,
  inputRef,
  nextRef,
}: Props) {
  const [focused, setFocused] = useState(false);

  function handleKeyDown(
    e: KeyboardEvent<HTMLInputElement>
  ) {
    if (e.key === "Enter" && nextRef?.current) {
      e.preventDefault();
      nextRef.current.focus();
    }
  }

  function handleFocus(
    e: FocusEvent<HTMLInputElement>
  ) {
    setFocused(true);
    e.target.select();
  }

  function handleBlur() {
    setFocused(false);
  }

  return (
    <div
      style={{
        marginBottom: "22px",
      }}
    >
      <label
        style={{
          display: "block",
          marginBottom: "10px",
          fontWeight: 700,
          fontSize: "15px",
          color: "#111827",
        }}
      >
        {label}
      </label>

      <input
        ref={inputRef}
        type="text"
        inputMode="decimal"
        autoComplete="off"
        spellCheck={false}
        placeholder={placeholder}
        value={
          value === ""
            ? ""
            : Number(value).toLocaleString("en-US")
        }
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onChange={(e) => {
          const raw = e.target.value.replace(/,/g, "");

          if (raw === "") {
            onChange("");
            return;
          }

          if (!/^\d*\.?\d*$/.test(raw)) return;

          onChange(Number(raw));
        }}
        style={{
          width: "100%",
          padding: "16px",
          borderRadius: "12px",

          border: focused
            ? "2px solid #2563EB"
            : "1px solid #D1D5DB",

          background: "#FFFFFF",

          fontSize: "17px",

          outline: "none",

          boxSizing: "border-box",

          transition: "all .15s ease",
        }}
      />
    </div>
  );
}