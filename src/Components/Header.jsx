import React from 'react';
import axios from 'axios';
export default function Header() {
    
    const GetTelegramOAuth=()=>{
        axios.get("https://telegram.org/js/telegram-widget.js?15%22%20data-telegram-login=%22CoopGalacticBot%22&data-size=large&data-onauth=onTelegramAuth(user)&data-request-access=write").then((req)=>{console.log(req)})
    }
    <button onClick={GetTelegramOAuth}>

    </button>
  return <div>























  </div>;
}
