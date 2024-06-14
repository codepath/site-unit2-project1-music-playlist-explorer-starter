## Unit 2 Assignment: Music Playlist Explorer

Submitted by: **Tessa Orozco**

Estimated time spent: **22** hours spent in total

Deployed Application (optional): [Music Playlist Explorer Deployed Site](ADD_LINK_HERE)

### Application Features

#### CORE FEATURES

- [ x] **Display Playlists**
  - [ x] Dynamically render playlists on the homepage using JavaScript.
  - [ x] Fetch data from a provided JSON file and use it to create interactive playlist tiles.
  - [ x] Each title should display the playlist's cover image, name, creator, and like count.

- [x ] **Playlist Details**
  - [x ] Create a modal view that displays detailed information about a playlist when a user clicks on a playlist tile.
  - [x ] The modal should show the playlist's cover image, name, creator, and a list of songs, including their titles, artists, and durations.

- [x ] **Like Playlists**
  - [x ] Implement functionality to allow users to like playlists by clicking a heart icon on each playlist tile.
  - [x ] Update the like count on the playlist tile when a playlist is liked or unliked.

- [x ] **Shuffle Songs**
  - [x ] Enable users to shuffle the songs within a playlist using a shuffle button in the playlist detail modal.
  - [x ] Rearrange the songs in the modal view when the shuffle button is clicked.

#### STRETCH FEATURES

- [ ] **Add New Playlists**
  - [ ] Allow users to create new playlists.
  - [ ] Users can input playlist name, creator, and add multiple songs with details like title, artist, and duration.

- [ ] **Edit Existing Playlists**
  - [ ] Enable users to modify the details of existing playlists.
  - [ ] Add an edit button to each playlist tile.
  - [ ] Users can update the name, creator, and songs of the playlist.

- [ x] **Delete Playlists**
  - [x ] Add a delete button to each playlist tile.
  - [ x] When clicked, the playlist is removed from the display and data model.

- [ x] **Search Functionality**
  - [ x] Implement a search bar that allows users to filter playlists by name or creator.

- [ ] **Sorting Options**
  - [ ] Implement a dropdown or button options that allow users to sort the playlist by name, number of likes, or date added.

### Walkthrough Video

`TODO://` https://www.loom.com/share/2cb2227399734b6e813236ace14652a3?sid=7f858a50-ad92-481d-9418-0021ca994aaf

`ADD_EMBEDDED_CODE_HERE`

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Yes, the topics discussed in the labs helped me complete the assignment. Specifically, the tomato timer lab helped me understand how to use javascript to handle events and make the website more dynamic. There was no feature I felt particularly unprepared to complete, I felt I had the tools to complete all of them. However, rendering the playlists from the json file was initially more challenging. 
I was also unprepared on uploading the video file to github as I keep running into an error saying github does not allow the file size.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time I would take the opportunity to clean up my code more. I had a lot of styling in different places which became confusing after a while. I would have also wanted to add the remaining stretch features such as adding a new playlist.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

My project demo went well and all my features worked as expected. However I was still in the middle of working on my search feature. I originally made my search feature so that it searches upon clicking enter and I was in the process of adding a button to go back to view all playlists. However, I saw that my peers has implemented search such that the page searches upon key up. This way all the playlists can be seen by backspacing the search bar completely, removing the need to add a button to go back. This saved me time on continuing to work on my project. I also saw that another one of my peers had a pixelated background. This inspired me to be even more creative with styling moving forward and adding more dimension to my websites.

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Bryan helped me spot a bug on the third day of work that I had been stuck on for a while. He was very helpful and took the time to look through my code with me and spotted that I was accessing the json version of an element rather than the html version which is why my changes were not showing up on the website.
