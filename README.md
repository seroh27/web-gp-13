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
The frontend is designed us