# Assignment - Course 2

## Project Brief

Till now, you have learnt about the basics of HTML, CSS and JavaScript and fiddled around with some of the notable features of each of these languages. In the upcoming project, you would be creating the front-end of a blogging website using ==HTML, CSS and JavaScript==. This blogging website enables to ==register a new user==, ==create his/her own posts, edit an already existing post, add comments on a post, like a post==, etc.

## Goal

With the Blogging website, you can put into practice the skills and knowledge that you learned while understanding HTML, CSS and JavaScript. You will be given certain guidelines that will help you create this application. These guidelines will provide the proper instructions as to how you should create the front-end of this webiste. You will be able to put into practice all that you've learned about HTML, CSS and JavaScript in this course.

Overall, developing this website will help you understand how the front-end of real-world websites is created while following the best software development practices.

Towards the end of this project, you would have independently created the front-end of a blogging website! Also, after developing this application, you will feel confident in building the user interface of any website.

## Delivery

Note that the project is divided into three parts where each part represents a page in the website. All the pages have their independent project statements and evaluation rubrics. Your website will be evaluated for all the three parts.

## Important Points

1. You will be given a zipped folder **(look for it at the end of this segment)** containing the basic folder structure of your blogging project.

**Please note that you must not alter the overall folder structure of the blogging project, otherwise your project might be wrongly evaluated.** The root directory will consist of an "index.html" file which will be the homepage of your blogging website.

2. The root folder must consist of the folders named **html, styles, and scripts**. All your CSS files must be referenced from and kept inside the styles folder. Similarly, all the HTML files (except "index.html" file) must be placed inside the html folder. All the JavaScript files must be referenced from the scripts folder. You would need to create these folders and segregate your files as per the given guidelines.

3. The root folder consists of a folder named **images**. All the images used in the website should reside in this folder. Note that you are already provided with all the images inside this folder which will be used in the website.

4. You can use HTML5, CSS3, Bootstrap, JavaScript, FontAwesome icons, and Google Fonts.

## Version Control Best Practices

### You must develop this wesbite 'individually'.

You should create a master repository for the application, and push the initial code stub (starter code provided to you at the end of this segment) to this master repository.

Please follow the following best practices when using Git and GitHub to strive towards becoming a better software engineer:

-   Commit your code often and frequently.

-   Make small and incremental commits.

-   Make sure your code works before committing it.

-   Write brief and relevant commit messages.

# Part A: Creating the Homepage

Relevant files to work on: index.html, index.js, header.js, index.css, header.css

Once you download the zipped folder, you will see a file called "index.html" at the root level of that folder. You must open that file and add your code in that file.

This "index.html" file will be the file of your homepage. The final outcome of creating your homepage should look like this:-

![](https://images.upgrad.com/8232e452-e30d-4b57-9874-d600b2b02cdd-home.png)

Some very important things to keep in mind:

1. You must strictly keep HTML, CSS and Javascript portion of the code separate from each other (in separate files)

2. You must refer to the "index.css" file inside the "css" folder and define all your css inside that file (for the "index.html" file)

3. You must refer to the "index.js" file inside the "js" folder and define all your Javascript inside that file (for the "index.html" file)

4. Unless explicitly mentioned otherwise (for example, at some places, it might be mentioned that a certain button MUST be red in colour), you can customize your own CSS for any HTML element you want. However, please keep in mind that the overall appearance of any HTML page must be very similar (if not identical) to the outcome of the screen mentioned prior of each part of the assignment. This means that if certain elements are placed towards the top-right of the screen in the final outcome figure, they MUST be placed at the top-right corner ONLY, failing to do so will lead to deduction of marks. Note that there might be multiple ways in which a certain CSS effect can be achieved. So the exact syntax of the CSS code does not matter, but the overall appearance of any given page must be very similar to the expected outcome.

Let us now begin our step by step process of creating our homepage.

Our homepage will consist of 2 main segments:-

a) **Header** = You will be re-using it at many other places in the assignment. Hence, we will keep it as a separate class altogether

This will be the header portion which should look like this:

![Header-Image](https://images.upgrad.com/0a0ec6ce-a90f-41ea-a9d2-d0a9da283d8b-header.png)

You are already provided with the Scribbler Logo and The tagline. You've also been provided with the buttons. You need to add functionality to them.

You will need to create a total of 2 **modals** for the header. You must find on the Internet ways to create a simple basic modal. You can use the below link to find a simple modal code:

You have been provided with the Create Post Modal in the Stub provided to you. You can reference that for further information.

<https://www.w3schools.com/howto/howto_css_modals.asp>

**Dont forget to keep different div id's for the different modals, so that they are distinct from one another!**

b) The segment called "**postButtons**" consist of 2 buttons -

