# Blog Management Guide

This guide explains how to add and manage blog posts on your portfolio website.

## How to Add a New Blog Post

### 1. Create a Markdown File

Create a new `.md` file in the `content/posts/` directory. The filename should match your slug.

**Example**: `content/posts/my-new-post.md`

### 2. Add Frontmatter

Every blog post needs frontmatter at the top with metadata:

```markdown
---
title: "Your Post Title"
description: "A brief description that appears in post previews"
date: "2025-01-15"
category: "technical"  # or "personal"
tags: ["React", "JavaScript", "Web Development"]
readTime: "5 min read"
slug: "your-post-slug"
---

# Your Post Title

Your content goes here...
```

### 3. Write Your Content

Write your blog post using standard Markdown syntax:

```markdown
## Section Headers

Regular paragraphs with **bold** and *italic* text.

- Bullet points
- More points

1. Numbered lists
2. Second item

### Code Examples

```javascript
function example() {
  console.log("Hello, world!");
}
```

[Links](https://example.com) and images work too!
```

## File Structure

```
content/
└── posts/
    ├── building-scalable-microservices-architecture.md
    ├── finding-balance-life-engineer-ghana.md
    └── your-new-post.md
```

## Frontmatter Fields

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | ✅ | Post title | "Building Scalable APIs" |
| `description` | ✅ | Brief summary | "Learn how to build..." |
| `date` | ✅ | Publication date | "2025-01-15" |
| `category` | ✅ | technical or personal | "technical" |
| `tags` | ✅ | Array of tags | ["API", "Backend"] |
| `readTime` | ✅ | Estimated read time | "8 min read" |
| `slug` | ✅ | URL slug | "building-scalable-apis" |

## Categories

- **technical**: Programming, architecture, tutorials, tech insights
- **personal**: Life experiences, photography, travel, personal thoughts

## Publishing Workflow

1. **Create** your markdown file in `content/posts/`
2. **Test locally** with `npm run dev`
3. **Commit** your changes to git
4. **Push** to GitHub
5. **Deploy** (automatic if using Vercel)

## Tips

### Good Post Slugs
- Use lowercase letters and hyphens
- Match your filename: `my-post.md` → `slug: "my-post"`
- Keep them descriptive but concise

### Categories
- **Technical posts**: Tutorials, code examples, architecture discussions
- **Personal posts**: Life stories, photography, cultural observations, sports

### Tags
- Use 3-5 relevant tags per post
- Be consistent with tag names
- Examples: "React", "Ghana", "Photography", "Microservices"

### Writing Tips
- Start with an engaging introduction
- Use clear section headers
- Include code examples for technical posts
- Add personal insights and experiences
- Keep paragraphs readable (not too long)

## Example Post Templates

### Technical Post Template

```markdown
---
title: "Building Fast APIs with Node.js"
description: "Learn performance optimization techniques for Node.js APIs that handle millions of requests."
date: "2025-01-15"
category: "technical"
tags: ["Node.js", "Performance", "API", "Backend"]
readTime: "10 min read"
slug: "building-fast-apis-nodejs"
---

# Building Fast APIs with Node.js

Introduction paragraph explaining what this post covers...

## The Problem

Describe the challenge you're solving...

## Solution

Step-by-step walkthrough...

```javascript
// Code example
app.get('/api/users', async (req, res) => {
  // Implementation
});
```

## Conclusion

Wrap up with key takeaways...
```

### Personal Post Template

```markdown
---
title: "Lessons from Street Photography in Accra"
description: "What wandering through Accra's vibrant streets taught me about patience, observation, and finding beauty in everyday moments."
date: "2025-01-15"
category: "personal"
tags: ["Photography", "Accra", "Life Lessons", "Ghana"]
readTime: "6 min read"
slug: "lessons-street-photography-accra"
---

# Lessons from Street Photography in Accra

Every weekend, I walk through different neighborhoods of Accra with my camera...

## What I've Learned

Photography isn't just about capturing images...

## The Technical Side

Even personal stories can include technical insights...

## Reflections

How this connects to my work and life...
```

## Troubleshooting

### Post Not Showing Up?
1. Check that your file is in `content/posts/`
2. Verify frontmatter syntax (proper YAML)
3. Ensure date format is "YYYY-MM-DD"
4. Restart the development server

### 404 Error on Post Page?
1. Verify the slug in frontmatter matches the URL
2. Check that the markdown file exists
3. Ensure no typos in the filename

### Images Not Loading?
- Put images in `public/images/`
- Reference them as `/images/your-image.jpg`
- Use relative paths in markdown

## Need Help?

If you run into issues:
1. Check the console for error messages
2. Verify your markdown syntax
3. Look at existing posts as examples
4. Test locally before pushing to production