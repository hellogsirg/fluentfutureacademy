# Testimonials - Quick Start Guide

## What Was Added

A beautiful, interactive testimonial carousel has been added to your home page featuring real graduate success stories.

## Location in Website

**Home Page** → After "Certification Showcase" → Before "Career Pathways"

## Files Created/Modified

### New Files
```
src/components/ui/retro-testimonial.tsx    - Core carousel component
src/components/TestimonialsSection.tsx     - Integrated section wrapper
src/data/testimonials.ts                   - Testimonial content
```

### Modified Files
```
src/pages/Home.tsx                         - Added testimonials section
package.json                               - Added framer-motion dependency
```

## How to Customize

### Change Testimonial Content

Edit `src/data/testimonials.ts`:

```typescript
{
  id: "unique-id",
  name: "Student Name",
  designation: "Professional Title, Company",
  description: "Full testimonial text here...",
  profileImage: "https://images.unsplash.com/photo-xxxxx"
}
```

### Add New Testimonial

```typescript
// In src/data/testimonials.ts
export const testimonialData = {
  ids: [
    "testimonial-001",
    "testimonial-007",  // Add new ID
  ],
  details: {
    "testimonial-007": {  // Add new testimonial
      id: "testimonial-007",
      name: "New Person",
      designation: "Their Job Title",
      description: "Their success story...",
      profileImage: "https://images.unsplash.com/photo-xxxxx"
    }
  }
};
```

### Change Section Title

Edit `src/components/TestimonialsSection.tsx`:

```tsx
<h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
  Your New Title Here
</h2>
```

### Change Colors

In `src/components/ui/retro-testimonial.tsx`, find and replace:

```tsx
// Buttons
bg-emerald-700  →  bg-YOUR-COLOR
bg-emerald-800  →  bg-YOUR-HOVER-COLOR

// Cards
from-blue-50 via-emerald-50 to-blue-50  →  from-YOUR via-YOUR to-YOUR

// Profile borders
border-emerald-600/30  →  border-YOUR-COLOR
```

### Change Background Image

In `src/components/TestimonialsSection.tsx`:

```tsx
<TestimonialCard
  backgroundImage="YOUR_NEW_IMAGE_URL"
/>
```

## Removing the Section

If you need to remove it, simply delete this line from `src/pages/Home.tsx`:

```tsx
<TestimonialsSection />
```

## Features

- ✅ Horizontal scrolling carousel
- ✅ Click to expand testimonials
- ✅ Navigation arrows
- ✅ Mobile-friendly touch scrolling
- ✅ Keyboard accessible (ESC to close)
- ✅ Smooth animations
- ✅ Responsive design
- ✅ Professional profile images

## Troubleshooting

### Cards not scrolling
- Check that carousel has enough cards to overflow
- Ensure `overflow-x-scroll` is applied
- Verify arrow buttons are enabled

### Images not loading
- Verify Unsplash URLs are valid
- Check browser console for errors
- Ensure images are publicly accessible

### Modal not closing
- Try pressing ESC key
- Click outside the modal
- Check for JavaScript errors in console

### Layout issues
- Clear browser cache
- Rebuild the project: `npm run build`
- Check Tailwind classes are valid

## Support

For issues or questions:
1. Check browser console for errors
2. Verify all dependencies installed: `npm install`
3. Rebuild: `npm run build`
4. Check `TESTIMONIALS_INTEGRATION.md` for full documentation

---

**That's it!** The testimonials section is ready to showcase your graduate success stories.
