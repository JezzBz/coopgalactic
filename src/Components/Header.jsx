import React from 'react';
import axios from 'axios';
export default function Header() {


    function onTelegramAuth(user){
        console.log(user);
    }

    return <div>
        <div  dangerouslySetInnerHTML={{ __html: '<script async src="https://telegram.org/js/telegram-widget.js?15" data-telegram-login="samplebot" data-size="large" } data-request-access="write"></script>'}}></div>

    </div>;
}
