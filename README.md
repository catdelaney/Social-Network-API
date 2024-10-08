# Social Network API

## Description
This is a social network web application where users can share thoughts, react to friends' thoughts, and manage a friend list. 

## Walk-Through Video
[Video](https://www.loom.com/share/ef5df916465d4e02b2873217e494b2c7?sid=11098b44-51cf-4932-a892-8c7c0635eca1)

## User Story
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Links
GitHub Repo: https://github.com/catdelaney/Social-Network-API