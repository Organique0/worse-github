Next.js 13, React, Socket.io, Prisma, Tailwind, Supabase, UploadThing, Clerk
*****************
Hosted on Railway.app
*****************

On a second brach there is my attempt of using Supabase for authentication.

It did not work no matter what. Hours wasted for nothing. Almost got it to work except for a little refresh bug that I was not able to fix. Tried my best, but you know. "skill issue".

hello, it's me again with another update. I have switched to Clerk for authentication but the refresh bug is still there. Send help please.

This whole time, after trying everything possible, remaking the auth 2 times, the "bug" was the in the way my css would interact with the LastPass extension that I have.
Sidebar was set to hidden on small screens, and the extension would shrink the screen on login to show a notification. 
Because of that, on initial page load, the sidebar was set to hidden.


I don't know why I did not just inspect the page sooner to see that the sidebar was there the whole time but luckily I did after all.

strigify != stringifyUrl. Even if they look similar. Another hour wasted. 
