# alx-project-0x14

## API Overview  
The MoviesDatabase API provides a comprehensive REST endpoint collection for retrieving metadata about films, TV series, episodes, cast/crew, genres and more. It allows applications to search for titles, filter by year or genre, fetch details for a given movie/series, and perform pagination of results.

## Version  
v1 (as per the RapidAPI listing) :contentReference[oaicite:1]{index=1}  
> _Note: verify the exact version from your API dashboard or documentation and update accordingly._

## Available Endpoints  
Here are some of the main endpoints available (example names — adjust to match the API you’re using):

- `/titles` – Retrieve a list of titles (movies/series) and supports filtering by year, genre, pagination.  
- `/titles/{id}` – Get detailed information for a specific title by its ID.  
- `/genres` – Get a list of available genres.  
- `/years` – Get a list of available years or filter by year parameter.  
- `/search` – Search for titles by keyword, year or genre.  
- `/people/{id}` – Get details of a cast/crew member (actor, director) by ID.  
> _Make sure to list all the endpoints you plan to use, and provide a short description for each._

## Request and Response Format  
### Request  
Requests are made over HTTPS. For example:  

### Response  
A typical JSON response for a list endpoint might look like:  
```json
{
  "page": 2,
  "pageSize": 20,
  "totalResults": 3450,
  "titles": [
    {
      "id": "tt1234567",
      "title": "Example Film",
      "year": 2023,
      "genre": ["Action", "Adventure"],
      "rating": 7.8,
      "posterUrl": "https://…/poster.jpg"
    },
    … more items …
  ]
}
 {
  "id": "tt1234567",
  "title": "Example Film",
  "year": 2023,
  "genre": ["Action", "Adventure"],
  "overview": "A summary of the film …",
  "runtime": 125,
  "cast": [
    {
      "id": "nm7654321",
      "name": "Actor Name",
      "role": "Lead"
    }
  ],
  "crew": [
    {
      "id": "nm2345678",
      "name": "Director Name",
      "job": "Director"
    }
  ],
  "images": {
    "poster": "https://…/poster.jpg",
    "backdrop": "https://…/backdrop.jpg"
  }
}
