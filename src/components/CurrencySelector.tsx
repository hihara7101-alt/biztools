
"use client";


import { useCurrency } from "@/context/CurrencyContext";




export default function CurrencySelector(){


  const {

    currency,

    setCurrency

  } = useCurrency();





  return (


    <div

      style={{

        display:"flex",

        alignItems:"center",

        gap:"8px",

      }}

    >



      <span

        style={{

          fontSize:"14px",

          color:"#6B7280",

        }}

      >

        Currency:

      </span>





      <select


        value={currency.code}



        onChange={(e)=>

          setCurrency(

            e.target.value

          )

        }



        style={{

          padding:"6px 10px",

          borderRadius:"8px",

          border:"1px solid #D1D5DB",

          background:"#FFFFFF",

          cursor:"pointer",

        }}



      >



        <option value="JPY">

          ¥ JPY

        </option>



        <option value="USD">

          $ USD

        </option>



        <option value="EUR">

          € EUR

        </option>



        <option value="GBP">

          £ GBP

        </option>



      </select>



    </div>


  );


}