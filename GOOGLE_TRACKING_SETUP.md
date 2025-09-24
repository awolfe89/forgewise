# Google Analytics & Tag Manager Setup Guide

## Overview
This site is configured to support Google Analytics 4, Google Tag Manager, and Google Ads conversion tracking. All tracking code is already implemented - you just need to add your tracking IDs.

## Quick Setup (5 minutes)

### Step 1: Create Your Tracking Accounts

1. **Google Tag Manager** (Required)
   - Go to: https://tagmanager.google.com/
   - Click "Create Account"
   - Account Name: Your company name
   - Container Name: Your website domain
   - Target Platform: Web
   - Copy the GTM ID (format: GTM-XXXXXXX)

2. **Google Analytics 4** (Required)
   - Go to: https://analytics.google.com/
   - Click "Start measuring" or "Admin" → "Create Property"
   - Property name: Your website name
   - Select your timezone and currency
   - About your business: Answer the questions
   - Create a Web data stream
   - Enter your website URL
   - Copy the Measurement ID (format: G-XXXXXXXXXX)

3. **Google Ads** (Optional - for paid advertising)
   - Go to: https://ads.google.com/
   - Set up your account if needed
   - Go to Tools & Settings → Conversions
   - Create conversion actions for:
     - Contact form submissions
     - Quick fixes purchases
   - Copy your Conversion ID and Labels

### Step 2: Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
```bash
cp .env.local.example .env.local
```

2. Edit `.env.local` and add your IDs:
```
# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-YOUR_ID_HERE

# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YOUR_ID_HERE

# Google Ads (optional)
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-YOUR_ID_HERE
NEXT_PUBLIC_ADS_CONTACT_LABEL=YOUR_CONTACT_LABEL
NEXT_PUBLIC_ADS_QUICKFIX_LABEL=YOUR_QUICKFIX_LABEL
```

### Step 3: Deploy Your Changes

1. Commit your changes (don't commit .env.local!)
2. Deploy to your hosting platform
3. Add the environment variables to your hosting platform:
   - **Netlify**: Site Settings → Environment variables
   - **Vercel**: Project Settings → Environment Variables
   - **Other**: Check your platform's documentation

### Step 4: Connect GA4 to GTM

1. In Google Tag Manager:
   - Click "Tags" → "New"
   - Choose "Google Analytics: GA4 Configuration"
   - Add your GA4 Measurement ID
   - Trigger: All Pages
   - Save and name it "GA4 Config"

2. Create GA4 Event Tag:
   - Click "Tags" → "New"
   - Choose "Google Analytics: GA4 Event"
   - Configuration Tag: Select "GA4 Config"
   - Event Name: {{Event}}
   - Add Event Parameters as needed
   - Trigger: Custom Event
   - Save and name it "GA4 Events"

3. Publish:
   - Click "Submit" in GTM
   - Add version description
   - Click "Publish"

## What's Being Tracked

### Automatic Tracking
- Page views
- Session duration
- Bounce rate
- Traffic sources
- Device/browser information
- Geographic location

### Custom Events
- **Contact Form Submissions**
  - Event: `form_submit`
  - Conversion: `generate_lead`
  - Data: form type, has message

- **Revenue Calculator**
  - Event: `calculator_used`
  - Data: calculator type
  - Email capture tracking

- **Button Clicks**
  - Event: `button_click`
  - Data: button name, location

- **Email Links**
  - Event: `button_click`
  - Data: link type, page location

### Conversion Tracking
- Contact form submissions → Lead generation
- Quick fixes purchases → Purchase conversion
- Calculator email captures → Micro-conversions

## Testing Your Setup

### 1. Google Tag Manager
- Install Chrome Extension: "Tag Assistant Legacy"
- Visit your site
- Click the extension icon
- Enable recording
- Refresh the page
- Verify GTM container loads

### 2. Google Analytics 4
- In GA4, go to Reports → Realtime
- Visit your site in another tab
- You should see yourself as an active user
- Click around and verify events appear

### 3. Debug Mode
- Open Chrome DevTools → Console
- Type: `dataLayer`
- You should see an array with your events

### 4. Google Tag Manager Preview
- In GTM, click "Preview"
- Enter your website URL
- Navigate your site
- The GTM debug panel shows all fired tags

## Common Issues & Solutions

### Events Not Showing
- Check environment variables are set correctly
- Ensure GTM container is published
- Clear browser cache
- Check for ad blockers

### Conversions Not Tracking
- Verify conversion labels match
- Check Google Ads account is linked to GA4
- Ensure conversion tracking tags are firing in GTM

### Missing Page Views
- Verify GA4 Configuration tag in GTM
- Check "All Pages" trigger is active
- Ensure no JavaScript errors on page

## Advanced Configuration

### Enhanced Ecommerce
The tracking utilities support:
- Product views
- Add to cart
- Purchase events
- Checkout steps

### Custom Dimensions
Add in GA4 Admin → Custom definitions:
- User type (visitor/lead/customer)
- Content engagement depth
- Form interaction points

### Audiences
Create in GA4 for remarketing:
- Engaged visitors (>2 min on site)
- Calculator users
- Form abandoners
- High-intent visitors

## Performance Notes

- GTM loads asynchronously (doesn't block page)
- Total tracking overhead: <50KB
- Page speed impact: <100ms
- All scripts use async/defer loading

## Privacy Compliance

The site includes:
- Cookie consent banner
- Privacy policy link
- Option to opt-out
- GDPR/CCPA compliant setup

Users can disable tracking via:
- Cookie consent rejection
- Browser Do Not Track
- Ad blocker extensions

## Support Resources

- [GTM Documentation](https://support.google.com/tagmanager)
- [GA4 Help Center](https://support.google.com/analytics)
- [Google Ads Help](https://support.google.com/google-ads)

## Next Steps

1. Set up Goals/Conversions in GA4
2. Create audiences for remarketing
3. Set up Google Ads campaigns
4. Configure enhanced ecommerce tracking
5. Add custom events for specific user actions
6. Set up Google Search Console integration

## Monitoring Checklist

Weekly:
- [ ] Check GA4 real-time reports
- [ ] Verify conversion tracking
- [ ] Review event accuracy

Monthly:
- [ ] Analyze user behavior flow
- [ ] Check conversion rates
- [ ] Review traffic sources
- [ ] Optimize based on data

Remember: It takes 24-48 hours for full data to appear in reports!