
"use client";


import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from "react";




type Currency = {

  code:string;

  symbol:string;

  name:string;

};





const currencies:Record<string,Currency> = {


  JPY:{

    code:"JPY",

    symbol:"¥",

    name:"Japanese Yen",

  },


  USD:{

    code:"USD",

    symbol:"$",

    name:"US Dollar",

  },


  EUR:{

    code:"EUR",

    symbol:"€",

    name:"Euro",

  },


  GBP:{

    code:"GBP",

    symbol:"£",

    name:"British Pound",

  },


};








type CurrencyContextType = {


  currency:Currency;


  setCurrency:(code:string)=>void;


};








const CurrencyContext =

createContext<CurrencyContextType | null>(null);









function detectCurrency(){


  if(typeof window === "undefined"){

    return "USD";

  }



  const language =

    navigator.language || "";





  if(language.includes("ja")){

    return "JPY";

  }





  if(language.includes("en-GB")){

    return "GBP";

  }





  if(language.includes("de") ||

     language.includes("fr") ||

     language.includes("es")){

    return "EUR";

  }




  return "USD";


}









export function CurrencyProvider(

{

children

}:{children:ReactNode}

){



  const [currency,setCurrencyState] =

    useState<Currency>(

      currencies.USD

    );








  useEffect(()=>{


    const saved =

      localStorage.getItem(

        "biztools_currency"

      );





    if(saved && currencies[saved]){


      setCurrencyState(

        currencies[saved]

      );


    }

    else{


      const detected =

        detectCurrency();


      setCurrencyState(

        currencies[detected]

      );


    }



  },[]);









  function setCurrency(code:string){


    if(currencies[code]){


      setCurrencyState(

        currencies[code]

      );


      localStorage.setItem(

        "biztools_currency",

        code

      );


    }


  }







  return (

    <CurrencyContext.Provider

      value={{

        currency,

        setCurrency,

      }}

    >

      {children}

    </CurrencyContext.Provider>

  );


}









export function useCurrency(){


  const context =

    useContext(

      CurrencyContext

    );





  if(!context){

    throw new Error(

      "useCurrency must be used inside CurrencyProvider"

    );

  }




  return context;


}