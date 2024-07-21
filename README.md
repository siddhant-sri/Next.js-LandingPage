# Landing Page Project
This project is a responsive and SEO-friendly landing page built with Next.js and Tailwind CSS. The landing page includes several sections like header, hero, features, team, FAQ, and footer, designed to provide a comprehensive overview of the services offered.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Components](#components)
- [SEO Optimization](#seo-optimization)
- [Smooth Scrolling](#smooth-scrolling)
- [Testing and Deployment](#testing)
- [Project Structure](project-structure)
- [Screenshots](#screenshots)

## Technologies Used

- **Frontend**: Next.js, TailwindCSS, ShadCn/UI

## Features

- Responsive design using Tailwind CSS
- Smooth scrolling for better user experience
- SEO optimization with meta tags and semantic HTML
- Optimized images with Next.js Image component
- Sections for hero, features, team, FAQ, and contact


## Installation

To get started with the project, follow these steps:

1. Clone the repository:
  ```bash
   git clone https://github.com/your-username/landing-page-project.git
   ```
2. Navigate to the project directory:

  ```bash
   cd task-manager
   ```
3. Install dependencies:
  ```bash
   npm install
   ```

4. Run the development server:
  ```bash
   npm run dev
   ```
5. Open your browser and go to `http://localhost:3000` to see the landing page.



## Components

### Header
The header includes navigation links and contact information, using Tailwind CSS for styling.

### Hero
The hero section provides a brief introduction and a call-to-action button.

### Features
The features section outlines the key offerings, displayed in cards for a clean and organized layout.

### Team
The team section showcases team members and their achievements, with statistics on projects and experience.

### FAQ
The FAQ section provides answers to common questions, using an accordion component for expandable content.

### Footer
The footer includes contact information and a logo, with a statement about global availability.


## SEO Optimization

## Meta Tags
Added meta tags for title, description, and keywords in the Head component.

## Semantic HTML
 Used semantic HTML elements to improve SEO and accessibility.

## Image Optimization
Used Next.js Image component with appropriate alt attributes for images.


## Smooth Scrolling
Enabled smooth scrolling via CSS in the global styles:

```bash
html {
  scroll-behavior: smooth;
}
```


## Testing and Deployment

### Testing
Ensure the page is responsive and performs well across different devices and browsers. Use tools like Chrome Dev Tools for performance, accessibility, and SEO audits.

### Deployment
Deploy the application to Netlify for seamless integration with Next.js.



## Project Structure
Project Structure of the landing page is similar to the below structure:

```bash
landing-page-project/
├── public/
│   ├── logo.png
│   ├── footerlogo.png
│   ├── team.png
│   ├── stage.png
│   ├── stages.png
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Features.js
│   │   ├── Team.js
│   │   ├── FAQ.js
│   │   ├── Footer.js
│   ├── pages/
│   │   ├── index.js
│   ├── styles/
│   │   ├── globals.css
│   ├── lib/
│   │   ├── style.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── README.md

```

## Additional Information

## Project Link
The deployed project can be viewed live [here](https://siddhant-sri-landingpage.netlify.app/).

## Screenshots

![Landing-Page](https://github.com/user-attachments/assets/5a7c5915-0511-4559-9acd-447d8737768a)





