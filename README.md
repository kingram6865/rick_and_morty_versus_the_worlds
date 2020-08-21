# Project Overview

## Project Name

"Rick & Morty Versus the World(s)...?!"

## Project Description

An animated mudfight between Rick & Morty and a denizen of a world they have visited.
User input selects Rick or Morty and a random generator chooses from 1-5 opponents.
They fling mud at each other. The muddiest person in 20 seconds, or the first person
"mudded 4 times is out"

## API and Data Sample

I'm excited to use the Rick and Morty API, and a game seems like the best use.

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

#### MVP 

- Build app with HTML, CSS, JavaScript
- Use Flexbox for styling
- Access the Rick and Morty API using Axios
- Create at least one media query breakpoint

#### PostMVP  
- Create a drop down list of character names to select
- Display an image of the selected character from the Rick and Morty universe.
- Create a randomized version of character selection with a button
- Add "warning" text animation if Rick or Morty
- Use local storage to save a list of characters selected.

#### Goals
- Monday - Develop the skeleton. Create the HTML and align all of the objects that will contain data.
         Construct the responsive configuration
- Tuesday - Build all of the API calls and connect them with controls; Test the response; Connect images
        to their appropriate containers
- Wednesday - Test again, make sure everythinng is working. Add in one refining feature
- Thursday - Prepare for Presentation

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|August 15-16| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|August 17   | Project Approval        | Complete
|August 18   | Core Application Structure (HTML, CSS, etc.) | Complete
|August 19   | JS Coding, MVP completion  | Complete
|August 20   | Presentation Prep | Complete
|August 21   | Presentations | Incomplete

## Priority Matrix

![alt text](https://res.cloudinary.com/dk8xr0vts/image/upload/c_scale,w_614/v1597654103/Project%201/Priority_Matrix_uspkjf.svg "Priority Matrix")
cd 
## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Build HTML Skeleton | H | 2 hr | 46min | 1hr |
| Retrieve image data not in the API| L | 2 hr | 20min | 20min|
| Organize Layout (CSS) | H | 3 hr  | 30min| 2hrs|
| Organize user Input | M | 4 hrs| 45min | 1hr|
| JS Coding | H | 7 hrs| 24.5hrs | 25 hrs|
| Organize data placement for text data| H | 3 hrs | 3hrs| 3hrs|
| Organize data placement for image data| H | 3 hrs | 20min | 30min|
| CSS Style Refinement      | H | 4hrs | 1hr | 1.5hrs |
| Total                             | H | 30 hrs| 31hrs | 31hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
characterDropDown.addEventListener('change', ()=>{
    destination.innerHTML = ""
    characterDropDown.options[0].disabled = true // Option 0 is a placeholder. Causes error if selected
    let data = getPerson(characterDropDown.value)
    displayInfo(data)
})
```

## Change Log
 - There are too many choices for World (location) so the user interface is a radio selector to choose Rick or Morty, and a spinner to determine the maximum number of opponents. The location will be chosen
 randomly once the user input is complete.
 - Submit button triggers the game
 - Stopped working on a game and scaled back to a simple information display app.
