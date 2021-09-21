# Project Overview

## Project Name

Chromatica

## Project Description

An app that helps you pick limited color palettes.

## Wireframes

Mobile Home
![chromatica-mobile-home (1)](https://user-images.githubusercontent.com/36183361/134074233-df0f240f-a9ac-4d6e-ad69-66354a1d2f9d.png)

Mobile Formpage
![chromatica-mobile-formpage drawio](https://user-images.githubusercontent.com/36183361/134067619-8861f067-14d2-4c2c-bd7e-ead690f12c80.png)

Desktop Home
![chromatica-desktop-home](https://user-images.githubusercontent.com/36183361/134069454-c520e2cb-831a-4416-a92b-a6f59bd7a1b9.png)

Desktop Create Formpage
![chromatica-desktop-create-form](https://user-images.githubusercontent.com/36183361/134071415-83160b30-94e8-41c4-8eb7-99a11b6db60f.png)

Desktop Generate Formpage (Post MVP)
![chromatic-desktop-generator-form](https://user-images.githubusercontent.com/36183361/134073303-7b5083d0-8198-49e4-a140-12fdfefdab53.png)

## Component Hierarchy

![chromatica-hierarchy](https://user-images.githubusercontent.com/36183361/134073901-fc89a728-f3d6-46ad-9ee2-23e0efe5b5e5.png)


## API and Data Sample

```
    "records": [
        {
            "id": "recCbfksc1Im7hU5w",
            "fields": {
                "hex2": "7A9B76",
                "hex3": "160C28",
                "color3": "Dark Purple",
                "color1": "Antique White",
                "username": "rachel",
                "hex1": "FCEBDA",
                "color2": "Russian Green",
                "palette": "chromatica color theme"
            },
            "createdTime": "2021-09-20T17:25:36.000Z"
        }
```

### MVP/PostMVP

The functionality will then be divided into two separate lists: MVP and PostMVP.  Carefully decide what is placed into your MVP, as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Display created color palettes on home page
- Create, edit or delete a palette
- Use color picker/color API to allow user to select colors for their palette
- Phone + tablet sizes
    * 320px — 480px: Mobile devices.
    * 481px — 768px: iPads, Tablets.

#### PostMVP  

- Copy btn for each hexcode/rgb in a palette
- Choose a type of color scheme (monochromatic, complimentary, etc) and generate a new palette
- Small screen + large screen sizes
    * 769px — 1024px: Small screens, laptops.
    * 1025px — 1200px: Desktops, large screens.
- Nice transitions and styling

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create Components | H | 3hrs|  |  |
| Setup GET request in App component | H | 1hr |  |  |
| Create Color Picker | H | 3hrs |  |  |
| Create Palette Component | H | 2hrs |  |  |
| Create Edit Component | H | 3hrs |  |  |
| Add Edit Form | H | 1hrs |  |  |
| Create New Component | H | 2hrs |  |  |
| Add New Form | H | 1hrs |  |  |
| Add Header/Nav/Footer | H | 1hrs |  |  |
| Media Query Mobile | H | 3hrs |  |  |
| Media Query iPad | H | 2hrs |  |  |
| Styling App | M | 3hrs |  |  |
| Styling Components | M | 3hrs |  |  |
| grab random color palette from colorAPI | L | 2hrs |  |  |
| add generated palette to new form | L | 2hrs |  |  |
| Copy/Paste buttons | L | 2hrs |  |  |
| Test functionality | M | 3hrs |  |  |
| Transitions | L | 3hrs |  |  |
| Keep README updated | L | 1hrs |  |  |
| Code Cleanup | H | 1hr|  |  |
| Total | H | 42hrs|  |  |

## SWOT Analysis

### Strengths: I feel very confident in using React and I'm investing more time into the planning and organization than my last project.

### Weaknesses: Combining useage of color API + airtable

### Opportunities: Build smallest to biggest

### Threats: Styling. I need to push my styling priorities to post-MVP in order to really nail down the functionality before MVP is due.
