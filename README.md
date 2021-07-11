# WebD-Selection
## Visit [here](https://corona-vaccine-dashboard.herokuapp.com/)
### This website was build using express backed by a mongoDB database

# How to run it locally?
### Clone the Repo
### Use `npm install` to install all the dependencies
### Run the command `node app.js`
### The server will be running at [localhost:3000](https://localhost:3000)


# APIs used-
### https://api.postalpincode.in/pincode/
### https://api.covid19india.org/state_district_wise.json
### https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=243122&date=11-06-2021

<p>Due to restrictions by the Indian government the API can't be used for servers outside India therfore I have used a proxy connection to make the request from </p>

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
 
 # Features
 ### Gets covid cases status for your district fetched from you pincode
 ### Shows nearest vaccination centers and vaccination sessions for current date.
 ### Vaccinated , not vaccinated , partially vaccinated : shows customised styles for all three status
 

