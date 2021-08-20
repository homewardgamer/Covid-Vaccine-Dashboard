# Covid-Vaccination Dashboard
## Visit [here](https://corona-vaccine-dashboard.herokuapp.com/)
### A one place to go for all the details for vaccination and vaccine centers.

# How to run it locally?
### Clone the Repo
### Use `npm install` to install all the dependencies
### Run the command `node app.js`
### The server will be running at [localhost:3000](https://localhost:3000)


# APIs used-
### https://api.postalpincode.in/pincode/
### https://api.covid19india.org/state_district_wise.json
### https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=243122&date=11-06-2021

<p>Due to restrictions imposed by the Indian government the APIs can't be used for servers outside India therefore I have used a proxy connection to make the request from my local server's IP address. </p>
 
 # Features
 
 ## Gets covid cases status for your district fetched from your pincode :-
 
 <img src="https://github.com/homewardgamer/WebD-Selection/blob/main/Screenshot%202021-07-11%20at%206.55.40%20PM.png"/>
 
 ## Shows nearest vaccination centers and vaccination sessions for current date :-
 
 <img src="https://github.com/homewardgamer/WebD-Selection/blob/main/Screenshot%202021-07-11%20at%206.54.48%20PM.png"/>
 
 ## Vaccinated , not vaccinated , partially vaccinated : shows customised styles for all three statuses :-
 
 <img src="https://github.com/homewardgamer/WebD-Selection/blob/main/Screenshot%202021-07-11%20at%205.54.23%20PM.png"/>
 <img src="https://github.com/homewardgamer/WebD-Selection/blob/main/Screenshot%202021-07-11%20at%205.55.01%20PM.png"/>
 <img src="https://github.com/homewardgamer/WebD-Selection/blob/main/Screenshot%202021-07-11%20at%205.55.44%20PM.png"/>

# User Schema

<table>
  <tr>
    <td>Username</td>
    <td>String</td>
  </tr>
  <tr>
    <td>Password</td>
    <td>String</td>
  </tr>
  <tr>
    <td>Pincode</td>
    <td>String</td>
  </tr>
  <tr>
    <td>First vaccine data</td>
    <td>String</td>
  </tr>
  <tr>
    <td>Second vaccine data</td>
    <td>String</td>
  </tr>
 </table>
