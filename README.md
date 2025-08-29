# XYZCode94 College HELPDESK

A full-stack web application built to help manage college applicant data and resources. It uses React + Vite for the frontend and Node.js + Express + MongoDB for the backend.

## Live Links
Frontend: [https://your-frontend-url.vercel.app](https://your-frontend-url.vercel.app)  
Backend: [https://your-backend-url.onrender.com](https://your-backend-url.onrender.com)  
*Replace with actual deployed URLs.*

## Project Structure
xyzcode94-collage_helpdesk/  
├── README.md  
├── Backend/  
│   ├── package.json  
│   ├── render.yaml  
│   └── src/  
│       ├── app.js  
│       ├── constants.js  
│       ├── index.js  
│       ├── controllers/track.js  
│       ├── db/index.js  
│       ├── models/track.model.js  
│       ├── routes/track.route.js  
│       └── utils/ApiError.js, ApiResponse.js, asyncHandler.js  
└── Frontend/  
    ├── README.md  
    ├── eslint.config.js  
    ├── index.html  
    ├── package.json  
    ├── vercel.json  
    ├── vite.config.js  
    └── src/  
        ├── App.css, App.jsx, index.css, main.jsx  
        └── assets/  
            ├── components: admission.jsx, department.jsx, footer.jsx, landing.jsx, navbar.jsx, NewApplicants.jsx, resources.jsx, scroll.jsx  
            └── css: adm.css, departments.css, resources.css, style.css

---
```mermaid
graph TD

    15["MongoDB Database<br>NoSQL Database"]
    16["Render Deployment<br>PaaS"]
    19["User<br>External Actor"]
    3["User<br>External Actor"]
    31["MongoDB Database<br>NoSQL Database"]
    32["Render Deployment<br>PaaS"]
    subgraph 1["Backend API Service<br>Node.js / Express.js"]
        10["API Routes<br>Express.js"]
        11["Controllers<br>Node.js"]
        12["Mongoose Models<br>Mongoose"]
        13["Database Connection<br>Mongoose"]
        14["Utility Functions<br>JavaScript"]
        8["index.js<br>Node.js"]
        9["app.js<br>Express.js"]
        %% Edges at this level (grouped by source)
        8["index.js<br>Node.js"] -->|starts| 9["app.js<br>Express.js"]
        9["app.js<br>Express.js"] -->|defines| 10["API Routes<br>Express.js"]
        10["API Routes<br>Express.js"] -->|calls| 11["Controllers<br>Node.js"]
        11["Controllers<br>Node.js"] -->|interacts with| 12["Mongoose Models<br>Mongoose"]
        11["Controllers<br>Node.js"] -->|uses| 14["Utility Functions<br>JavaScript"]
        12["Mongoose Models<br>Mongoose"] -->|connects via| 13["Database Connection<br>Mongoose"]
    end
    subgraph 17["Backend API Service<br>Node.js / Express.js"]
        24["index.js<br>Node.js"]
        25["app.js<br>Express.js"]
        26["API Routes<br>Express.js"]
        27["Controllers<br>Node.js"]
        28["Mongoose Models<br>Mongoose"]
        29["Database Connection<br>Mongoose"]
        30["Utility Functions<br>JavaScript"]
        %% Edges at this level (grouped by source)
        24["index.js<br>Node.js"] -->|starts| 25["app.js<br>Express.js"]
        25["app.js<br>Express.js"] -->|defines| 26["API Routes<br>Express.js"]
        26["API Routes<br>Express.js"] -->|calls| 27["Controllers<br>Node.js"]
        27["Controllers<br>Node.js"] -->|interacts with| 28["Mongoose Models<br>Mongoose"]
        27["Controllers<br>Node.js"] -->|uses| 30["Utility Functions<br>JavaScript"]
        28["Mongoose Models<br>Mongoose"] -->|connects via| 29["Database Connection<br>Mongoose"]
    end
    subgraph 18["Frontend Application<br>React.js / Vite"]
        20["main.jsx<br>React / JavaScript"]
        21["App.jsx<br>React / JavaScript"]
        22["UI Components<br>React / JavaScript"]
        23["CSS Styles<br>CSS"]
        %% Edges at this level (grouped by source)
        20["main.jsx<br>React / JavaScript"] -->|mounts| 21["App.jsx<br>React / JavaScript"]
        22["UI Components<br>React / JavaScript"] -->|renders| 21["App.jsx<br>React / JavaScript"]
        21["App.jsx<br>React / JavaScript"] -->|uses| 22["UI Components<br>React / JavaScript"]
        21["App.jsx<br>React / JavaScript"] -->|applies| 23["CSS Styles<br>CSS"]
    end
    subgraph 2["Frontend Application<br>React.js / Vite"]
        4["main.jsx<br>React / JavaScript"]
        5["App.jsx<br>React / JavaScript"]
        6["UI Components<br>React / JavaScript"]
        7["CSS Styles<br>CSS"]
        %% Edges at this level (grouped by source)
        4["main.jsx<br>React / JavaScript"] -->|mounts| 5["App.jsx<br>React / JavaScript"]
        6["UI Components<br>React / JavaScript"] -->|renders| 5["App.jsx<br>React / JavaScript"]
        5["App.jsx<br>React / JavaScript"] -->|uses| 6["UI Components<br>React / JavaScript"]
        5["App.jsx<br>React / JavaScript"] -->|applies| 7["CSS Styles<br>CSS"]
    end
    %% Edges at this level (grouped by source)
    2["Frontend Application<br>React.js / Vite"] -->|makes API requests| 1["Backend API Service<br>Node.js / Express.js"]
    3["User<br>External Actor"] -->|interacts with| 2["Frontend Application<br>React.js / Vite"]
    13["Database Connection<br>Mongoose"] -->|manages connection to| 15["MongoDB Database<br>NoSQL Database"]
    1["Backend API Service<br>Node.js / Express.js"] -->|deploys to| 16["Render Deployment<br>PaaS"]
    18["Frontend Application<br>React.js / Vite"] -->|makes API requests| 17["Backend API Service<br>Node.js / Express.js"]
    19["User<br>External Actor"] -->|interacts with| 18["Frontend Application<br>React.js / Vite"]
    29["Database Connection<br>Mongoose"] -->|manages connection to| 31["MongoDB Database<br>NoSQL Database"]
    17["Backend API Service<br>Node.js / Express.js"] -->|deploys to| 32["Render Deployment<br>PaaS"]


```

---


## Run Locally
Backend:  
cd Backend  
npm install  
npm start  
→ http://localhost:5000  

Frontend:  
cd Frontend  
npm install  
npm run dev  
→ http://localhost:5173

## Push to GitHub
git init  
git remote add origin https://github.com/your-username/xyzcode94-collage_helpdesk.git  
git add .  
git commit -m "Initial commit"  
git branch -M main  
git push -u origin main

## Stack
Frontend: React, Vite, CSS  
Backend: Node.js, Express, MongoDB  
Deployment: Vercel (Frontend), Render (Backend)

## License
MIT

## Author
GitHub: [https://github.com/xyzcode94](https://github.com/xyzcode94)
