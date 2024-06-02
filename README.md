# NewsArticlesClient
News Articles application written using React and typescript


## Running Instructions using docker container
This Frontend server wraped up as an docker image runs on nginx server and saved at: https://hub.docker.com/r/barper/news-articles-client
Run the following steps to run it as a docker container locally:
* Prerequisit - verify you have docker engine installed locally.

1. From your terminal, run the command: "docker pull barper/news-articles-client".
2. run "docker run -p 80:80 barper/news-articles-client".
3. Open a browser and navigate to http://localhost:80 or http://127.0.0.1:80 (you can omit the port number)