"**All Posts**" and

"**Create Post**"

![](https://images.upgrad.com/08da3e14-0a1f-43cd-85e5-c9cd37b4e2c1-buttons.png)

Let us follow some steps to modify our header inside the `<div class="header">` :-

1. Inside the `<div class="header">`, you need to create:-
1. On clicking the **"Sign Up"** button, a modal should appear on screen. **(You must search on the Internet yourself how you can create a simple modal or you can take a reference from the 'Create Post' modal already created)**. You can use the below link to find a simple modal code:

-   [Modal Code](https://www.w3schools.com/howto/howto_css_modals.asp)

The modal corresponding to the "Sign Up" button must look like this:
![](https://images.upgrad.com/03cd5684-8860-4838-95f1-da7cb18124fb-signup.png)

a) The title of the modal should be "Get Started". It should be displayed in the center of the modal and you can use any font you wish. You should also display a tiny cross button towards the top-right, which when clicked, would close this modal.

b) This modal would consist of 4 input boxes - for "Full Name", "Username", "Password" and "Confirm Password". Note that the input type of each of these should be - text, text, password, password - respectively.

Also note that when nothing is typed into the input boxes yet, they should display a placeholder with the text "Enter Full Name", "Enter Username", "Enter Password" & "Confirm Password" respectively.

You can use any font you want for this.

c) Below these placeholders, you must create a green-coloured "Sign Up" button. Note that you must make sure that the above 4 input fields are mandatorily filled in by the user (the input fields must be made "required"), without which he/she cannot proceed with clicking the "Sign Up" button. For example, when a user tries to proceed without filling all the fields, such an indication would be displayed:

![](https://images.upgrad.com/1891e7fb-bb03-4fdc-8913-660ab818ee3a-error.png)

Note that you can do this simply by making all the input fields as “required”

You do not need to define any specific action on clicking the Sign Up button.

1. On clicking the "Sign In" button, a modal should appear on screen. The modal corresponding to the "Sign In" button must look like this:

![](https://images.upgrad.com/728dcb02-e1a4-4c0b-874b-e7db5abcdd11-signin.png)
a) The title of the modal should be "Welcome Back!". You should also display a tiny cross button towards the top-right, which when clicked, would close this modal.

b) This modal would consist of 2 input boxes - for "Username" and "Password". Note that the input type of each of these should be - text and password - respectively.

Note that when nothing is typed into the input boxes yet, they should display a placeholder with the text "Enter Username" and "Enter Password" respectively.

c) Below these placeholders, you must create a green-coloured "Sign In" button. Note that you must make sure that the above 2 input fields are mandatorily filled in by the user (the input fields must be made "required"), without which he/she cannot proceed with clicking the "Sign In" button.

You need not define any specific action on clicking the Sign In button.

d) Below the "Sign In" button, you must display a text called "Not a member? Sign Up". The "Not a member?" portion of the text should be in black, whereas the "Sign Up" portion of the text should be a hyperlink, which when clicked, would hide the sign in modal and display the sign-up modal which you created in the previous segment like this:

**![](https://images.upgrad.com/d3829316-6e87-4119-b72b-693bc548e3dd-signup.png)**

**Centre Buttons**

**![](https://images.upgrad.com/7d14510d-9381-4645-913f-66db0814b674-buttons.png)**

1. On clicking the **"All Posts"** button, it should redirect to a file called "bloglist.html" which will be placed inside our html folder. (For now, this will be an empty page, which we would create fully in the next part of our assignment)

2. On clicking the "Create Post" button, it should display a modal like this:

a) A narrow input box for "Title:"

b) The title of the modal should be "Pen Your Post" as shown in the image below

c) A text area for "Content:"

d) Below them, create a green-coloured "Create" button at the centre which at the present moment, would not do anything when you click on it (later on, we will write an API request for posting a new blog article on the backend, but for now, you don't need to worry about it). The modal should look like this:

**![](https://images.upgrad.com/224af8c8-027e-4731-bfbd-d956ebf12750-create.png)**

e) Also create a tiny cross button at the top-right corner of the modal, which when clicked, would close the modal.
