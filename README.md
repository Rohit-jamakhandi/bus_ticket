# Bus Ticketing and Payment System 🚌

A full-stack Node.js application for bus search, booking, and **Stripe** payment integration. Built with Express, MongoDB Atlas, EJS, Bootstrap.

## Features ✨
- User signup/login (bcrypt, session-based authentication)
- Admin dashboard: add/edit/remove buses
- Search buses by from/to/date
- Interactive seat selection with visual grid
- **Stripe Payment Integration** with Payment Intents API
- Secure payment verification
- Booking history in user profile
- Responsive modern UI with Bootstrap 5

## Tech Stack 🛠️
- **Backend:** Node.js, Express.js
- **Frontend:** EJS templates, Bootstrap 5, Stripe.js
- **Database:** MongoDB Atlas (Mongoose)
- **Payment:** Stripe Payment Intents
- **Session Management:** express-session with MongoDB store

## Project Structure 📁
```
bus-ticketing-app/
├── server.js              # Main Express server
├── config/
│   ├── db.js             # MongoDB connection
│   └── stripe.js         # Stripe configuration
├── models/
│   ├── User.js           # User schema with bcrypt
│   ├── Bus.js            # Bus schema
│   └── Booking.js        # Booking schema
├── routes/
│   ├── auth.js           # Signup/login/logout
│   ├── buses.js          # Bus CRUD & search
│   └── bookings.js       # Payment & booking logic
├── views/
│   ├── layout.ejs        # Main layout template
│   ├── home.ejs          # Search page
│   ├── results.ejs       # Bus results
│   ├── booking.ejs       # Seat selection & payment
│   ├── login.ejs         # Login form
│   ├── signup.ejs        # Signup form
│   ├── admin.ejs         # Admin dashboard
│   ├── profile.ejs       # User bookings
│   └── error.ejs         # Error page
└── public/
    ├── css/style.css     # Custom styles
    └── js/main.js        # Client-side JS
```

## Setup Instructions 🚀

### 1. Prerequisites
- Node.js 18+ installed
- MongoDB Atlas account (free tier)
- Stripe account (test mode)

### 2. Clone and Install
```bash
cd bus-ticketing-app
npm install
```

### 3. Configure Environment Variables
Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

Edit `.env` and add your credentials:
```env
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bustickets?retryWrites=true&w=majority
SESSION_SECRET=your-random-secret-key-here

# Stripe Keys (Test Mode)
STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx

BASE_URL=http://localhost:3000
```

### 4. Get Stripe API Keys
1. Sign up at [stripe.com](https://stripe.com)
2. Go to **Developers → API Keys**
3. Copy **Publishable key** (pk_test_...) and **Secret key** (sk_test_...)
4. Paste into `.env` file

### 5. Get MongoDB Atlas URI
1. Create free cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create database user
3. Whitelist your IP (or use 0.0.0.0/0 for testing)
4. Get connection string and replace `<username>`, `<password>`, `<cluster>`

### 6. Run the Application
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

Visit: **http://localhost:3000**

## Admin Access 🔐
To access the admin dashboard:
1. Sign up for a new account
2. Connect to your MongoDB Atlas database
3. Find your user document in the `users` collection
4. Set `isAdmin: true` for that user
5. Visit `/admin` to manage buses

## Usage Guide 📖

### For Users:
1. **Sign up** or **Login**
2. **Search buses** by entering from/to/date
3. **Select bus** from results
4. **Choose seats** using the interactive grid
5. **Click "Pay Now"** to initialize payment
6. **Complete payment** using Stripe test cards:
   - Card: `4242 4242 4242 4242`
   - Expiry: Any future date
   - CVC: Any 3 digits
7. **View bookings** in "My Bookings"

### For Admins:
1. Login with admin account
2. Visit `/admin`
3. Add new buses with route, date, time, seats, fare
4. Edit or delete existing buses

## Stripe Test Cards 💳
Use these test cards in test mode:
- **Success:** `4242 4242 4242 4242`
- **Decline:** `4000 0000 0000 0002`
- **3D Secure:** `4000 0025 0000 3155`

Use any future expiry date and any 3-digit CVC.

## API Endpoints 🔌

### Authentication
- `POST /auth/signup` - Create account
- `POST /auth/login` - Login
- `POST /auth/logout` - Logout

### Buses
- `GET /buses/search?from=X&to=Y&date=Z` - Search buses
- `GET /buses/:id/booking` - Booking page
- `POST /buses/admin` - Add bus (admin only)
- `POST /buses/admin/:id` - Update bus (admin only)
- `POST /buses/admin/:id/delete` - Delete bus (admin only)

### Bookings
- `POST /bookings/create` - Create payment intent
- `POST /bookings/verify` - Verify payment
- `GET /bookings/my` - User's bookings

## Security Features 🔒
- Password hashing with bcrypt
- Session-based authentication
- Stripe webhook signature verification (recommended for production)
- Environment variables for sensitive data
- MongoDB injection protection via Mongoose

## Production Deployment Checklist ✅
- [ ] Set `NODE_ENV=production`
- [ ] Use strong `SESSION_SECRET`
- [ ] Enable Stripe webhooks for payment confirmation
- [ ] Add CSRF protection
- [ ] Implement rate limiting
- [ ] Add input validation and sanitization
- [ ] Set up proper error logging (e.g., Winston)
- [ ] Configure CORS properly
- [ ] Use HTTPS
- [ ] Implement seat locking mechanism

## Optional Enhancements 🎁
- Generate downloadable PDF tickets
- Email confirmation with Nodemailer
- Per-seat booking (lock specific seats)
- QR code for tickets
- Booking cancellation
- Refund handling
- Multi-language support
- Push notifications

## Troubleshooting 🔧

**Server won't start:**
- Check `.env` file exists and has correct values
- Verify MongoDB URI is correct
- Ensure Stripe keys are valid

**Payment fails:**
- Verify Stripe keys are test mode keys (pk_test_, sk_test_)
- Check browser console for errors
- Ensure using valid test card numbers

**Can't access admin:**
- Verify `isAdmin: true` is set in database
- Clear browser cookies and re-login

## Support 💬
For issues or questions, check:
- [Stripe Documentation](https://stripe.com/docs)
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)
- [Express.js Guide](https://expressjs.com/)

## License 📄
MIT License - feel free to use for learning and projects!
