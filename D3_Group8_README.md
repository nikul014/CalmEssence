# Group 8
## Web Application Report(D3_Group8)

* *Date Created*: 08 Aug 2024
* *Last Modification Date*: 10 Aug 2024
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



## Sources Code of Important modules

As we respect the time of the markers we only showing the few coding practices which we followed to make our application maintainable and manageable.

### App.jsx

```
...
function App() {
    ...
    return (
        ...
        <Router>
            <header>...
                <Nav/>...
            </header>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/about" element={<AboutUs />} />
                .... 
            </Routes>
        </Router>
        ...
    );
}
...
```
In this file, as shown we used the common header with the navigation bar so we can reuse the same navigation code. Also, we created all the routes in the same place and also used the header, script and other tags which will be beneficial in SEO of the application during the search in the internet.


### VideoCall.jsx (Video streaming feature)

```
...


    // Determine user role
    const isPublisher = loggedInUserId == session.expert_id;
    const role = isPublisher ? 'publisher' : 'subscriber';
    const appId = 'e947c59bbe8c4287954cb154e63be817';
    
    useEffect(() => {
        const fetchToken = async () => {
            //API Call to fetch the authorized token for the user to join the live streaming
        };

        if (session.agora_channel_id && loggedInUserId) {
            fetchToken();
        }
    }, [session.agora_channel_id, loggedInUserId, role, user_email]);


    // Join the channel
    useJoin({ appid: appId, channel: session.agora_channel_id, token: token, uid: loggedInUserId }, calling);

    // Local video and audio tracks
    const { localMicrophoneTrack } = useLocalMicrophoneTrack(isPublisher);
    const { localCameraTrack } = useLocalCameraTrack(isPublisher);

    // Publish tracks when ready
    usePublish([localMicrophoneTrack, localCameraTrack]);

    // Define state variables for mic and camera control
    const [micOn, setMic] = useState(isPublisher);
    const [cameraOn, setCamera] = useState(isPublisher);

    // All the remotely connected users
    const remoteUsers = useRemoteUsers();
    
    return (
        ...
          {isPublisher && (
                <div className="flex top-0 left-0 bottom-0 right-0 w-full h-full p-4">
                    // Publisher's live video view to other and publisher it self.
                    <div className="w-3/4 h-full rounded-lg p-4 z-10 overflow-auto">
                        <LocalUser
                            audioTrack={localMicrophoneTrack}
                            cameraOn={cameraOn}
                            micOn={micOn}
                            videoTrack={localCameraTrack}
                            cover="https://www.agora.io/en/wp-content/uploads/2022/10/3d-spatial-audio-icon.svg"
                        >
                            <samp className="user-name text-gray-800 font-semibold">You</samp>
                        </LocalUser>
                    </div>
                    ...
                    <div className="w-1/4 rounded-lg p-4 overflow-auto">
                        // Publisher button controllers
                        ....
                    </div>
                </div>
            )}

            // View for the other user who are not the expert and not sharing their video            
            {isConnected && !expertVideoAvailable && !isPublisher && (
                <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-75">
                    ...
                    //Session details and the publisher's view to subscribers and leave session button.
                </div>
            )}
            ...
        ...
    );
...
```
This file manages the video streaming feature in a React application using Agora RTC SDK. It determines the user’s role as either a publisher or subscriber based on their ID and the session's expert ID. The useEffect hook fetches an authorized token for the user to join the live stream, and the useJoin hook is used to join the Agora channel. The file also handles the local microphone and camera tracks for the publisher, allowing them to broadcast their video and audio, while providing a view for subscribers who are not sharing their video.



### MeditationPlay.jsx(Video playing feature)

```
...

    
    const fetchSelectedSessionData = async () => {
        setLoading(true);
        // API Call to fetch the session data
        ...
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex flex-col items-center lg:p-8 bg-gradient-to-b from-base-200 to-base-200">
            <div className="w-full">
                <div className='bg-gradient-to-b from-base-200 to-base-200 flex justify-center'>
                    <div className="w-[426px] h-[240px] sm:w-[640px] sm:h-[360px] md:w-[854px] md:h-[480px] lg:w-[1280px] lg:h-[720px] bg-black">
                        {selectedSession && (
                            <ReactPlayer
                                url={videoUrl}
                                controls
                                width="100%"
                                height="100%"
                            />
                        )}
                    </div>
                </div>
                <div className='p-4 md:p-8'>
                    <h2 className="text-2xl font-bold mt-6 mb-4">{selectedSession.title}</h2>
                    // meditation session details for the current video
                    ...
                </div>
            </div>
        </div>
    );
...
```
This file handles the video playback feature for meditation sessions. It fetches the selected session data via an API call and displays the video using ReactPlayer, along with session details, within a responsive layout.


### ArticleDetail.jsx(Medium like article features)

```
...

    
    const fetchSelectedSessionData = async () => {
        setLoading(true);
        // API Call to fetch the session data
        ...
        setLoading(false);
    };

    return (
        return (
        <div className="w-full min-h-screen font-poppins antialiased text-gray-900 bg-gradient-to-b from-base-200 to-base-200 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
            <article className="prose prose-gray dark:prose-invert max-w-3xl mx-auto">
                <header className="space-y-4 not-prose ">
                    <h1 className="text-4xl font-bold text-start">{item.title}</h1>
                    <div className="flex items-start justify-start gap-4 text-muted-foreground">
                        ...
                        //Author details
                    </div>
                </header>
                <div className="mt-8">
                    {!imgError ? (<img
                        src={item.image || 'https://eu.ui-avatars.com/api/?name=Article+Image&size=250'}
                        alt="Article image"
                        className="aspect-video rounded-lg object-cover mx-auto w-96 h-80"
                        onError={handleError}

                    />) : (
                        <img
                            src={'https://eu.ui-avatars.com/api/?name=Article+Image&size=250'}
                            alt="Article image"
                            className="aspect-video rounded-lg object-cover mx-auto w-96 h-80"
                         />
                    )}
                </div>
                ...
                //HTML content showing similar to the medium articles.
            </article>
        </div>
    );
...
```
This file is responsible for displaying detailed articles similar to Medium's format. It fetches the selected session data and presents the article's title, author details, and an image. The content is rendered in a styled layout, ensuring a clean and readable experience, with error handling for image loading.




### Editor.jsx(Notion like journal input)

```
...
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

const Editor = ({ onChange, initialData, editable }) => {

    const editor = useCreateBlockNote({
        initialContent : initialData ? JSON.parse(initialData.content.body) : undefined,
        defaultStyles: true,
    });
    
    ...
    return (
        <div className="-mx-[54px] my-4">
            ...
            // BlockNoteView which will create the notion like input text with all the configurations like list, bold, italic or anyother table and image, video, link formats
            <BlockNoteView
                editor={editor}
                editable={editable}
                theme='light'
                onChange={() => onChange(editor.document)}
            />
        </div>
    )
}

export default Editor
...
```
This file provides a Notion-like journal input feature using BlockNoteView. It initializes the editor with optional initial content and allows users to input and format text with various options like lists, bold, italics, tables, images, videos, and links. The editor's content is dynamically updated and can be toggled between editable and non-editable modes.



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