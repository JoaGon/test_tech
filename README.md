# Create and deploy a Node.js React application


React is a popular framework for creating user interfaces in modular components. In this sample application, you will create a web application using Express and React to serve web pages in Node.js, complete with standard best practices, including a service to get the UTC time from 2 inputs, dato1=18:31:45, dato2=-3 and the response will be:

```bash
{
      "response": {
                    "time": "18:43:00",
                    "timezone": "utc"
      }
}

```
## Installation
This application is separated both the service and the client and 2 folders: backend (service) and frontend (client).
The first thing is to install all the dependencies

Please enter the service

```bash
cd backend
npm install
```
In the same way for the client

```bash
cd frontend
npm install
```
Then make sure you are at the root of the directory

```bash
cd / test_tech
npm run dev

```
If everything worked, it will automatically open the page of your browser running the React client


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
