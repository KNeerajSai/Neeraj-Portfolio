# Resume Font & Formatting Suggestions

## Current Issues to Address:

### 1. **Font Consistency**
- Your resume appears to use multiple font sizes and weights inconsistently
- The header section (name and contact) could be more distinct
- Technical skills section appears cramped

### 2. **Readability Improvements**

#### Header Section:
- **Name**: Increase to 16-18pt, use a professional font like Calibri, Arial, or Helvetica
- **Contact Info**: Keep at 10-11pt but ensure proper spacing between elements
- Consider using | or • as separators instead of just |

#### Body Text:
- **Main font**: Use a consistent 10-11pt throughout
- **Font choice**: Consider these ATS-friendly fonts:
  - **Calibri** (modern, clean)
  - **Arial** (classic, readable)
  - **Helvetica** (professional)
  - **Georgia** (if you want serif)

#### Section Headers:
- Use 12-13pt bold for section headers (EDUCATION, EXPERIENCE, etc.)
- Consider adding a subtle underline or using ALL CAPS consistently

### 3. **Spacing & Layout**

#### Bullet Points:
- Your sub-bullets (•) are good but ensure consistent indentation
- Add slightly more space between main bullets (2-3pt)

#### Margins:
- Current margins seem tight - consider 0.5-0.7 inches all around
- This will improve readability without sacrificing content

### 4. **Technical Skills Section**
Currently too dense. Consider:
- Breaking into clearer categories with better spacing
- Using a two-column layout for skills
- Removing less relevant skills to reduce clutter

### 5. **Specific Recommendations**

```css
/* Suggested CSS for HTML version */
body {
    font-family: 'Calibri', Arial, sans-serif;
    font-size: 11pt;
    line-height: 1.3; /* Increase from 1.15 */
}

h1 { /* Your name */
    font-size: 18pt;
    font-weight: bold;
    letter-spacing: 0.5px;
}

h2 { /* Section headers */
    font-size: 12pt;
    font-weight: bold;
    margin-top: 12px;
    margin-bottom: 6px;
}

.contact {
    font-size: 11pt;
    margin-bottom: 10px;
}

li {
    margin-bottom: 4px; /* Increase from 2px */
}

.sub-bullet {
    margin-top: 2px;
    line-height: 1.25;
}
```

### 6. **Content Suggestions**

1. **Dates**: Consider right-aligning more consistently
2. **Job Titles**: Make them slightly bolder or use a different weight
3. **Company Names**: Keep bold but ensure consistency
4. **Locations**: Consider making these italic for visual hierarchy

### 7. **ATS Optimization**
Your current format is good for ATS, but ensure:
- No tables or complex formatting
- Standard section headers
- Consistent bullet points
- No headers/footers (you're already doing this well)

### 8. **Visual Hierarchy**
Create better flow by:
- Making your name more prominent (larger/bolder)
- Using consistent spacing between sections
- Ensuring dates align perfectly on the right
- Consider subtle use of bold for key achievements/numbers

Would you like me to create an updated HTML template with these improvements?