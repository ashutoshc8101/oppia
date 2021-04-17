## Thank You GSoC Mentors for taking the time to visit this branch.

- I have migrated donate page and about page to angular router in this branch.
- Both frontend and backend routing works together here.
- Webpack and angular cli compiles their own part of the codebase.

Demo:
- When a developer runs `python -m scripts.start` command, both webpack and angular cli compiles their parts of the codebase.
- If you visit /donate or /about, they are routed using angular-router
- I have added few routes to demostrate the usage of the route guard.
Routes added for demostration: 
- /loggedIn : Only accessible if user is logged in.
- /collection-creator-role: This route is only accessible when the user has the role
- /topic-manager-role: Only user with topic-manager role can access this route.
- /moderator-role: Moderator role is required to access this page.
- /admin-role: Only user with admin role can access this page.
- /super-admin-role: Only user with super admin role can access this page.

Demo video for routing:

I have removed the angular js directives from the pages shown in the video.
Final product will include top navigation bar and footer. 
I haven't used them in this video as they are not migrated yet.

https://user-images.githubusercontent.com/24855641/115121013-281cfd80-9fce-11eb-8f98-a6f08d87eab6.mp4


Demo video for ng cli:

https://user-images.githubusercontent.com/24855641/115121012-26ebd080-9fce-11eb-9c52-719b35bef03c.mp4

