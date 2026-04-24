# Spotify MERN Clone - Vercel Deployment Guide

## ✅ Pre-Deployment Checklist

### What's Been Set Up:
- ✅ Vite configuration for frontend
- ✅ Environment variable templates (.env.example)
- ✅ CORS configuration for production
- ✅ Vercel configuration (vercel.json)
- ✅ .gitignore and .vercelignore files
- ✅ Root package.json with proper scripts
- ✅ Frontend API URL configured for environment variables

---

## 📋 Step-by-Step Deployment Instructions

### **STEP 1: Prepare Your GitHub Repository**

1. Make sure all code is committed:
   ```bash
   cd c:\Users\Labib\Desktop\Backend course\spotify
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push
   ```

2. Ensure your GitHub repo is public (or connected to your account)

---

### **STEP 2: Get Your Secrets Ready**

You'll need these from your `.env` file:

- **MONGO**: MongoDB connection string (from your `.env`)
- **JWT_SECRET**: Your JWT secret key
- **IMAGEKIT_PRIVATE_KEY**: ImageKit private key
- **IMAGEKIT_PUBLIC_KEY**: ImageKit public key
- **FRONTEND_URL**: Will be your Vercel frontend URL (set after frontend deployment)

---

### **STEP 3: Deploy Frontend on Vercel**

1. **Sign up on Vercel** (if not already):
   - Go to https://vercel.com
   - Click "Sign Up" → Choose "Continue with GitHub"
   - Authorize your GitHub account

2. **Deploy Frontend**:
   - Click "New Project"
   - Import your GitHub repository (Spotify project)
   - **Important**: In the settings before deploying:
     - **Framework**: Select "Vite"
     - **Root Directory**: Leave as root (Vercel will auto-detect)
     - **Build Command**: `cd frontend && npm install && npm run build`
     - **Output Directory**: `frontend/dist`
     - Click "Deploy"

3. **Wait for deployment** (2-5 minutes)

4. **Copy your Frontend URL**:
   - After deployment, you'll see a URL like: `https://spotify-clone-xyz123.vercel.app`
   - **Save this URL** - you'll need it for the backend

---

### **STEP 4: Deploy Backend on Vercel**

1. **Create another Vercel project for backend**:
   - Click "New Project" again
   - Import the same GitHub repo
   - **Important Settings**:
     - **Framework**: "Other" or "Node.js"
     - **Root Directory**: Choose root folder
     - **Build Command**: `cd backend && npm install`
     - **Output Directory**: `backend/src`
     - **Start Command**: `node backend/src/server.js`

2. **Add Environment Variables** (CRITICAL):
   - In Vercel dashboard, go to **Settings** → **Environment Variables**
   - Add each variable:

   ```
   PORT=8080
   MONGO=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   IMAGEKIT_PRIVATE_KEY=<your_imagekit_private_key>
   IMAGEKIT_PUBLIC_KEY=<your_imagekit_public_key>
   FRONTEND_URL=https://spotify-clone-xyz123.vercel.app
   ```

3. **Deploy**:
   - Click "Deploy"
   - Wait for completion

4. **Copy your Backend URL**:
   - Something like: `https://spotify-backend-api.vercel.app`

---

### **STEP 5: Update Frontend Environment Variables**

1. **Go back to Frontend Project** in Vercel
2. **Settings** → **Environment Variables**
3. **Add new variable**:
   ```
   VITE_API_URL=https://spotify-backend-api.vercel.app/api
   ```
   (Replace with your actual backend URL)

4. **Redeploy Frontend**:
   - Go to **Deployments** tab
   - Click the three dots on latest deployment
   - Select "Redeploy"

---

### **STEP 6: Update Backend CORS**

Your backend's `app.js` now accepts a `FRONTEND_URL` environment variable. It's already configured - just make sure it's set in Vercel (Step 4).

---

## 🔧 Troubleshooting

### **Error: 401 Unauthorized**
- ✅ Already fixed! You updated authentication to check both cookies and Authorization headers

### **CORS Error**
- Check that `FRONTEND_URL` is set in backend environment variables
- Make sure frontend URL is correct (no trailing slash)

### **Build fails**
- Check that MongoDB connection string is correct
- Ensure all environment variables are set
- Check Vercel build logs for specific errors

### **Can't upload music**
- Make sure ImageKit keys are correct
- Verify file size limits (multipart)

---

## 📊 Project Structure (For Reference)

```
spotify/
├── api/
│   └── index.js (serverless handler)
├── backend/
│   ├── src/
│   │   ├── app.js (Express app)
│   │   ├── server.js (Entry point)
│   │   ├── routes/
│   │   ├── controller/
│   │   ├── models/
│   │   └── middlewares/
│   ├── package.json
│   ├── .env (keep secret, not committed)
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── api/axios.js (uses VITE_API_URL)
│   │   ├── pages/
│   │   ├── components/
│   │   └── context/
│   ├── package.json
│   ├── vite.config.js
│   ├── .env.local
│   └── .env.example
├── package.json (root)
├── vercel.json (deployment config)
├── .gitignore
└── .vercelignore
```

---

## ✨ What Works After Deployment

- ✅ User authentication (login/register)
- ✅ JWT tokens with cookies
- ✅ Music upload with ImageKit
- ✅ Album management
- ✅ Music streaming
- ✅ CORS handling for production
- ✅ Environment-based API URLs

---

## 🚀 Final Checklist Before Going Live

- [ ] MongoDB connection works
- [ ] JWT secret is secure and set in Vercel
- [ ] ImageKit credentials are correct
- [ ] Frontend VITE_API_URL points to correct backend
- [ ] Backend FRONTEND_URL points to correct frontend
- [ ] Both frontend and backend are deployed
- [ ] Test login/register functionality
- [ ] Test music upload
- [ ] Check browser console for errors
- [ ] Test on multiple browsers

---

## 📱 Testing After Deployment

1. Go to your frontend URL
2. Register a new account
3. Login
4. Try uploading music (if artist account)
5. Try viewing music feed
6. Check for any CORS or 401 errors in browser console

**If you see 401 errors**, make sure:
- Backend environment variables are set
- Frontend URL is correct in backend CORS
- You're logged in before accessing protected routes

---

## 💡 Pro Tips

- Use Vercel's log viewer to debug issues
- Keep `.env` files secret - never commit them
- Update environment variables if you change secrets
- Test locally before pushing (`npm run dev`)
- Monitor your MongoDB Atlas for connection limits

---

## Need Help?

Check these resources:
- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas: https://www.mongodb.com/cloud/atlas
- Express.js: https://expressjs.com/
- React/Vite: https://vitejs.dev/
