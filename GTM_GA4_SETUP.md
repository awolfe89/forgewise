# GA4 Setup Instructions for Google Tag Manager

## Important: Use GTM for GA4 (Not Direct Script)

Since you already have Google Tag Manager (GTM-MJ2WVKKX) installed, you should configure GA4 through GTM rather than adding the gtag.js script directly to your site. This prevents conflicts and gives you better control.

## Your IDs:
- **GTM ID:** GTM-MJ2WVKKX (✅ Already installed in site)
- **GA4 Measurement ID:** G-X7EYRN7VN5 (✅ Added to environment variables)

## Step-by-Step GA4 Setup in GTM:

### 1. Create GA4 Configuration Tag in GTM

1. Go to your [Google Tag Manager](https://tagmanager.google.com) dashboard
2. Click **Tags** → **New**
3. Click **Tag Configuration** and choose **Google Analytics: GA4 Configuration**
4. Enter your **Measurement ID**: `G-X7EYRN7VN5`
5. Leave other settings as default (or configure as needed)
6. Click **Triggering** and select **All Pages**
7. Name your tag: "GA4 - Configuration"
8. Click **Save**

### 2. Create GA4 Event Tag for Custom Events

1. Click **Tags** → **New**
2. Choose **Google Analytics: GA4 Event**
3. For **Configuration Tag**, select the "GA4 - Configuration" tag you just created
4. **Event Name**: use `{{Event}}` (this will use the dataLayer event name)
5. Add any event parameters you want to track
6. Click **Triggering** → **New** → **Custom Event**
7. Event name: `.*` (regex to match all events)
8. Name your trigger: "All Custom Events"
9. Name your tag: "GA4 - All Events"
10. Click **Save**

### 3. Test Your Setup

1. Click **Preview** in GTM
2. Enter your website URL
3. Navigate around your site
4. Check that tags are firing in the preview panel
5. Open [GA4 Debug View](https://analytics.google.com) → Admin → Debug View
6. You should see events coming through in real-time

### 4. Publish Your Container

1. Once testing is complete, click **Submit** in GTM
2. Add a version name: "GA4 Setup"
3. Click **Publish**

## Events Already Being Tracked

Your site is already sending these events to the dataLayer:

### Form Events
- `form_submit` - Contact form submissions
- `generate_lead` - Lead conversions
- `lead_capture` - Email captures

### Engagement Events
- `button_click` - CTA button clicks
- `calculator_used` - Revenue calculator usage
- `page_view` - Page navigation (automatic)

### E-commerce Style Events
- `view_item` - Service/package views
- `select_item` - Service selection
- `begin_checkout` - Booking link clicks

## Verify in GA4

After setup, check these locations in GA4:

1. **Realtime Report** - See active users and events
2. **Events Report** - View all tracked events
3. **Debug View** - Detailed event debugging
4. **Conversions** - Mark important events as conversions

## DO NOT Add gtag.js Script

Since you're using GTM, do **NOT** add the following script to your site:
```html
<!-- DO NOT ADD THIS - Use GTM Instead -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-X7EYRN7VN5"></script>
```

GTM will handle all GA4 tracking for you, providing better performance and control.

## Troubleshooting

If events aren't showing:
1. Check GTM Preview mode - are tags firing?
2. Check browser console for errors
3. Verify GA4 Measurement ID is correct
4. Make sure GTM container is published
5. Check for ad blockers in your browser
6. Wait 24 hours for data to fully process

## Next Steps

1. ✅ GA4 Configuration tag created in GTM
2. ✅ Event tracking tag created
3. ✅ Test in Preview mode
4. ✅ Publish GTM container
5. 🔄 Mark key events as conversions in GA4
6. 🔄 Set up audiences for remarketing
7. 🔄 Configure Google Ads linking (if using)

Your tracking infrastructure is ready - just need to configure these tags in GTM!