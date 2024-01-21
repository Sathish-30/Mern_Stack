import React from "react";
import { useState } from "react";
import detailContext from "./Context";

const DetailContext = ({children}) => {
    const [userDetail , setUserDetail] = useState(null);
    return (
        <detailContext.Provider value={{userDetail , setUserDetail}}>
            {children}
        </detailContext.Provider>
    )
}

export default DetailContext;