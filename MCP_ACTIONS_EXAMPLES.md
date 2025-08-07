# Contoh Penggunaan MCP Actions untuk Coding Standards

## Overview

Dokumen ini berisi contoh-contoh praktis penggunaan MCP Supermemory actions untuk menyimpan dan mengambil coding standards Lumbung Group Website.

## 1. Menyimpan Coding Standards (addToSupermemory)

### A. Menyimpan Standards Lengkap

**Prompt untuk AI:**
```
Simpan coding standards untuk Lumbung Group Website ke memori dengan kategori "development-standards" dan tag "coding-guidelines", "react", "nextjs", "typescript", "lumbung-group":

# Lumbung Group Website - Coding Standards

## Development Philosophy
- Write clean, maintainable, and scalable code
- Follow SOLID principles
- Prefer functional and declarative programming patterns
- Emphasize type safety and static analysis
- Practice component-driven development

## Naming Conventions
- PascalCase untuk: Components, Type definitions, Interfaces
- kebab-case untuk: Directory names, File names
- camelCase untuk: Variables, Functions, Methods, Hooks, Properties, Props
- UPPERCASE untuk: Environment variables, Constants, Global configurations

## React Best Practices
- Use functional components with TypeScript interfaces
- Extract reusable logic into custom hooks
- Implement proper component composition
- Use React.memo() strategically for performance
- Implement proper cleanup in useEffect hooks

## Next.js Guidelines
- Utilize App Router for routing
- Default to Server Components
- Use 'use client' directive only when necessary
- Implement proper metadata management
- Use Next.js built-in components (Image, Link, Script)

## Styling with Tailwind CSS
- Use utility-first approach
- Design with mobile-first, responsive principles
- Implement dark mode using CSS variables
- Ensure color contrast ratios meet accessibility standards
- Maintain consistent spacing values

## State Management
- Use useState for component-level state
- Implement useReducer for complex state
- Use Redux Toolkit for global state
- Use useContext for shared state

## Error Handling
- Use error boundaries to catch React errors
- Implement form validation with Zod
- Log errors to external service for tracking
- Design user-friendly fallback UIs

## Testing
- Write unit tests with Jest and React Testing Library
- Follow Arrange-Act-Assert pattern
- Mock external dependencies
- Focus on user workflows for integration tests

## Accessibility
- Use semantic HTML for meaningful structure
- Apply accurate ARIA attributes
- Ensure full keyboard navigation support
- Maintain accessible color contrast ratios
- Follow logical heading hierarchy

## Performance Optimization
- Use React.memo for expensive components
- Implement useMemo for expensive computations
- Use useCallback for memoizing callbacks
- Implement code splitting with dynamic imports
- Use proper key props in lists

## Security
- Implement input sanitization
- Use DOMPurify for HTML content
- Use proper authentication methods
- Never expose sensitive data in client-side code
```

### B. Menyimpan Bagian Spesifik

#### Naming Conventions
```
Simpan naming conventions untuk Lumbung Group dengan tag "naming", "conventions", "lumbung-group":

Lumbung Group Website - Naming Conventions:

1. PascalCase untuk:
   - React Components: UserProfile, ProductCard, NavigationMenu
   - TypeScript Interfaces: UserData, ProductInfo, ApiResponse
   - Type Definitions: ComponentProps, StateType, ActionType

2. kebab-case untuk:
   - Directory names: components/user-profile, pages/product-detail
   - File names: user-profile.tsx, product-card.component.tsx
   - CSS classes: .btn-primary, .card-container

3. camelCase untuk:
   - Variables: userName, productList, isLoading
   - Functions: handleClick, fetchUserData, validateForm
   - Methods: getUserInfo, updateProfile, deleteItem
   - Custom Hooks: useAuth, useLocalStorage, useApi
   - Props: onClick, onSubmit, isDisabled

4. UPPERCASE untuk:
   - Environment variables: NEXT_PUBLIC_API_URL, DATABASE_URL
   - Constants: MAX_RETRY_ATTEMPTS, DEFAULT_TIMEOUT
   - Global configs: API_ENDPOINTS, THEME_COLORS

Specific Patterns:
- Event handlers: handle + Action (handleClick, handleSubmit, handleChange)
- Boolean variables: is/has/can + Description (isLoading, hasError, canSubmit)
- Custom hooks: use + Purpose (useAuth, useForm, useLocalStorage)
```

#### React Component Standards
```
Simpan React component standards untuk Lumbung Group dengan tag "react", "components", "lumbung-group":

Lumbung Group Website - React Component Standards:

1. Component Structure:
```typescript
// UserProfile.tsx
import { memo } from 'react'
import type { User } from '@/types/user'

interface UserProfileProps {
  user: User
  onEdit: (userId: string) => void
  isEditable?: boolean
}

const UserProfile = memo(function UserProfile({
  user,
  onEdit,
  isEditable = false
}: UserProfileProps) {
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      {isEditable && (
        <button onClick={() => onEdit(user.id)}>
          Edit Profile
        </button>
      )}
    </div>
  )
})

export default UserProfile
```

2. Performance Optimization:
- Use React.memo for components that receive stable props
- Implement useCallback for event handlers passed as props
- Use useMemo for expensive calculations
- Avoid inline function definitions in JSX

3. TypeScript Integration:
- Define clear interfaces for all props
- Use proper typing for event handlers
- Implement generic types when needed
- Export types for reuse
```

## 2. Mengambil Coding Standards (searchSupermemory)

