"use client";

import { RefObject } from "react";
import {
  cleanNumber,
  formatNumber,
} from "@/lib/format";

type Props = {

  label: string;

  placeholder?: string;

  value: string;

  setValue: (value: string) => void;

  inputRef?: RefObject<HTMLInputElement | null>;

  nextRef?: RefObject<HTMLInputElement | null>;

  helperText?: string;

  autoFocus?: boolean;

};

export default function BusinessInput({

  label,

  placeholder = "",

  value,

  setValue,

  inputRef,

  nextRef,

  helperText,

  autoFocus = false,

}: Props) {

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>
  ) {

    if (e.key !== "Enter") return;

    e.preventDefault();

    if (nextRef?.current) {

      nextRef.current.focus();

    }

  }

  return (

    <div

      style={{

        marginTop: "24px",

      }}

    >

      <label

        style={{

          display: "block",

          fontWeight: "700",

          marginBottom: "8px",

          color: "#111827",

        }}

      >

        {label}

      </label>

      <input

        ref={inputRef}

        autoFocus={autoFocus}

        value={value}

        placeholder={placeholder}

        onChange={(e) => {

          const number =
            cleanNumber(e.target.value);

          setValue(

            number
              ? formatNumber(number)
              : ""

          );

        }}

        onKeyDown={handleKeyDown}

        style={{

          width: "100%",

          padding: "15px",

          fontSize: "16px",

          border: "1px solid #D1D5DB",

          borderRadius: "12px",

          outline: "none",

          transition: "0.2s",

          boxSizing: "border-box",

        }}

      />

      {

        helperText && (

          <p

            style={{

              marginTop: "8px",

              fontSize: "13px",

              color: "#6B7280",

            }}

          >

            {helperText}

          </p>

        )

      }

    </div>

  );

}