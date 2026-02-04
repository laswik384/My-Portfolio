# Portfolio Website - API Contracts & Integration Guide

## Overview
This document outlines the API contracts between frontend and backend, data flow, and EmailJS integration setup.

---

## Backend API Endpoints

### 1. Contact Form Submission
**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I would like to discuss a project with you."
}
```

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Thank you for your message! I'll get back to you soon.",
  "submission_id": "uuid-string"
}
```

**Response (Error - 500):**
```json
{
  "detail": "Failed to process contact form"
}
```

**Validation:**
- `name`: Required, 1-100 characters
- `email`: Required, valid email format
- `message`: Required, 10-1000 characters

**Backend Actions:**
1. Validates form data
2. Captures request metadata (IP, user agent)
3. Stores submission in MongoDB collection `contact_submissions`
4. Sends email notification via EmailJS
5. Returns success response

---

### 2. Get Contact Submissions (Admin)
**Endpoint:** `GET /api/contact/submissions?limit=50`

**Query Parameters:**
- `limit` (optional): Number of submissions to retrieve (default: 50)

**Response:**
```json
[
  {
    "id": "uuid",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Message content",
    "created_at": "2026-02-04T10:30:00",
    "ip_address": "192.168.1.1",
    "user_agent": "Mozilla/5.0..."
  }
]
```

---

## Frontend Integration

### Contact Form Component
**Location:** `/app/frontend/src/components/Connect.jsx`

**Features:**
- Form validation
- Loading states during submission
- Toast notifications for success/error
- Form reset on successful submission

**Integration Flow:**
1. User fills form and clicks submit
2. Frontend validates required fields
3. POST request to `/api/contact` with form data
4. Display loading state
5. Show success/error toast based on response
6. Clear form on success

---

## EmailJS Integration Setup

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month)
3. Verify your email address

### Step 2: Configure Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection wizard
5. Copy the **Service ID** (e.g., `service_xyz123`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This is an automated message from your portfolio contact form.
```

4. Save the template and copy the **Template ID** (e.g., `template_abc456`)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `user_def789`)

### Step 5: Configure Backend Environment
Add these variables to `/app/backend/.env`:

```bash
EMAILJS_SERVICE_ID=service_xyz123
EMAILJS_TEMPLATE_ID=template_abc456
EMAILJS_PUBLIC_KEY=user_def789
```

### Step 6: Restart Backend
```bash
sudo supervisorctl restart backend
```

---

## MongoDB Collections

### contact_submissions
Stores all contact form submissions

**Schema:**
```javascript
{
  id: String (UUID),
  name: String,
  email: String,
  message: String,
  created_at: DateTime,
  ip_address: String (optional),
  user_agent: String (optional)
}
```

**Indexes:**
- `created_at` (descending) - for sorting by newest first
- `email` - for finding submissions by email

---

## Testing

### Test Contact Form Submission
```bash
curl -X POST http://localhost:8001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message from the contact form."
  }'
```

### Get All Submissions
```bash
curl http://localhost:8001/api/contact/submissions
```

---

## Notes

### Email Service Behavior
- If EmailJS is not configured (missing env variables), submissions are still saved to the database but emails are not sent
- EmailJS has a free tier limit of 200 emails/month
- For production, consider upgrading to a paid plan or using a dedicated email service

### Security Considerations
- Contact form has rate limiting via request metadata tracking
- Email validation prevents spam
- User agent and IP are logged for security monitoring
- Admin endpoint (`/contact/submissions`) should be protected with authentication in production

### Future Enhancements
- Add reCAPTCHA to prevent spam
- Implement rate limiting
- Add authentication for admin endpoints
- Email templates with better styling
- Notification preferences

---

## Troubleshooting

### Email Not Sending
1. Check backend logs: `tail -f /var/log/supervisor/backend.err.log`
2. Verify EmailJS credentials in `.env`
3. Check EmailJS dashboard for service status
4. Ensure EmailJS service is properly connected

### Form Submission Failing
1. Check frontend console for errors
2. Verify backend is running: `curl http://localhost:8001/api/`
3. Check CORS configuration
4. Verify MongoDB connection

---

## Contact
For questions or issues, contact: Satya Laswik Pakki