### A. Pencarian Umum

#### Akses Semua Standards
```
Cari di memori saya coding standards untuk Lumbung Group Website
```

**Expected Response:**
- Complete coding standards document
- All categories and guidelines
- Project-specific conventions

#### Akses Berdasarkan Kategori
```
Cari di memori saya kategori "development-standards" untuk Lumbung Group
```

### B. Pencarian Spesifik

#### Naming Conventions
```
Cari di memori saya naming conventions untuk React components di Lumbung Group
```

**Expected Response:**
- PascalCase untuk components
- File naming patterns
- Directory structure
- Import/export conventions

#### Styling Guidelines
```
Cari di memori saya Tailwind CSS guidelines untuk Lumbung Group
```

**Expected Response:**
- Utility-first approach
- Responsive design patterns
- Color system usage
- Spacing conventions

#### State Management
```
Cari di memori saya state management best practices untuk Lumbung Group
```

**Expected Response:**
- useState vs useReducer guidelines
- Redux Toolkit patterns
- Context usage rules
- Performance considerations

### C. Pencarian Kontekstual

#### Saat Membuat Component
```
Bagaimana cara membuat React component baru sesuai standards Lumbung Group?
```

#### Saat Styling
```
Apa aturan responsive design untuk Lumbung Group website?
```

#### Saat Error Handling
```
Bagaimana cara implement error handling sesuai standards Lumbung Group?
```

## 3. Skenario Penggunaan Praktis

### A. Code Review Process

#### Checking Naming Conventions
```
Cari di memori saya naming conventions untuk Lumbung Group, saya perlu review component ini:

const userprofile = () => {
  const [userData, setUserData] = useState()
  // ...
}
```

**AI Response akan include:**
- Component name should be PascalCase: UserProfile
- File should be kebab-case: user-profile.tsx
- Function should use proper TypeScript interface

#### Checking Component Structure
```
Cari di memori saya React component standards untuk Lumbung Group, apakah struktur component ini sudah benar?

[paste component code]
```

### B. Development Guidance

#### State Management Decision
```
Cari di memori saya state management guidelines untuk Lumbung Group. Saya punya form dengan 10 fields, haruskah pakai useState atau useReducer?
```

#### Performance Optimization
```
Cari di memori saya performance optimization guidelines untuk Lumbung Group. Component saya re-render terlalu sering, apa yang harus dilakukan?
```

### C. New Team Member Onboarding

#### Getting Started
```
Cari di memori saya semua development guidelines untuk new developer di Lumbung Group project
```

#### Technology-Specific Guidelines
```
Cari di memori saya Next.js best practices untuk Lumbung Group
```

```
Cari di memori saya TypeScript guidelines untuk Lumbung Group
```

## 4. Advanced Usage Patterns

### A. Updating Standards

#### Adding New Guidelines
```
Simpan update untuk Lumbung Group coding standards dengan tag "update", "accessibility":

New Accessibility Guidelines:
- All interactive elements must have focus indicators
- Color contrast ratio minimum 4.5:1 for normal text
- All images must have descriptive alt text
- Form inputs must have associated labels
```

#### Deprecating Old Practices
```
Simpan update untuk Lumbung Group coding standards dengan tag "deprecated":

Deprecated Practices:
- No longer use class components (use functional components)
- Avoid defaultProps (use default parameters)
- Don't use React.FC type (use explicit function declarations)
```

### B. Project-Specific Customizations

#### Feature-Specific Guidelines
```
Simpan guidelines untuk authentication feature di Lumbung Group dengan tag "auth", "security":

Authentication Guidelines:
- Use NextAuth.js for authentication
- Store tokens in httpOnly cookies
- Implement proper session management
- Use middleware for route protection
```

### C. Integration with Development Workflow

#### Pre-commit Checks
```
Cari di memori saya checklist untuk pre-commit review di Lumbung Group project
```

#### Code Generation Templates
```
Cari di memori saya template untuk membuat new page component di Lumbung Group
```

## 5. Troubleshooting Common Issues

### A. Standards Not Found

**Problem:** Query tidak menemukan standards
**Solution:**
```
# Coba query yang lebih general
Apa saja yang tersimpan di memori tentang Lumbung Group?

# Atau cari berdasarkan tag
Cari di memori saya tag "coding-guidelines"
```

### B. Outdated Information

**Problem:** Standards sudah outdated
**Solution:**
```
# Simpan update terbaru
Simpan update untuk Lumbung Group coding standards: [new information]

# Atau clarification
Clarification untuk Lumbung Group standards: [additional context]
```

### C. Conflicting Guidelines

**Problem:** Ada konflik antar guidelines
**Solution:**
```
# Simpan resolution
Simpan resolution untuk conflicting guidelines di Lumbung Group: [decision and reasoning]
```

---

## Quick Reference

### Menyimpan ke Supermemory
```
Simpan [content] untuk Lumbung Group dengan kategori "[category]" dan tag "[tag1]", "[tag2]": [detailed content]
```

### Mengambil dari Supermemory
```
Cari di memori saya [query] untuk Lumbung Group
```

### Update Standards
```
Simpan update untuk Lumbung Group coding standards: [new information]
```

### Verify Storage
```
Apa saja coding standards yang tersimpan untuk Lumbung Group?
```

**Dengan menggunakan pattern-pattern ini, coding standards Lumbung Group Website akan selalu accessible dan up-to-date di semua AI tools melalui Supermemory MCP.** 🚀