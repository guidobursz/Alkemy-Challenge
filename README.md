# Alkemy-Challenge
 Backend Node alkemy challenge

## .env
PORT =  x

DB_DATABASE = x  
DB_USERNAME = x  
DB_PASSWORD = x  
DB_HOST = x  

JWT_CODE = x  

SENDGRID_API_KEY='x'   


## Endpoints:

### Register & login:
    localhost:3000/auth/login  
    localhost:3000/auth/register
    
### CHARACTERS
##### All Character info (GET)  
    localhost:3000/api/characters
##### One character info (GET)  
    localhost:3000/api/characters/:id/info
##### Create character (POST)  
    localhost:3000/api/characters/create
##### Update character (patch)  
    localhost:3000/api/characters/:id/edit
##### Delete character (DELETE)  
    localhost:3000/api/characters/:id/delete


### MOVIES
##### All movie info (GET)  
    localhost:3000/api/movies
##### One movie info (GET)  
    localhost:3000/api/movies/:id/info
##### Create movie (POST)  
    localhost:3000/api/movies/create
##### Update movie (patch)  
    localhost:3000/api/movies/:id/edit
##### Delete movie (DELETE)  
    localhost:3000/api/movies/:id/delete



## Youtube playlist:
"https://www.youtube.com/playlist?list=PLgf90_3SbnqnnLdpfQB3ZRzPwB03Iu0Y_"