import { forwardRef } from "react";


type Props = {

  label: string;

  description?: string;

  value: string;

  placeholder?: string;

  onChange: (value:string)=>void;

  onKeyDown?: (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => void;

};



const CalculatorInput = forwardRef<HTMLInputElement, Props>(

function CalculatorInput({

  label,

  description,

  value,

  placeholder,

  onChange,

  onKeyDown,

}, ref) {


  return (

    <div

      style={{

        marginTop:"24px",

      }}

    >


      <label

        style={{

          display:"block",

          fontWeight:"600",

          fontSize:"16px",

        }}

      >

        {label}

      </label>




      {description && (

        <p

          style={{

            color:"#6B7280",

            fontSize:"14px",

            lineHeight:"1.6",

            marginTop:"8px",

          }}

        >

          {description}

        </p>

      )}




      <input

        ref={ref}

        value={value}

        placeholder={placeholder}

        onChange={(e)=>
          onChange(e.target.value)
        }

        onKeyDown={onKeyDown}

        style={{

          width:"100%",

          padding:"12px",

          borderRadius:"10px",

          border:"1px solid #E5E7EB",

          fontSize:"16px",

          marginTop:"10px",

        }}

      />


    </div>

  );

});


CalculatorInput.displayName =
  "CalculatorInput";


export default CalculatorInput;