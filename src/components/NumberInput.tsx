import { KeyboardEvent, RefObject } from "react";

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
  function handleKeyDown(
    e: KeyboardEvent<HTMLInputElement>
  ) {
    if (e.key === "Enter" && nextRef?.current) {
      e.preventDefault();
      nextRef.current.focus();
    }
  }

  return (
    <div
      style={{
        marginBottom: "20px",
      }}
    >
      <label
        style={{
          display: "block",
          marginBottom: "8px",
          fontWeight: 700,
          color: "#111827",
        }}
      >
        {label}
      </label>

      <input
        ref={inputRef}
        type="text"
        inputMode="decimal"
        placeholder={placeholder}
        value={
          value === ""
            ? ""
            : Number(value).toLocaleString("en-US")
        }
        onChange={(e) => {
          const raw = e.target.value.replace(/,/g, "");

          if (raw === "") {
            onChange("");
            return;
          }

          if (!/^\d*\.?\d*$/.test(raw)) return;

          onChange(Number(raw));
        }}
        onKeyDown={handleKeyDown}
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "12px",
          border: "1px solid #D1D5DB",
          fontSize: "17px",
          outline: "none",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}