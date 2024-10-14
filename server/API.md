# Weekify API Documentation
## Authentication Routes


### 1. Login/Signup with Google
**Route**: `/auth/google/callback`  
**Method**: `GET`  
**Description**: Handles user login or signup via Google OAuth and redirects the user to the application after successful authentication.

### 2. Getting the User State
**Route**: `/auth/user`  
**Method**: `GET`  
**Description**: Returns the logged-in user's state.

### 3. Local User Registration
**Route**: `/auth/register`  
**Method**: `POST`  
**Request Body**:
```json
{
  "email": "example@gmail.com",
  "fullname": "John Doe",
  "password": "password123"
}
```
**Description**: Registers a new user with email, full name, and password.

### 4. Local User Login
**Route**: `/auth/login`  
**Method**: `POST`  
**Request Body**:
```json
{
  "email": "example@gmail.com",
  "password": "password123"
}
```
**Description**: Authenticates a user via email and password.

### 5. Update User & Allocate Weeks
**Route**: `/api/auth/update`  
**Method**: `POST`  
**Request Body**:
```json
{
  "dob": "YYYY-MM-DD",
  "expectedAge": 75
}
```
**Description**: Updates user information and allocates weeks based on the date of birth and expected age(time-taking).

## Week Routes
### 1. Get All Weeks
**Route**: `/week/`  
**Method**: `GET`  
**Description**: Fetches all the weeks associated with the logged-in user.

### 2. Get Single Week
**Route**: `/week/:weekNum`  
**Method**: `GET`  
**Description**: Fetches details for a specific week identified by the `weekNum`.

### 3. Get Current Week
**Route**: `/week/now`  
**Method**: `GET`  
**Description**: Fetches the details for the current week.

### 4. Add Week Content
**Route**: `/week/add/:weekNum`  
**Method**: `PUT`  
**Request Body**:
```json
{
  "story": "Story content here",
  "note": "Note content here",
  "reaction": "THRILLED"
}
```
**Description**: Adds or updates the content for a specific week, including a story, note, and reaction.

### 5. Add Week Event
**Route**: `/week/event/:weekNum`  
**Method**: `POST`  
**Request Body**:
```json
{
  "title": "Event title",
  "description": "Event description",
  "date": "YYYY-MM-DD"
}
```
**Description**: Adds an event to the specified week.

### 6. Update Week Event
**Route**: `/week/event/update/:weekNum`  
**Method**: `PUT`  
**Request Body**:
```json
{
  "title": "Updated event title (optional)",
  "description": "Updated event description (optional)",
}
```
**Description**: Updates an existing event for the specified week.

## Todo Routes
### 1. Add Todo
**Route**: `/todo/:weekId`  
**Method**: `POST`  
**Request Body**:
```json
{
  "title": "Todo title"
}
```
**Description**: Adds a new todo item for the specified week.

### 2. Delete Todo
**Route**: `/todo/:todoId`
**Method**: `DELETE`  
**Description**: Deletes the specified todo item.

### 3. Mark Todo as Completed
**Route**: `/todo/:todoId`
**Method**: `PUT`
**Description**: Mark todo as completed