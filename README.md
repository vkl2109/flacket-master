# cvstr

# START FRONTEND
 // npm run dev
 // npm run build

# START BACKEND
  // 'python server.py' from root folder
  
  
<h1 style="color:orangered"> App Mission</h1>

We recognized that Flatiron students have seating preferences when it comes to attending lectures. However, there isn’t a way to reserve a seat without physically being in it. This is where our app (name tba) comes in! Our app allows students to sign up and see a list of lectures they can attend and gives them the power to reserve a seat in advance. Love sitting front and center in Turing? Reserve today!

---

<h1 style="color:orange"> Elevator Pitch</h1>

Have you ever showed up to a lecture one minute too late, only to find your favorite seat taken by somebody else? With **************************flakit_master**************************, you can reserve your seat before the lecture even starts, putting you in control of an environment that works best for your education. Don’t let your success be in someone else’s seat.

---

<h1 style="color:forestgreen"> MVP</h1>

-   Login / signup a user
-   Display events which are available
-   Display events which the user has reserved a seat for
-   Display an interactive map

<h1 style="color:forestgreen"> Stretch Goals</h1>

-   Have different users (student / teacher)
-   Teacher can create/delete events
-   Have different time slots for a single event, each time slot would have a corresponding seating chart
-   Include phonebooths as an additional reservable space

---

<h1 style="color:dodgerblue"> User Experience</h1>

### Student User

-   user (student) can log in
-   user (student) can create a new profile
-   student can choose a classroom
-   student can choose a class to attend (event) based on time slots available
-   student can choose a seat within a classroom
-   (stretch) user can trade with other students

### Teacher User

-   (stretch) teacher can log in and create classes / times

---

<h1 style="color:rebeccapurple"> Wireframe</h1>

-   Landing Page
    -   Login Page
        -   Booked Classes
-   All Classrooms
    -   List of Classes
-   Class Seating Chart
    -   Checkout - routes back to homepage

---
## Schema
|Room| | |Event| | |Seat| | |User| | |Reservation| |
|:------|:------|-|:------|:------|-|:------|:------|-|:------|:------|-|:------|:------|
|id|integer||id|integer||id|integer||id|integer||id|integer|
|name|string||room_id|integer||event_id|integer||name|string||user_id|integer|
| | | |name|string||seat_number_|integer||email|string||seat_id|integer|
| | | |start_time|datetime||is_empty|boolean||password|string|| | | |
| | | |end_time|datetime||student_name|string|admin|boolean|| | | |

---

<h1 style="color:rebeccapurple">Sketches</h1>


![flakit_master_avatars](https://user-images.githubusercontent.com/75575727/213541921-17baa074-5722-4d27-810d-c88ca2f90e0d.png)
![flakit_master_logo_designs](https://user-images.githubusercontent.com/75575727/213541935-66726f7a-2c15-4393-ba1e-cf327d67342f.png)
![flakit_master_event_registration](https://user-images.githubusercontent.com/75575727/213541952-da0821fd-fa4a-4f5b-8a3d-3ae8655eb83a.png)
![flakit_master_logo_favicon_name](https://user-images.githubusercontent.com/75575727/213541995-01c51c99-09e9-472b-9e10-383f3b9f7480.png)
![flakit_master_page layout](https://user-images.githubusercontent.com/75575727/213542080-a8fad60c-9ccb-419b-becb-ba990f88e348.png)
![cvstr_mockup_logo_favicon_name](https://user-images.githubusercontent.com/75575727/213542199-198b15fb-f78e-4946-8a99-595483c282e8.png)
