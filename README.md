# OurCampus

Meet New People + Do What You Love = OurCampus

Watch the [demo](https://youtu.be/Ztbcy1WABpI), play around with the [live site](https://hackatbrown2021.firebaseapp.com/), currently defunct due to maintenance costs, or read more on our [DevPost](https://devpost.com/software/ourcampus). Built in 24 hours by Alexander Ding (@alexander-ding), Ian Gurland (@IanGurland), Naveen Sharma (@ns90001), and John Chung (@johnchung1010) at [Hack@Brown2021](https://2021.hackatbrown.org/). To improve workflow, Ian and Naveen worked from Naveen's computer, while Alex and John worked from Alex's computer.

## Inspiration

As a team of four first-year students, we wanted to create an app that first-years will find helpful in their transition into college. During our first two weeks at Brown, social interactions with our peers were pretty bland. Due to the quarantine spurred by COVID-19, virtual conversations never went beyond these couple questions: “What’s your name?”, “Where’re you from?”, “What’re you planning to concentrate in?”. Occasionally, social media was exchanged, but even then it was difficult to stay in touch online and set up a meeting in person without it being awkward. For our hack, we wanted to find a way for Brown students to easily connect with one another in person and engage in activities that will lead to more meaningful conversations and new friendships.

## What it does

OurCampus is a web app where you can meet new people on your campus through activities that you love. Users that know an activity they’d like to do with others can post new events that other users can join. If you’re just looking to meet people, you can browse existing events and find an activity you might enjoy! Once an event has reached the target number of participants, a text message is sent to every group member containing each participant’s phone number, so the event logistics can be easily communicated.

Although OurCampus can be used to organize formal, well-thought-out events, we envision it to be used for casual, impromptu hangouts where you can meet new members of your campus community. Whether it’s going to get ice cream or studying for an upcoming exam, you’ll never have to do it alone.

## Stack

The frontend website is designed using Figma and built using React.js and Redux.js. We take advantage of Materialize CSS for styling, icons, and out-of-the-box components. The backend is supported by Firebase. Specifically, we use Firebase Firestore as a database and Firebase Functions to deploy cloud functions. We use MonkeyLearn to create a machine-learning-powered API that takes in the description of an event and predicts its category. Finally, we use Twilio to programmatically send text notifications to event participants as events are finalized. 
