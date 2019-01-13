# Text sourcing
An online collaborative text editor based on event sourcing architecture.

Working example can be found here: https://text-sourcing.tomasz-rewak.com/

Everything here is written from a scratch: including the text editor as well as the event sourcing logic on the server and the client sides.

# About the project

This text editor enables multiple people to edit the same text file at the same time. 
All users should be even able to edit the same line without any input drops.  

This app doesn't send the entire content of the file between users after each change is made, but rather just basic events.
Base on those events and the initial state of the document each client should be able to recreate the current state of the document.
Event management is not only limited to simple state transformations. Event history is also used for undo/redo operations.
The order of events is synchronized based no the server's internal clock so that the impact of communication delay can be neutralized.

# Technology

This project is created using javascript (language), socket.io (for the clinet-server communication) and react (a frontend framework).

# Disclaimer

It's just a demo that I've created as a pet project. 
But if you I've found any bugs in it, please, let me know.
