# Adnan-Lab03   
**Name:** Adnan Sheet

**Deployed Server URL:**` https://adnan-lab03.herokuapp.com/`

**Name of the Endpoint:**

**Client**` http://localhost:5000/`

**Server**` https://adnan-lab03.herokuapp.com/` 


In this lab we are going to create a web application which will have two path client and server. In server side we used express.js to create the server. Our main goal is to count the word frequency from a given string. For this we created a module called extractFrequency.js and imported it in our server.js file. In extractFrequency module we used an object ot store. Firstly we splited the sentence into words and then we looped in that array of word. In the loop we counted the frequency and stored it in the object. After finishing the count we returned the object. In the server.js file we got the frequency array as a result. And send it as a response when the client makes a post request with a sentence given in the request body. In client side we used axios to make the api call to the server side. We also used ejs as view engine. Ejs is embeded Javascript template which is used to manipulate the default html page. Getting the result from the api we passed the result to the ejs to render a table in the client side. Finally we hosted the server part in heroku which can be accessed from  `https://adnan-lab03.herokuapp.com/` this url.