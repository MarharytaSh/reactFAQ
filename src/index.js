
import React from 'react';
import ReactDOM from 'react-dom';
import FAQ from './compayTask/FAQ';


var FAQ_obj = [
    {question:"What is Telegram?", answer:"Telegram is a messaging app with a focus on speed and security, it’s super-fast, simple and free. You can use Telegram on all your devices at the same time — your messages sync seamlessly across any number of your phones, tablets or computers.With Telegram, you can send messages, photos, videos and files of any type (doc, zip, mp3, etc), as well as create groups for up to 30,000 people or channels for broadcasting to unlimited audiences. You can write to your phone contacts and find people by their usernames. As a result, Telegram is like SMS and email combined — and can take care of all your personal or business messaging needs. In addition to this, we support end-to-end encrypted voice calls."},
    {question:"Who is it for?", answer:"Telegram is for everyone who wants fast and reliable messaging and calls. Business users and small teams may like the large groups, usernames, desktop apps and powerful file sharing options.Since Telegram groups can have up to 30,000 members, we support replies, mentions and hashtags that help maintain order and keep communication in large communities efficient. You can appoint admins with advanced tools to help these communities prosper in peace. Public groups can be joined by anyone and are powerful platforms for discussions and collecting feedback."},
    {question:"How is it different from WhatsApp?", answer:"Unlike WhatsApp, Telegram is a cloud-based messenger with seamless sync. As a result, you can access your messages from several devices at once, including tablets and computers, and share an unlimited number of photos, videos and files (doc, zip, mp3, etc.) of up to 1,5 GB each. And if you don't want to store all that data on your device, you can always keep it in the cloud."},
    {question:"How old is Telegram?", answer:"Telegram for iOS was launched on August 14, 2013. The alpha version of Telegram for Android officially launched on October 20, 2013. More and more Telegram clients appear, built by independent developers using Telegram's open platform."},
    {question:"Is it available on my device?", answer:"ou can use Telegram on smartphones, tablets, and even computers. We have apps for iOS (6 and above), Android (4.1 and up) and Windows Phone. You can also use Telegram's web version or install one of our desktop apps for Windows, OSX, and Linux."},
];


ReactDOM.render(
        <div>
            <FAQ FAQ_obj={FAQ_obj}/>
        </div>,
    document.getElementById('root')
);

