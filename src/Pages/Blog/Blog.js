import React from 'react';

const Blog = () => {
    return (
        <div className='p-11'>
            <div>
                <h1>1. What is cors</h1>
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others.

                    CORS is implemented primarily in web browsers, but it can also be used in API clients as an option. It's present in all popular web browsers like Google Chrome, Firefox, Opera, and Safari. The standard has been accepted as a W3C Recommendation in January 2014. Based on that, we can assume that it is implemented in all currently available and other than listed web browsers.</p>
            </div>
            <div>
                <h1>2.1 Why are you using Firebase `? </h1>
                <p>
                    Image result for Why are you using firebase
                    Google Analytics for Firebase allows you to track your users' journey through realtime and custom reporting. As mentioned previously, Firebase supports IOS, Android, Web, and Unity products, allowing you to track your users across a wide range of devices.</p>


                <h1>2.2 What other options do you have to implement authentication? </h1>
                <p>Authentication is common way to handle security for all applications. This is only way to answer the question “who you are?” to the application, when comes to stateless architecture or service oriented architecture we got lot of new concepts and technologies in the market. In this article we will learn how to handle authentication on RESTful APIs.

                    Authentication:

                    Lets start by listing the various ways through which we can achieve authentication,

                    Cookie-Based authentication
                    Token-Based authentication
                    Third party access(OAuth, API-token)
                    OpenId
                    SAML</p>
            </div>
            <div>
                <h1>3. How does the private route work?</h1>
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </div>
            <div>
                <h1>4.1 What is Node?</h1>
                <p>Javascript has existed since 1995 and has since taken over as the dominant language for web development. For much of its life, JavaScript was used mainly for client-side scripting inside tags executing in web browsers. This limitation meant that developers were often working in many different languages and frameworks between the front-end (client-side) and backend (server-side) aspects of a web application.</p>

                <h1>4.2 How does Node work?</h1>
                <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </div>
        </div>
    );
};

export default Blog;