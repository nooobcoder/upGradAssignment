### Final Preview of the app
[](https://s6.gifyu.com/images/Site-Navigation.gif)

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


# Part B: Creating list of blogs

In this section, we would be creating a page called "bloglist.html" which would display the list of all blog posts.

Relevant files to work on:  **bloglist.html, bloglist.css, bloglist.js**

Recall that in the previous section, you created an "All Posts" button on the centre of the screen which when clicked, would redirect to a "bloglist.html" page. We would be designing this page (“bloglist.html”) in this section. The final outcome of creating this page would be like this:-

**![](https://images.upgrad.com/07bf0cae-6530-480e-9e00-71c2d2be3f9b-bloglist.png)**

Some very important things to keep in mind:

1. You must strictly keep HTML, CSS and Javascript portion of the code separate from each other (in separate files)

2. You must refer to the "bloglist.css" file inside the "css" folder and define all your css inside that file (for the "bloglist.html" file)

3. You must refer to the "bloglist.js" file inside the "js" folder and define all your Javascript inside that file (for the "bloglist.html" file)

4. Unless explicitly mentioned (for example, at some places, it might be mentioned that a certain button MUST be red in colour), you can customize your own CSS for any HTML element you want. However, please keep in mind that the overall appearance of any HTML page must be very similar (if not identical) to the outcome of the screen mentioned prior of each part of the assignment. This means that if certain elements are placed towards the top-right of the screen in the final outcome figure, they MUST be placed at the top-right corner ONLY, failing to do so will lead to deduction of marks. Note that there might be multiple ways in which a certain CSS effect can be achieved. So the exact syntax of the CSS code does not matter, but the overall appearance of any given page must be very similar to the expected outcome.

Let us move step-by-step to create this page:-

1. Write the header class into our page.

Carefully place the code for the header class which you created in the last section of the assignment. Basically, we want the header part of the page to be exactly identical to the header portion which we created for the last section.

2. Below the header, you will create a segment which will consist of 5 identical blog posts and place them next to each other in pairs. Each blog post will display the username of the user towards the left (which will be already provided). Keep the background color of the page as orange. One such blog post without any CSS has been provided to you. You need to make the new blog post as the copy of this blog post. We would suggest that you modify this blog post first and then copy paste this blog post to the new one.

a) Towards the right of the username, you need to  **partially** display the text of the blog. Note that you must not display the entire text of the blog on this page itself. (You must search the Internet to find out a way such that for each blog, the text is only partially displayed on this page.

**A hint:** there is a CSS display property which enables you to partially hide content. (You can search on the Internet about it)

**You need not alter the sample text already specified in the blog author/title/body. You only need to change its appearance.**

b) You need to add a "trash" icon towards the top-right of each blog post (inside each element of the "post-content" class) like this:

**![](https://images.upgrad.com/cc27bd2b-b823-450f-a8e8-6d251b5671de-icon.png)**

On clicking the trash icon, it should display the following modal like this:-

**![](https://images.upgrad.com/2846eb61-b649-4f73-8f35-62a020007c7b-delete.png)**

This modal would consist of a red-coloured "Yes" button and a green-coloured "No" button. No action would take place on clicking the "Yes" button. On clicking the "No" button, the modal should disappear and the bloglist page should appear again as it is.

c) You need to adjust the width/height/flex/margin/other properties of each blog post carefully such that only two of such blog posts appear in one line.

Additionally, you need to make the display of these boxes flexible so that when you change the display size of the screen, the blog posts adjust their placement automatically. This means that whatever screen size we reduce our screen to, there should be exactly two blog posts in each row. They should adjust their height/width automatically when the screen is resized. For example, if I resize my window, the blog posts should get adjusted on their own like this:

**![](https://images.upgrad.com/7a36d09b-1b33-4ba8-a89a-b5edaf899eec-adjust.png)**

You must search online to find out a way to display only two blog posts at a time such that every new post either gets added to the right or below the current post.

d) There is a small icon/text "..." next to each post like this:

**![](https://images.upgrad.com/0c9402b7-5243-4c00-9699-0c6379839709-icon2.png)**

On clicking this icon/text, it should open the individual blog post. As of now, what you can do, is redirect it to a new page called as "post.html" whenever the "..." button is clicked.

(You can keep this page empty as of now, and we will fill it later in the next section of our assignment.)



# Part C: Creating Blog Post

In this section, you would be creating the functionality of the "post.html" page.

Relevant files to work on:  **post.html, post.css, post.js**

This page will consist of the individual blog post of our blogging website. The final outcome of this page would look like this:

**Image 1:**

**![](https://images.upgrad.com/12adcd10-a12c-46c8-8fe8-e33c5037c1ac-post1.png)**

**Image 2:**

![](https://images.upgrad.com/040e39ab-589c-48a7-b128-c1613045b6ec-post2.png)

Some very important things to keep in mind:

1. You must strictly keep HTML, CSS and Javascript portion of the code separate from each other.

2. You must refer to the "post.css" file inside the "css" folder and define all your css inside that file for the "post.html" file

3. You must refer to the "post.js" file inside the "js" folder and define all your Javascript inside that file for the "post.html" file

4. Unless explicitly mentioned otherwise (for example, at some places, it might be mentioned that a certain button MUST be red in colour), you can customize your own CSS for any HTML element you want. However, please keep in mind that the overall appearance of any HTML page must be very similar (if not identical) to the outcome of the screen mentioned prior of each part of the assignment. This means that if certain elements are placed towards the top-right of the screen in the final outcome figure, they MUST be placed at the top-right corner ONLY, failing to do so will lead to deduction of marks. Note that there might be multiple ways in which a certain CSS effect can be achieved. So the exact syntax of the CSS code does not matter, but the overall appearance of any given page must be very similar to the expected outcome.

5. Write the header class into our page.

Carefully place the code for the header class which you created in the last section of the assignment. Basically, we want the header part of the page to be exactly identical to the header portion which we created for the last section.

a) You need to add functionality to the "Edit" button that is positioned towards the top-right corner of the blog body, which would look like this:

**![](https://images.upgrad.com/368be502-edd2-4ee6-8093-35944b66d33e-edit.png)**

When clicked, this edit button would make the blog body editable like this:

**![](https://images.upgrad.com/6d1e1230-aa3d-4ca8-b2e6-f30d1e8bc523-editable.png)**

Note that when the blog body and title are in the “editable” mode, there should be a cursor which would enable the user to edit/erase/add any text he/she wants in it.

While the blog body is in the editable mode, a button called "Save" should be displayed in place of the original "Edit" button like this:

**![](https://images.upgrad.com/ea0acdd0-7aa7-4473-a8ee-2b7275eb6ace-save.png)**

The blog body/title should be placed inside a textarea when it is in the Edit mode.

You need not add any icon/picture in the Save button and just a written text “Save” would be enough.

This Edit button need not necessarily be on the same horizontal line as the blog author name.

While the editable mode is on, the user should be able to edit the text of the blog. When the user is done editing the blog body, he should click on the "Save" button. On clicking the "Save" button, the blog should be saved as it is (new changes which the user has done must be saved). The blog body should reflect the changes that we made in edit mode. After the edit mode is over, the blog body/title should no longer be editable and the "Edit" button should reappear (in place of the "Save" button).

b) Below the body of the blog, there is a "Like" button. In the default state, a statement called "Be the first one to like this!" is displayed just below the "Like" button.

**![](https://images.upgrad.com/7089354e-49d9-4a07-8a9a-8cbca6ad9976-like.png)**

On liking the blog for the first time, this statement must be updated to "1 person likes this!" and the "Like" button must morphe into a button "Liked!" as shown in the figure.

**![](https://images.upgrad.com/cf56c65f-32e2-4a7c-a130-0bd267f1cc3b-liked.png)**

You need not add any icon/picture in the Like button and just a written text “Liked” would be enough.

On liking the blog for the first time, this statement must be updated to "1 person likes this!" and the "Like" button must morphe into a button "Liked!" as shown in the figure.

**![](https://images.upgrad.com/c7b8e28b-7e36-415a-b6d2-b9f9235be638-3likes.png)**

c) Below the "Like" button, there is an input box with a placeholder text "Leave a comment...". The user can type his comments in this box.

**![](https://images.upgrad.com/d37d0f44-854d-4860-b93c-2f44be1af93b-comment_box.png)**

d) Below this box, there is a red coloured "Comment" button, which when clicked must display the typed comment inside the "All Comments" section.

**![](https://images.upgrad.com/e6662b15-2756-4593-8390-0b58e6cd7041-comment_button.png)**

Note that every new comment should be added at the TOP as explained in the figure. You can style the comment section in the way you want, just keeping in mind that individual comments have white as a background and are separated from each other. The background of the entire comment box should be grey as shown in the figure.

**![](https://images.upgrad.com/8ded6081-7048-4bee-9af7-b619acbdf19a-comment_order.png)**