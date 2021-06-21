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
