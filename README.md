# Project Overview

## Project Name

"Rick & Morty Versus the World(s)...?!"

## Project Description

An animated mudfight between Rick & Morty and a denizen of a world they have visited.
User input selects Rick or Morty and a random generator chooses from 3 -10 opponents.
They fling mud at each other. The muddiest person in 20 seconds, or the first person
"mudded 4 times is out"

## API and Data Sample

I'm excited to be using the Rick and Morty API:

https://rickandmortyapi.com/documentation

Sample JSON:
```json
{
    "id": 2,
    "name": "Morty Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5",
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31",
        "https://rickandmortyapi.com/api/episode/32",
        "https://rickandmortyapi.com/api/episode/33",
        "https://rickandmortyapi.com/api/episode/34",
        "https://rickandmortyapi.com/api/episode/35",
        "https://rickandmortyapi.com/api/episode/36",
        "https://rickandmortyapi.com/api/episode/37",
        "https://rickandmortyapi.com/api/episode/38",
        "https://rickandmortyapi.com/api/episode/39",
        "https://rickandmortyapi.com/api/episode/40",
        "https://rickandmortyapi.com/api/episode/41"
    ],
    "url": "https://rickandmortyapi.com/api/character/2",
    "created": "2017-11-04T18:50:21.651Z"
}
```

## Wireframes
![alt text](https://res.cloudinary.com/dk8xr0vts/image/upload/v1597649107/Project%201/project_1_wireframe_tlrkhf.png "Project 1 - Rick & Morty Versus the WORLD(s)...!?")


### MVP/PostMVP

The Project implements HTML, CSS and JavaScript.

As well the project incorporates responsive design so that it can be accessed via mobile, desktop, and tablet in a landscape orientation.

#### MVP 

- Access the Rick and Morty API
- Display an image of Rick or Morty, based on user input
- Allow user to pick a world, or choose to randomly generate a world.
- Allow user to choose a randomly generated range of opponents from 1 to 5 from the selected world.
- Avatars dodge mudballs after throwing mudball.
- Display a title indicating the world where the battle is centered, which is any except earth
- Display a picture of the winner.

#### PostMVP  

- Add Animations of mudballs and fighters moving and dodging
- Add voice sounds, of Rick, Morty, Opponents
- Have background change according to world visited
- Have the speed of the dodging action adjusted based onn how "muddy" opponent is.
- Allow user to "throw" mudballs
- Use local storage to save win/loss record for characters

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|August 15-16| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|August 17   | Project Approval        | Incomplete
|August 18   | Core Application Structure (HTML, CSS, etc.) | Incomplete
|August 19   | JS Coding  | Incomplete
|August 20   | MVP | Incomplete
|August 21   | Presentations | Incomplete

## Priority Matrix

![alt text](https://res.cloudinary.com/dk8xr0vts/image/upload/c_scale,w_614/v1597654103/Project%201/Priority_Matrix_uspkjf.svg "Priority Matrix")

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Build HTML Skeleton | H | 1 hr |  |  |
| Retrieve image data not in the API| L | 1 hr
| Organize Layout (CSS) | H | 3 hr  | ||
| Organize user Input | M | 3 hrs|  |  |
| Generate API Calls for game elements | H | 2 hrs|  |  |
| Organize data placement for text data| H | 2 hrs | |
| Organize data placement for image data| H | 2 hrs |  |
| Create Algorithms for fight data      | H | 5 hrs |  |  |
| Total                             | H | 19 hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
