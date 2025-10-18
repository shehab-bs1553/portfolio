# Email Setup Instructions for Portfolio Contact Form

## Overview
This setup uses **EmailJS** - a free service that allows you to send emails directly from your frontend without needing a backend server. Perfect for static sites deployed on GitHub Pages!

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Set Up Email Service

1. **Add Email Service:**
   - Go to EmailJS Dashboard → Email Services
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions
   - **Copy the Service ID** (you'll need this)

2. **Create Email Template:**
   - Go to Email Templates → Create New Template
   - Use this professional, sophisticated HTML template:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Message</title>
    <style>
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #1a1a1a;
            max-width: 650px;
            margin: 0 auto;
            padding: 20px;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
        .email-container {
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.06);
            overflow: hidden;
            border: 1px solid rgba(255,255,255,0.2);
        }
        .header {
            background: linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #2c3e50 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
            position: relative;
        }
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #3498db, #e74c3c, #f39c12, #27ae60);
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
            letter-spacing: -0.5px;
        }
        .header-subtitle {
            margin: 8px 0 0 0;
            font-size: 14px;
            opacity: 0.9;
            font-weight: 400;
        }
        .content {
            padding: 40px 35px;
        }
        .field {
            margin-bottom: 24px;
            padding: 20px;
            background: #f8fafc;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
            transition: all 0.2s ease;
        }
        .field:hover {
            background: #f1f5f9;
            border-color: #cbd5e1;
        }
        .field-label {
            font-weight: 600;
            color: #475569;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .field-label::before {
            content: '';
            width: 4px;
            height: 4px;
            background: #3b82f6;
            border-radius: 50%;
        }
        .field-value {
            color: #1e293b;
            font-size: 16px;
            word-wrap: break-word;
            font-weight: 500;
        }
        .message-field {
            background: #ffffff;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            padding: 24px;
            white-space: pre-wrap;
            min-height: 120px;
        }
        .message-field .field-value {
            line-height: 1.7;
            font-size: 15px;
        }
        .footer {
            background: #f8fafc;
            padding: 30px;
            text-align: center;
            color: #64748b;
            font-size: 13px;
            border-top: 1px solid #e2e8f0;
        }
        .footer-brand {
            font-weight: 600;
            color: #475569;
            margin-bottom: 8px;
        }
        .footer-note {
            font-size: 12px;
            opacity: 0.8;
        }
        .divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
            margin: 30px 0;
        }
        .priority-badge {
            display: inline-block;
            background: #3b82f6;
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-left: 10px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>New Contact Form Message</h1>
            <p class="header-subtitle">Portfolio Inquiry Received</p>
        </div>
        
        <div class="content">
            <div class="field">
                <div class="field-label">Contact Name</div>
                <div class="field-value">{{from_name}}</div>
            </div>
            
            <div class="field">
                <div class="field-label">Email Address</div>
                <div class="field-value">{{from_email}}</div>
            </div>
            
            <div class="field">
                <div class="field-label">Subject Line<span class="priority-badge">New</span></div>
                <div class="field-value">{{subject}}</div>
            </div>
            
            <div class="divider"></div>
            
            <div class="field message-field">
                <div class="field-label">Message Content</div>
                <div class="field-value">{{message}}</div>
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-brand">Portfolio Contact System</div>
            <p class="footer-note">This message was sent from your portfolio contact form</p>
            <p class="footer-note">Reply directly to this email to respond to {{from_name}}</p>
        </div>
    </div>
</body>
</html>
```

   - **Copy the Template ID** (you'll need this)

3. **Get Public Key:**
   - Go to Account → General
   - **Copy your Public Key**

## Step 3: Customize Email Design (Optional)

The email template includes several design elements you can customize:

### 🎨 Design Customization Options:

1. **Colors:**
   - Header gradient: Change `#667eea` and `#764ba2` in the CSS
   - Accent color: Modify `#667eea` throughout the template
   - Background: Adjust `#f8f9fa` for the main background

2. **Typography:**
   - Font family: Change `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`
   - Font sizes: Adjust the `font-size` values in the CSS

3. **Layout:**
   - Container width: Modify `max-width: 600px`
   - Padding: Adjust `padding` values for spacing
   - Border radius: Change `border-radius` for rounded corners

4. **Icons:**
   - Replace emoji icons (📧, 👤, 💬) with your preferred icons
   - Or remove them entirely for a cleaner look

### 📧 Email Template Features:

- ✅ **Simple & Clean** - Only shows the 4 fields from your form
- ✅ **Responsive Design** - Looks great on mobile and desktop
- ✅ **Professional Layout** - Clean, modern design
- ✅ **Clear Information Hierarchy** - Each field in its own styled box
- ✅ **Branded Styling** - Matches your portfolio theme
- ✅ **Direct Reply** - Recipients can reply directly to the sender

### 🎨 Email Preview:

The email will have this clean, simple structure:
```
┌─────────────────────────────────────┐
│  📧 New Contact Form Message        │ ← Header with gradient background
├─────────────────────────────────────┤
│  NAME                               │ ← Each field in its own box
│  [User's Name]                      │
│                                     │
│  EMAIL                              │
│  [User's Email]                     │
│                                     │
│  SUBJECT                            │
│  [User's Subject]                   │
│                                     │
│  MESSAGE                            │ ← Message in special white box
│  [User's Message Content]           │
│                                     │
│  This message was sent from your    │ ← Simple footer
│  portfolio contact form             │
│  Reply directly to respond          │
└─────────────────────────────────────┘
```

## Step 4: Configure Your Portfolio

1. **Update Environment Files:**
   - Open `src/environments/environment.ts`
   - Replace `YOUR_SERVICE_ID` with your actual Service ID
   - Replace `YOUR_TEMPLATE_ID` with your actual Template ID
   - Replace `YOUR_PUBLIC_KEY` with your actual Public Key

   - Do the same for `src/environments/environment.prod.ts`

2. **Test Locally:**
   ```bash
   npm start
   ```
   - Go to your contact form
   - Fill out and submit the form
   - Check your email!

## Step 5: Deploy to GitHub Pages

1. **Build and Deploy:**
   ```bash
   npm run deploy
   ```

2. **Your site will be available at:**
   `https://yourusername.github.io/portfolio`

## Step 6: Test Production

1. Visit your deployed site
2. Test the contact form
3. Check that emails are being received

## Troubleshooting

### Common Issues:

1. **"EmailJS is not defined" error:**
   - Make sure you've installed the package: `npm install @emailjs/browser`
   - Check that your public key is correct

2. **Emails not being sent:**
   - Verify your Service ID, Template ID, and Public Key
   - Check the browser console for errors
   - Make sure your email service is properly configured in EmailJS

3. **Template variables not working:**
   - Ensure your template uses the correct variable names:
     - `{{from_name}}` for sender's name
     - `{{from_email}}` for sender's email
     - `{{subject}}` for email subject
     - `{{message}}` for email content

### EmailJS Free Plan Limits:
- 200 emails per month
- Perfect for personal portfolios
- No credit card required

## Security Notes

- Your public key is safe to expose in frontend code
- EmailJS handles the actual email sending securely
- No sensitive information is stored in your code

## Support

If you need help:
1. Check EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
2. Check browser console for error messages
3. Verify all IDs and keys are correct

---

**Your contact form is now ready to receive emails! 🎉**
