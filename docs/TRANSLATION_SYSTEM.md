# Multi-Language Translation System

## Overview

The Fluent Future Institute website now supports five languages with automatic RTL support for Arabic:

- **English** (en) - Default
- **Spanish** (es)
- **Arabic** (ar) - with RTL layout
- **French** (fr)
- **Mandarin Chinese** (zh)

## Features

### 1. Language Switcher
- Located in the header next to "Enroll Now" button
- Globe icon with dropdown showing all available languages
- Displays both native names and English names for clarity
- Current language is highlighted with a checkmark

### 2. Persistent Language Selection
- User's language choice is saved to localStorage
- Selection persists across page navigation
- Automatically loads last selected language on return visits

### 3. RTL Support for Arabic
- Automatic direction switch when Arabic is selected
- Custom CSS rules handle spacing adjustments for RTL layout
- All text, navigation, and UI elements properly flip for RTL reading

### 4. Multilingual Fonts
- Arabic: Optimized with Segoe UI font stack for better Arabic character rendering
- Mandarin: Uses Microsoft YaHei and PingFang SC for proper Chinese character display
- Other languages use the default font stack

## Implementation Details

### Translation Files
All translation strings are organized in JSON files:
```
src/i18n/locales/
  ├── en.json (English)
  ├── es.json (Spanish)
  ├── ar.json (Arabic)
  ├── fr.json (French)
  └── zh.json (Mandarin Chinese)
```

### Configuration
Translation system is configured in `src/i18n/config.ts` using i18next:
- Automatic language detection from localStorage or browser settings
- Fallback to English if selected language is unavailable
- No HTML escaping in translations (safe HTML rendering enabled)

### Usage in Components
```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
    </div>
  );
}
```

### RTL Styling
Custom CSS rules in `src/index.css` handle:
- Direction switching (`dir="rtl"`)
- Space adjustments for RTL layouts
- Font family overrides for specific languages

## Pages Translated

Currently translated pages and components:
- ✅ Header (Navigation)
- ✅ Footer
- ✅ Home Page (Hero, Programs, Corporate sections)
- ⏳ About Page (Pending)
- ⏳ Programs Page (Pending)
- ⏳ Articles Page (Pending)
- ⏳ Corporate Page (Pending)

## Adding New Translations

### 1. Add Translation Keys
Add new keys to all language files (`en.json`, `es.json`, `ar.json`, `fr.json`, `zh.json`):

```json
{
  "newSection": {
    "title": "New Section Title",
    "description": "Section description"
  }
}
```

### 2. Use in Components
```tsx
<h2>{t('newSection.title')}</h2>
<p>{t('newSection.description')}</p>
```

### 3. Test All Languages
Switch between languages using the language switcher to verify:
- All text displays correctly
- No missing translation keys
- RTL layout works properly for Arabic
- Fonts render correctly for Chinese

## Language Detection Priority

1. **localStorage**: Previously selected language
2. **Browser Language**: User's browser language setting
3. **Fallback**: English (en)

## Technical Stack

- **i18next**: Core translation library
- **react-i18next**: React integration
- **i18next-browser-languagedetector**: Automatic language detection

## Browser Compatibility

The translation system works in all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Performance Considerations

- Translation files are bundled with the app (no lazy loading needed for 5 languages)
- Minimal overhead: ~50KB total for all translation files
- Language switching is instant (no network requests)
- RTL layout switch has no performance impact

## Future Enhancements

Potential improvements for future versions:
- [ ] Translate remaining pages (About, Programs, Articles, Corporate)
- [ ] Add more languages (Portuguese, German, Italian, etc.)
- [ ] Implement translation management system
- [ ] Add language-specific number and date formatting
- [ ] Create translation contribution workflow for community translations
