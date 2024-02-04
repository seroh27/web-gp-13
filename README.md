# WEB-gp-13
Erfan Jafari 400104891<br>
Sero Hartounian 400170374<br>
Soroush Pournasiri 400104856

# Summary 


# How To Run

Simple diet app named dietly that helps you count your calories and have a healthy routine in your diet and keeps track of calories for weight loss.

# API

These are the API endpoints for the project:

    control(admin):

        control/userlist/ (['GET', 'POST'])
            get: get the list of users
            post: add users to list of users

        control/userlist/<int:id> (['GET', 'PUT', 'DELETE'])
            get: get user details for specific id
            put: update data of user 

        delete: delete specific user
        control/foods/ (['GET', 'POST'])
            get: get list of foods
            post: add a list of foods to available foods

        control/foods/<str:id> (['GET', 'PUT', 'DELETE'])

            get: get details about a food with certain id
            put: edit food with certain id
            delete: delete a food with certain id
    user:

        user/meallist/ ('GET', 'POST')
            get: get list of all meals
            post: insert a meal in list of all lists

        user/meallist/<int:id>/<str:food>/<str:type>/<str:date>/ ('GET', 'PUT', 'DELETE')
            get: get meal of a certain user with foods details
            put: update meals of certain user with food details
            delete: delete meal of a certain user 

        user/register/ ('POST')
            post: register a user

        user/login/ ('POST')
            post: login a user

        user/mealsinday/ ('GET')
            get: get calories eaten in a day

        user/maintanacecalories/ ('GET')
            get: get maintanace calories for a user
Also the backend is written with django and uses a postgresql database
# Infrastructure

To run this project you will need docker on your system 
clone this repository and build the project with
    
    docker-compose up

the project has 3 folders frontend backend and nginx each of these folders has a dockerfile and can be ran independant of other parts

to run the django backend independently use this command 

    docker run -p 8000:8000 web-gp-13-web python manage.py runserver 0.0.0.0:8000

but keep in mind that you have to run the postgresql server before

to run the django backend independently use this command 

    docker run -p 5173:5173 
# Frontend
The frontend is built using the **Vite** build tool. We utilized **Tailwind CSS** to craft our components and incorporated packages such as **Heroicons** for icons.

To run the frontend, you first need to install Vite using this command in the your/path/to/web-gp-13/frontend/vite-project path:
```bash
npm i vite
```

then use this command to start the project:
```bash
npm run dev
```

Now, you'll see a local address displayed, such as http://localhost:5173/. Type this URL into your browser to view the frontend.

# Features
This is primarily a diet app designed to help you control your daily calorie intake. It will monitor and ensure that you do not consume more calories than necessary, taking into account factors such as your weight, height, and other relevant metrics.

There are some primary features such as logging in, logging out, an "About Us" page, a "Contact Us" section, and more, but the exclusive features are:

* With the "Dietly" app, you can easily calculate the daily calories you need.

* You can add,edit or remove the foods you eat each day using this app. It will calculate both the calories you've consumed and the calories that remain based on your intake.

* You can also monitor the chart and tables displaying your calorie consumption over the past week. For example, you can review what you ate three days ago.

* In "Dietly," there are dozens of recipes with their respective calorie counts noted. You can view the calorie content of these foods and also learn the recipes.

* "Dietly" also provides a helpful diet tip each time you log in to your panel.

* In "Dietly," you can measure your BMI and determine if you are overweight, underweight, or within a healthy range.
