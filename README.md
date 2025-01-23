# Calm Essence

Calm Essence is a React-based mental wellness platform with a Node.js backend, using TailwindCSS for styling, Agora for video calling, and RDS as the database to offer meditations, live sessions, and expert support for mental well-being.

<a href="https://github.com/nikul014/CalmEssence/tree/main/App%20Preview%20Screenshots" target="_blank">
  <img src="https://github.com/nikul014/CalmEssence/blob/main/App%20Preview%20Screenshots/app_logo.png" alt="Watch the App Previews" style="width: 150px; height: auto;">
</a>

* *Website URL*: <https://thecalmessence.netlify.app/>
* *Backend application URL*: <https://csci-5709-group8.onrender.com>
* *Git URL*: <https://git.cs.dal.ca/parkar/CSCI-5709-Group8>


## Team Members

* Nikulkumar Kukadiya (nk865270@dal.ca)
* Unnati Kapadia (un421671@dal.ca)
* Avadh Rakholiya (av786964@dal.ca)
* Rameez Parkar (rameez.parkar@dal.ca)
* Vishesh Patel (vs263774@dal.ca)
* Siddharth Bhardwaj (sd812175@dal.ca)


## Deployment


The project code will be pushed to the main branch of the GitHub repository [GitHub repository](https://github.com/rameez-parkar/CSCI-5709-Group8), which is mirrored in [GitLab repository](https://git.cs.dal.ca/parkar/CSCI-5709-Group8/-/tree/main/calmessence?ref_type=heads) and it will be deployed on [Netlify](https://thecalmessence.netlify.app/), and the live version can be accessed through the Netlify link (Netlify Link). Backend has been deployed to the Render [Render](https://csci-5709-group8.onrender.com)

To deploy:
1. Push your code to the main branch of the GitHub repository.
2. Import the term project's calmessence folder on Netlify from GitHub.
3. Set up build settings to deploy the application.
4. The application will be live on the specified link.
5. Import the term project's backend folder on Render from Github.
6. Set up build settings to deploy the application.
7. The application will be live on the specified link.


## Built With

* [React](https://legacy.reactjs.org/docs/getting-started.html/) - The web framework used.
* [npm](https://docs.npmjs.com//) - Dependency Management
* [TailwindCSS](https://tailwindcss.com/) - Used for CSS and Responsiveness
* [Axios](https://www.npmjs.com/package/axios) - Used for API calls to the backend.
* [Fortawesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome) - Used for icons.
* [ReactToastify](https://www.npmjs.com/package/react-toastify?activeTab=readme) - Used for toast messages for success and errors
* [AOS](https://www.npmjs.com/package/aos) - Animate on scroll library.
* [PropTypes](https://www.npmjs.com/package/prop-types) - Used for type-checking in React.
* [BlockNoteJs](https://www.blocknotejs.org/) - Used for rich text input like notion
* [React Router DOM](https://www.npmjs.com/package/react-router-dom) - Used for routing in React applications.
* [React Scroll](https://www.npmjs.com/package/react-scroll) - Used for scrolling animations in React.
* [Redux](https://redux.js.org/) - Used for state management in React, ensuring the application remains scalable and manageable with a predictable state container.
* [Moment](https://momentjs.com/) - Used for date and time manipulation, ensuring accurate scheduling of mindfulness sessions and reminders.
* [Socket.io](https://socket.io/) - Used for real-time, bidirectional communication between web clients and servers, useful for community features and live support.
* [Agora](https://github.com/AgoraIO/Agora-React-SDK) - Used for the Video streaming service
* [Render](https://render.com/) - Used for backend application deployment



## Folder Structure For Backend and Frontend

Github repo: CSCI-5709-Group8
- backend(Node-Express)
    - src
        - controllers
            - articleController.js
            - authController.js
            - blogController.js
            - breathingController.js
            - chatController.js
            - tokenController.js
            - sessionController.js
        - routes
            - articleRoutes.js
            - authRoutes.js
            - blogRoutes.js
            - breathingRoutes.js
            - chatRoutes.js
            - sessionRoutes.js
            - tokenRoutes.js
        - config
            - dbConfig.js
            - emailConfig.js
        - utils
            - sendEmail.js
        - app.js
    - .env

- calmessence(React)
    - src
        - assets
            - All the image files
        - components
            - AboutUs.jsx
            - LiveSession.jsx
            - LiveSessionItemCard.jsx
            - Loader.jsx
            - PrivateRoute.jsx
            - VideoCall.jsx
            - UserProfile.jsx
            - And so on all the other project components
        - App.jsx
        - AuthContext.js (Authentication middleware)
        - index.css (Common css file)


### Information about structure and code:
1. For backend as shown in the above structure all the modules are seperated from each other.
2. Removed all the needed dependencies to each other and created modular application structure.
3. All the Routes are stored in routes folder
4. All the Controllers are stored in controllers folder
5. For React application we used the tailwind css.
6. We used all the different components for the frontend application screens.
7. Tailwind css has been edited we didn't used the direct code for tailwind css. Rather we customized them and used it as needed.
8. For other application flow we used the other packages as well but we customized them in a way that the copyright issues will not be occurred, and we just not changed the syntax but we tried to create our own code as much as possible.
9. For the deployment of the application we simply used the netlify and render as free deployment services.

## Backend API Routes

Here’s a list of all the APIs from the backend application, which we used in out application

### Articles
- **GET /api/articles/list**: Retrieves a list of all articles.
- **POST /api/articles/create**: Creates a new article.
- **PUT /api/articles/update**: Updates an existing article.

### Auth
- **POST /api/auth/register**: Registers a new user.
- **POST /api/auth/login**: Logs in an existing user.
- **POST /api/auth/reset-password**: Resets the password for a user.

### Blogs
- **POST /api/blogs/update**: Updates an existing blog.
- **GET /api/blogs/all**: Retrieves a list of all blogs.
- **POST /api/blogs/blog**: Retrieves a specific blog.

### Breathing
- **GET /api/breathing/list**: Retrieves a list of all breathing exercises.
- **POST /api/breathing/create**: Creates a new breathing exercise.
- **PUT /api/breathing/update**: Updates an existing breathing exercise.

### Chat
- **GET /api/chats/experts**: Retrieves a list of all experts.
- **POST /api/chats/request**: Creates a new chat request.
- **GET /api/chats/:userId**: Retrieves chat details for a specific user ID.
- **GET /api/messages/:chatId**: Retrieves messages for a specific chat ID.
- **POST /api/messages**: Creates new messages.

### Session
- **POST /api/sessions/create**: Creates a new session.
- **POST /api/sessions/edit**: Edits an existing session.
- **GET /api/sessions/list**: Retrieves a list of all sessions.
- **POST /api/sessions/contact-us**: Sends a contact message regarding sessions.

### Tokens
- **POST /api/tokens/generate**: Generates a new token.

### References

[1]   "Communication illustrations by Storyset" Storyset. [Online]. Available at: https://storyset.com/communication  [Accessed: 04 June 2024]

[2]   "Organic flat people meditating illustration" Freepik. [Online]. Available at: https://www.freepik.com/free-vector/organic-flat-people-meditating-illustration_13297285.htm#fromView=search&page=1&position=1&uuid=60509726-2f54-402f-8f8c-5dc19f8c1a22 [Accessed: 04 June 2024]

[3]   "Meditation Illustration Animation" Dribble. [Online]. Available at: https://dribbble.com/shots/16263763-Meditation-Illustration-Animation

[4]   "Image by Pietro Merola from Pixabay." Pixabay. [Online]. Available at: https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7986102

[5]   "Image by retrateapr from Pixabay." Pixabay. [Online]. Available at: https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7354363

[6]   "Influencer recording new video" Freepik. [Online]. Available at: https://www.freepik.com/free-vector/influencer-recording-new-video_7815291.htm#fromView=search&page=1&position=4&uuid=9db2ca83-a839-4726-8a74-07a8c1edf768 [Accessed: 04 June 2024]

[7]   "Happy women stand on floor and meditating in yoga pose by svstudioart on Freepik." Freepik. [Online]. Available at: https://www.freepik.com/free-vector/happy-women-stand-floor-meditating-yoga-pose_15620861.htm#fromView=search&page=1&position=21&uuid=10ae15ae-c0a9-4689-aaa3-bbc3e657c242 [Accessed: 04 June 2024]

[8]   "Breathing exercise concept illustration by storyset on Freepik." Freepik. [Online]. Available at: https://www.freepik.com/free-vector/breathing-exercise-concept-illustration_28205234.htm#fromView=search&page=1&position=29&uuid=10ae15ae-c0a9-4689-aaa3-bbc3e657c242 [Accessed: 04 June 2024]

[9]   "Woman expressing strong various feelings and emotions by pch.vector on Freepik." Freepik. [Online]. Available at: https://www.freepik.com/free-vector/woman-expressing-strong-various-feelings-emotions_8271103.htm#fromView=search&page=1&position=4&uuid=8f401dc4-4677-45f9-aaa1-1cb40a7cf1c3 [Accessed: 04 June 2024]

[10]  "Flat business person meditating by Freepik." Freepik. [Online]. Available at: https://www.freepik.com/free-vector/flat-business-person-meditating_13404878.htm#fromView=search&page=1&position=25&uuid=58fea7b1-5bf7-4b3c-9c9f-ed5d777d1dfa [Accessed: 04 June 2024]

[11]  "Customer support illustration by Freepik." Freepik. [Online]. Available at: https://www.freepik.com/free-vector/customer-support-illustration_12981630.htm#query=contact%20us&position=7&from_view=keyword&track=ais_user&uuid=4d84bf99-6e3e-4f5d-a87c-8f90319273d4 [Accessed: 04 June 2024]

[12]  "Flat design illustration customer support by Freepik." Freepik. [Online]. Available at: https://www.freepik.com/free-vector/flat-design-illustration-customer-support_12982910.htm#from_view=detail_alsolike [Accessed: 04 June 2024]

[13]  "React", React. [Online]. Available at: https://react.dev/ [Accessed: 12 July, 2024].

[14]  "Tailwind CSS", Tailwind Labs Inc. [Online]. Available at: https://tailwindcss.com/  [Accessed: 12 July, 2024].

[15]  "Netlify", Netlify. [Online]. Available at: https://www.netlify.com/  [Accessed: 12 July, 2024].

[16]  "React Documentation: Using the State Hook,React [Online]. Available: https://legacy.reactjs.org/docs/hooks-state.html. Accessed: 14 July, 2024.

[17]  "Google Fonts," Google[Online]. Available: https://fonts.google.com/. Accessed: 20 July, 2024.

[18]  "Agora React SDK," Agora[Online]. Available: https://github.com/AgoraIO/Agora-React-SDK. Accessed: 21 July, 2024.

[19]  "Render - Deploy and Manage Apps," Render[Online]. Available: https://render.com/. Accessed: 21 July, 2024.


## Note:
As the netlify is not deploying the node js application properly we used the render site to deploy our backend and netlify for the frontend. Both the backend and frontend has been deployed using the github cicd pipeline.

## Acknowledgments

* The code provided served as a valuable resource, offering insights into the functionality and logic behind various UI components. I deeply appreciate the dedication and effort put into its development.
* Its contribution has been invaluable, shaping my understanding and approach towards learning specific techniques and approaches. I extend my sincere gratitude for the insights it has provided.
