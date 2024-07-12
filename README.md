# Multi-Step Form Project

This project is a multi-step form built with React. It includes three steps to collect user information and demonstrates the use of state management, validation, and data persistence using localStorage.

## Folder Structure

multi-step-form/
├── node_modules/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── Form.js
│ │ ├── Step1.js
│ │ ├── Step2.js
│ │ ├── Step3.js
│ │ └── Navigation.js
│ ├── hooks/
│ │ └── useForm.js
│ ├── styles/
│ │ └── style.css
│ ├── App.js
│ ├── index.js
│ └── ...
├── .gitignore
├── package.json
├── package-lock.json
└── README.md


## Setup Instructions

1. **Initialize the project**:

   ```bash
   npx create-react-app multi-step-form
   ```

2. **Install Dependencies:**:

    ```
    cd multi-step-form
    ```
   ```
    npm install
    ```

4. **Start the Development Server**:

```
    npm start
```

## Components

### Form.js
The main form component managing the state and steps of the multi-step form.

### Step1.js
Collects personal information (name, email, phone).

### Step2.js
Collects address information (address line 1, address line 2, city, state, zip).

### Step3.js
Displays a confirmation of the entered information.

### Navigation.js
Handles navigation between the steps (Next, Back, Submit).

## Hooks

### useForm.js
A custom hook to manage form data and persist it in localStorage.

## Styles

### style.css
CSS file for styling the form components.

## Notes

- The project uses the latest React 18 APIs, including `createRoot` from `react-dom/client`.
- Ensure that the execution policy on your system allows running npm scripts by setting the execution policy to `RemoteSigned` or `Unrestricted` if you encounter issues.
- Data entered in the form is saved in `localStorage` and retrieved on component mount to provide a seamless user experience.


## Hosted Url- 

   ```
   
   ```


