import React from 'react';
import axios from 'axios';
export default function Header() {
    
    
    const GetTelegramOAuth=()=>{
        axios.post("https://oauth.telegram.org/auth/get?bot_id=547043436&lang=ru").then((req)=>{console.log(req)})
    }
    
  return <div>

<button onClick={GetTelegramOAuth}>

    </button>

  </div>;
}
