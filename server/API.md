# Weekufy API Documentation


## Authentication Routes

### 1. Login/Signup with Google
**Route**: `/api/auth/google/callback` <br>
**Method**: `GET`<br>

### 2. Getting the User State
**Route**: `/api/auth/login/success`<br>
**Method**: `GET`<br>

### 3. Update User & Allocate Weeks
**Route**: `/api/auth/update`<br>
**Method**: `POST`<br>
**Request Body**:
```json
{
  "dob": "YYYY-MM-DD",
  "expectedAge": 75
}
```
## Week Routes
### Coming Soon...