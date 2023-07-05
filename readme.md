## Live Link: https://cow-hut.up.railway.app

## Application Routes:
## User
* api/v1/auth/signup (POST)
* api/v1/users (GET)
* api/v1/users/648dc93b4c40c06393e7436c (Single GET) 
* api/v1/users/648dc93b4c40c06393e7436c (PATCH)
* api/v1/users/648dc93b4c40c06393e7436c (DELETE) 
## Cows
* api/v1/cows (POST)
* api/v1/cows (GET)
* api/v1/cows/648dcb06030b385c5da12cd8 (Single GET)
* api/v1/cows/648dcb06030b385c5da12cd8 (PATCH)
* api/v1/cows/648dcb06030b385c5da12cd8 (DELETE) 
## Pagination and Filtering routes of Cows
* api/v1/cows?pag=1&limit=10
* api/v1/cows?sortBy=price&sortOrder=asc
* api/v1/cows?minPrice=20000&maxPrice=70000
* api/v1/cows?location=Dhaka
* api/v1/cows?searchTerm=Dha
## Orders
* api/v1/orders (POST)
* api/v1/orders (GET)