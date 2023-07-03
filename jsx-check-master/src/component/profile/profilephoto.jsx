import React from "react";


function Profilephoto ()  {
    return (
        <div>
            <img src={process.env.PUBLIC_URL + '/pic.jpg'} alt="pic" width={'250px'} />
        </div>

    )
};
export default Profilephoto