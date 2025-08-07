# Standar Penulisan Kode - Website Lumbung Group

## 📋 Daftar Isi
1. [Filosofi Pengembangan](#filosofi-pengembangan)
2. [Konvensi Penamaan](#konvensi-penamaan)
3. [Struktur Folder dan Organisasi File](#struktur-folder-dan-organisasi-file)
4. [Standar React/Next.js](#standar-reactnextjs)
5. [Styling Guidelines](#styling-guidelines)
6. [State Management](#state-management)
7. [Error Handling dan Validation](#error-handling-dan-validation)
8. [Accessibility Standards](#accessibility-standards)
9. [Performance Optimization](#performance-optimization)
10. [Testing Guidelines](#testing-guidelines)
11. [Documentation Standards](#documentation-standards)
12. [Code Style](#code-style)

---

## 🎯 Filosofi Pengembangan

### Prinsip Utama
- **Clean Code**: Tulis kode yang bersih, mudah dibaca, dan dapat dipelihara
- **SOLID Principles**: Ikuti prinsip SOLID untuk arsitektur yang baik
- **Functional Programming**: Utamakan pola functional dan declarative daripada imperative
- **Type Safety**: Gunakan TypeScript untuk keamanan tipe
- **Component-Driven Development**: Kembangkan dengan pendekatan komponen

---

## 🏷️ Konvensi Penamaan

### Aturan Umum

#### PascalCase untuk:
- **Komponen React**: `Header`, `ProductCard`, `UserProfile`
- **Type definitions**: `UserData`, `ProductInfo`
- **Interfaces**: `IUserProps`, `IProductData`

```typescript
// ✅ Benar
interface UserProfileProps {
  name: string
  email: string
}

function UserProfile({ name, email }: UserProfileProps) {
  return <div>{name}</div>
}

// ❌ Salah
interface userProfileProps {
  name: string
  email: string
}

function userProfile({ name, email }: userProfileProps) {
  return <div>{name}</div>
}
```

#### kebab-case untuk:
- **Nama direktori**: `components/user-profile`, `pages/product-detail`
- **Nama file**: `user-profile.tsx`, `product-card.tsx`

```
// ✅ Benar
components/
├── user-profile/
│   ├── user-profile.tsx
│   └── user-profile.test.tsx
└── product-card/
    ├── product-card.tsx
    └── product-card.module.css

// ❌ Salah
components/
├── UserProfile/
│   ├── UserProfile.tsx
│   └── UserProfile.test.tsx
└── productCard/
    ├── productCard.tsx
    └── productCard.module.css
```

#### camelCase untuk:
- **Variabel**: `userName`, `productList`
- **Fungsi**: `handleClick`, `fetchUserData`
- **Methods**: `getUserInfo`, `updateProduct`
- **Hooks**: `useAuth`, `useProductData`
- **Properties**: `isLoading`, `hasError`
- **Props**: `onClick`, `isVisible`

```typescript
// ✅ Benar
const userName = 'John Doe'
const isLoading = false

function handleSubmit() {
  // logic here
}

function useUserData() {
  // custom hook logic
}

// ❌ Salah
const user_name = 'John Doe'
const IsLoading = false

function HandleSubmit() {
  // logic here
}

function UseUserData() {
  // custom hook logic
}
```

#### UPPERCASE untuk:
- **Environment variables**: `API_URL`, `DATABASE_URL`
- **Constants**: `MAX_RETRY_COUNT`, `DEFAULT_TIMEOUT`
- **Global configurations**: `THEME_COLORS`, `BREAKPOINTS`

```typescript
// ✅ Benar
const API_URL = process.env.NEXT_PUBLIC_API_URL
const MAX_RETRY_COUNT = 3
const THEME_COLORS = {
  PRIMARY: '#007bff',
  SECONDARY: '#6c757d'
}

// ❌ Salah
const apiUrl = process.env.NEXT_PUBLIC_API_URL
const maxRetryCount = 3
const themeColors = {
  primary: '#007bff',
  secondary: '#6c757d'
}
```

### Pola Penamaan Khusus

#### Event Handlers
Prefix dengan 'handle': `handleClick`, `handleSubmit`, `handleChange`

```typescript
// ✅ Benar
function ProductCard() {
  const handleAddToCart = () => {
    // logic
  }
  
  const handleViewDetails = () => {
    // logic
  }
  
  return (
    <div>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleViewDetails}>View Details</button>
    </div>
  )
}

// ❌ Salah
function ProductCard() {
  const addToCart = () => {
    // logic
  }
  
  const viewDetails = () => {
    // logic
  }
  
  return (
    <div>
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={viewDetails}>View Details</button>
    </div>
  )
}
```

#### Boolean Variables
Prefix dengan verbs: `isLoading`, `hasError`, `canSubmit`, `shouldShow`

```typescript
// ✅ Benar
const isLoading = false
const hasError = true
const canSubmit = formData.isValid
const shouldShowModal = user.isAuthenticated

// ❌ Salah
const loading = false
const error = true
const submit = formData.isValid
const modal = user.isAuthenticated
```

#### Custom Hooks
Prefix dengan 'use': `useAuth`, `useForm`, `useProductData`

```typescript
// ✅ Benar
function useAuth() {
  const [user, setUser] = useState(null)
  // logic
  return { user, login, logout }
}

function useProductData(productId: string) {
  const [product, setProduct] = useState(null)
  // logic
  return { product, loading, error }
}

// ❌ Salah
function authHook() {
  const [user, setUser] = useState(null)
  // logic
  return { user, login, logout }
}

function getProductData(productId: string) {
  const [product, setProduct] = useState(null)
  // logic
  return { product, loading, error }
}
```

---

## 📁 Struktur Folder dan Organisasi File

### Struktur Direktori Utama

```
website_scratch/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # Shadcn UI components
│   │   └── button.tsx
│   ├── magicui/          # Magic UI components
│   │   ├── marquee.tsx
│   │   └── text-animate.tsx
│   ├── Header.tsx        # Main components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Products.tsx
│   ├── Gallery.tsx
│   ├── CtaVideo.tsx
│   ├── Partners.tsx
│   ├── Subsidiaries.tsx
│   └── Footer.tsx
├── lib/                   # Utility functions
│   └── utils.ts
├── public/               # Static assets
│   ├── fonts/
│   └── images/
├── types/                # TypeScript type definitions
├── hooks/                # Custom React hooks
├── utils/                # Helper functions
├── constants/            # Application constants
└── styles/               # Additional styles
```

### Aturan Organisasi File

#### 1. Komponen
- Satu komponen per file
- Nama file menggunakan kebab-case
- Nama komponen menggunakan PascalCase
- File test di samping komponen dengan suffix `.test.tsx`

```
components/
├── product-card/
│   ├── product-card.tsx
│   ├── product-card.test.tsx
│   └── index.ts          # Re-export
└── user-profile/
    ├── user-profile.tsx
    ├── user-profile.test.tsx
    └── index.ts
```

#### 2. Hooks
- Semua custom hooks di folder `hooks/`
- Prefix nama dengan 'use'
- Satu hook per file

```
hooks/
├── use-auth.ts
├── use-product-data.ts
├── use-form-validation.ts
└── index.ts              # Re-export semua hooks
```

#### 3. Types
- Semua type definitions di folder `types/`
- Kelompokkan berdasarkan domain

```
types/
├── user.ts
├── product.ts
├── api.ts
└── index.ts              # Re-export semua types
```

#### 4. Utils
- Fungsi utility di folder `utils/`
- Kelompokkan berdasarkan fungsi

```
utils/
├── format.ts             # Formatting functions
├── validation.ts         # Validation functions
├── api.ts               # API helpers
└── index.ts             # Re-export
```

---

## ⚛️ Standar React/Next.js

### Komponen Functional dengan TypeScript

#### Template Komponen Standar

```typescript
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

// Interface untuk props
interface ProductCardProps {
  id: string
  title: string
  price: number
  image: string
  description?: string
  isLoading?: boolean
  onClick?: () => void
  children?: ReactNode
  className?: string
}

// Komponen dengan function keyword
function ProductCard({
  id,
  title,
  price,
  image,
  description,
  isLoading = false,
  onClick,
  children,
  className
}: ProductCardProps) {
  // Hooks di bagian atas
  const [isHovered, setIsHovered] = useState(false)
  
  // Event handlers
  const handleMouseEnter = () => {
    setIsHovered(true)
  }
  
  const handleMouseLeave = () => {
    setIsHovered(false)
  }
  
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }
  
  // Early returns untuk loading/error states
  if (isLoading) {
    return <ProductCardSkeleton />
  }
  
  // Main render
  return (
    <div 
      className={cn(
        'product-card border rounded-lg p-4 transition-all',
        isHovered && 'shadow-lg',
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <h3 className="typography-heading-3 mt-2">{title}</h3>
      <p className="typography-body text-gray-600">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="typography-heading-4">${price}</span>
        {children}
      </div>
    </div>
  )
}

// Default export
export default ProductCard

// Named exports untuk types jika diperlukan
export type { ProductCardProps }
```

### Hooks Pattern

#### Custom Hook Template

```typescript
import { useState, useEffect, useCallback } from 'react'

// Types untuk hook
interface UseProductDataOptions {
  autoRefresh?: boolean
  refreshInterval?: number
}

interface UseProductDataReturn {
  products: Product[]
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
  addProduct: (product: Omit<Product, 'id'>) => Promise<void>
}

// Custom hook
function useProductData(
  categoryId?: string,
  options: UseProductDataOptions = {}
): UseProductDataReturn {
  const { autoRefresh = false, refreshInterval = 30000 } = options
  
  // State
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  // Memoized functions
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch(
        categoryId 
          ? `/api/products?category=${categoryId}`
          : '/api/products'
      )
      
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
      
      const data = await response.json()
      setProducts(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }, [categoryId])
  
  const addProduct = useCallback(async (product: Omit<Product, 'id'>) => {
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      })
      
      if (!response.ok) {
        throw new Error('Failed to add product')
      }
      
      const newProduct = await response.json()
      setProducts(prev => [...prev, newProduct])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add product')
    }
  }, [])
  
  // Effects
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])
  
  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(fetchProducts, refreshInterval)
      return () => clearInterval(interval)
    }
  }, [autoRefresh, refreshInterval, fetchProducts])
  
  return {
    products,
    loading,
    error,
    refetch: fetchProducts,
    addProduct
  }
}

export default useProductData
```

### Next.js App Router

#### Page Component Template

```typescript
import { Metadata } from 'next'
import ProductList from '@/components/product-list'
import { getProducts } from '@/lib/api'

// Metadata untuk SEO
export const metadata: Metadata = {
  title: 'Products - Lumbung Group',
  description: 'Explore our wide range of products and services',
  openGraph: {
    title: 'Products - Lumbung Group',
    description: 'Explore our wide range of products and services',
    images: ['/images/products-og.jpg']
  }
}

// Server Component (default)
async function ProductsPage() {
  // Data fetching di server
  const products = await getProducts()
  
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="typography-heading-1 mb-8">Our Products</h1>
      <ProductList products={products} />
    </main>
  )
}

export default ProductsPage
```

#### Client Component Template

```typescript
'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import useProductData from '@/hooks/use-product-data'

function InteractiveProductList() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const { products, loading, error, refetch } = useProductData(selectedCategory)
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }
  
  const handleRefresh = () => {
    refetch()
  }
  
  if (loading) {
    return <div>Loading products...</div>
  }
  
  if (error) {
    return (
      <div className="text-red-600">
        Error: {error}
        <Button onClick={handleRefresh} className="ml-2">
          Retry
        </Button>
      </div>
    )
  }
  
  return (
    <div>
      {/* Category filters */}
      <div className="mb-6">
        <Button 
          variant={selectedCategory === null ? 'default' : 'outline'}
          onClick={() => handleCategoryChange(null)}
        >
          All
        </Button>
        {/* More category buttons */}
      </div>
      
      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

export default InteractiveProductList
```

---

## 🎨 Styling Guidelines

### Tailwind CSS Best Practices

#### 1. Utility-First Approach

```typescript
// ✅ Benar - Gunakan utility classes
function Button({ children, variant = 'primary' }) {
  const baseClasses = 'px-4 py-2 rounded-lg font-medium transition-colors'
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50'
  }
  
  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  )
}

// ❌ Salah - Jangan gunakan custom CSS kecuali benar-benar diperlukan
function Button({ children }) {
  return (
    <button className="custom-button">
      {children}
    </button>
  )
}

/* CSS terpisah */
.custom-button {
  padding: 1rem 2rem;
  background: blue;
  color: white;
}
```

#### 2. Responsive Design (Mobile-First)

```typescript
// ✅ Benar - Mobile-first responsive design
function ProductGrid({ products }) {
  return (
    <div className="
      grid 
      grid-cols-1 
      gap-4 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4 
      xl:grid-cols-5
    ">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}

// ❌ Salah - Desktop-first approach
function ProductGrid({ products }) {
  return (
    <div className="
      grid 
      grid-cols-5 
      xl:grid-cols-4 
      lg:grid-cols-3 
      md:grid-cols-2 
      sm:grid-cols-1
    ">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}
```

#### 3. Typography System

Gunakan typography classes yang sudah didefinisikan di `globals.css`:

```typescript
// ✅ Benar - Gunakan typography classes
function ArticleContent() {
  return (
    <article>
      <h1 className="typography-heading-1">Main Title</h1>
      <h2 className="typography-heading-2">Section Title</h2>
      <h3 className="typography-heading-3">Subsection Title</h3>
      <p className="typography-body">Body text content here...</p>
      <p className="typography-caption">Caption or small text</p>
      <button className="typography-button">Button Text</button>
    </article>
  )
}

// ❌ Salah - Jangan gunakan arbitrary font sizes
function ArticleContent() {
  return (
    <article>
      <h1 className="text-4xl font-bold">Main Title</h1>
      <h2 className="text-2xl font-semibold">Section Title</h2>
      <p className="text-base">Body text content here...</p>
    </article>
  )
}
```

#### 4. Color System

```typescript
// ✅ Benar - Gunakan semantic color names
function StatusBadge({ status }) {
  const colorClasses = {
    success: 'bg-green-100 text-green-800 border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    error: 'bg-red-100 text-red-800 border-red-200',
    info: 'bg-blue-100 text-blue-800 border-blue-200'
  }
  
  return (
    <span className={`
      px-2 py-1 rounded-full text-sm font-medium border
      ${colorClasses[status]}
    `}>
      {status}
    </span>
  )
}

// ❌ Salah - Jangan hardcode warna
function StatusBadge({ status }) {
  return (
    <span className="bg-green-500 text-white px-2 py-1 rounded">
      {status}
    </span>
  )
}
```

#### 5. Spacing Consistency

```typescript
// ✅ Benar - Gunakan spacing scale yang konsisten
function Card({ title, content, actions }) {
  return (
    <div className="
      bg-white 
      rounded-lg 
      shadow-md 
      p-6 
      space-y-4
    ">
      <h3 className="typography-heading-3">{title}</h3>
      <p className="typography-body text-gray-600">{content}</p>
      <div className="flex gap-3 pt-2">
        {actions}
      </div>
    </div>
  )
}

// ❌ Salah - Spacing yang tidak konsisten
function Card({ title, content, actions }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-5">
      <h3 className="mb-2">{title}</h3>
      <p className="mb-3 text-gray-600">{content}</p>
      <div className="flex gap-2 mt-4">
        {actions}
      </div>
    </div>
  )
}
```

### CSS Variables untuk Theming

```css
/* globals.css */
:root {
  /* Colors */
  --color-primary: #007bff;
  --color-primary-hover: #0056b3;
  --color-secondary: #6c757d;
  --color-success: #28a745;
  --color-warning: #ffc107;
  --color-error: #dc3545;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  
  /* Typography */
  --font-family-primary: 'Inter Variable', sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #1a1a1a;
    --color-foreground: #ffffff;
    --color-muted: #6b7280;
  }
}
```

---

## 🗂️ State Management

### Local State dengan useState

```typescript
// ✅ Benar - State yang sederhana dan terlokalisasi
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await submitContactForm(formData)
      // Reset form on success
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setErrors({ submit: 'Failed to submit form' })
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  )
}
```

### Complex State dengan useReducer

```typescript
// State type
interface ShoppingCartState {
  items: CartItem[]
  total: number
  isLoading: boolean
  error: string | null
}

// Action types
type ShoppingCartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }

// Reducer function
function shoppingCartReducer(
  state: ShoppingCartState,
  action: ShoppingCartAction
): ShoppingCartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        )
        return {
          ...state,
          items: updatedItems,
          total: calculateTotal(updatedItems)
        }
      }
      
      const newItems = [...state.items, action.payload]
      return {
        ...state,
        items: newItems,
        total: calculateTotal(newItems)
      }
    }
    
    case 'REMOVE_ITEM': {
      const filteredItems = state.items.filter(item => item.id !== action.payload)
      return {
        ...state,
        items: filteredItems,
        total: calculateTotal(filteredItems)
      }
    }
    
    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      )
      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems)
      }
    }
    
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        total: 0
      }
    
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      }
    
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload
      }
    
    default:
      return state
  }
}

// Hook untuk shopping cart
function useShoppingCart() {
  const [state, dispatch] = useReducer(shoppingCartReducer, {
    items: [],
    total: 0,
    isLoading: false,
    error: null
  })
  
  const addItem = useCallback((item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item })
  }, [])
  
  const removeItem = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }, [])
  
  const updateQuantity = useCallback((id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
  }, [])
  
  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' })
  }, [])
  
  return {
    ...state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart
  }
}
```

### Global State dengan Context

```typescript
// Context definition
interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  register: (userData: RegisterData) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Provider component
function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  
  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('authToken')
        if (token) {
          const userData = await verifyToken(token)
          setUser(userData)
        }
      } catch (error) {
        localStorage.removeItem('authToken')
      } finally {
        setIsLoading(false)
      }
    }
    
    checkAuth()
  }, [])
  
  const login = useCallback(async (email: string, password: string) => {
    try {
      setIsLoading(true)
      const { user, token } = await loginUser(email, password)
      localStorage.setItem('authToken', token)
      setUser(user)
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [])
  
  const logout = useCallback(() => {
    localStorage.removeItem('authToken')
    setUser(null)
  }, [])
  
  const register = useCallback(async (userData: RegisterData) => {
    try {
      setIsLoading(true)
      const { user, token } = await registerUser(userData)
      localStorage.setItem('authToken', token)
      setUser(user)
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [])
  
  const value = {
    user,
    isLoading,
    login,
    logout,
    register
  }
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook untuk menggunakan context
function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// Export
export { AuthProvider, useAuth }
```

---

## ⚠️ Error Handling dan Validation

### Error Boundaries

```typescript
import { Component, ErrorInfo, ReactNode } from 'react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }
  
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }
  
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    
    // Log to external service (e.g., Sentry)
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }
  }
  
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }
      
      return (
        <div className="error-boundary p-6 text-center">
          <h2 className="typography-heading-2 text-red-600 mb-4">
            Oops! Something went wrong
          </h2>
          <p className="typography-body text-gray-600 mb-4">
            We're sorry for the inconvenience. Please try refreshing the page.
          </p>
          <button 
            className="typography-button bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </button>
        </div>
      )
    }
    
    return this.props.children
  }
}

export default ErrorBoundary
```

### Form Validation dengan Zod

```typescript
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

// Schema validation
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number')
    .optional(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be less than 500 characters'),
  agreeToTerms: z
    .boolean()
    .refine(val => val === true, 'You must agree to the terms')
})

type ContactFormData = z.infer<typeof contactFormSchema>

// Form component
function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })
  
  const onSubmit = async (data: ContactFormData) => {
    try {
      await submitContactForm(data)
      reset()
      // Show success message
    } catch (error) {
      // Handle submission error
      console.error('Form submission error:', error)
    }
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="typography-body font-medium">
          Name *
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          className={`
            w-full px-3 py-2 border rounded-md
            ${errors.name ? 'border-red-500' : 'border-gray-300'}
          `}
        />
        {errors.name && (
          <p className="typography-caption text-red-600 mt-1">
            {errors.name.message}
          </p>
        )}
      </div>
      
      <div>
        <label htmlFor="email" className="typography-body font-medium">
          Email *
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className={`
            w-full px-3 py-2 border rounded-md
            ${errors.email ? 'border-red-500' : 'border-gray-300'}
          `}
        />
        {errors.email && (
          <p className="typography-caption text-red-600 mt-1">
            {errors.email.message}
          </p>
        )}
      </div>
      
      <div>
        <label htmlFor="message" className="typography-body font-medium">
          Message *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={4}
          className={`
            w-full px-3 py-2 border rounded-md
            ${errors.message ? 'border-red-500' : 'border-gray-300'}
          `}
        />
        {errors.message && (
          <p className="typography-caption text-red-600 mt-1">
            {errors.message.message}
          </p>
        )}
      </div>
      
      <div className="flex items-center">
        <input
          {...register('agreeToTerms')}
          type="checkbox"
          id="agreeToTerms"
          className="mr-2"
        />
        <label htmlFor="agreeToTerms" className="typography-caption">
          I agree to the terms and conditions *
        </label>
      </div>
      {errors.agreeToTerms && (
        <p className="typography-caption text-red-600">
          {errors.agreeToTerms.message}
        </p>
      )}
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="
          w-full bg-blue-600 text-white py-2 px-4 rounded-md
          hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed
          typography-button
        "
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  )
}
```

### API Error Handling

```typescript
// Error types
interface ApiError {
  message: string
  status: number
  code?: string
}

class ApiClient {
  private baseURL: string
  
  constructor(baseURL: string) {
    this.baseURL = baseURL
  }
  
  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      
      const error: ApiError = {
        message: errorData.message || 'An error occurred',
        status: response.status,
        code: errorData.code
      }
      
      throw error
    }
    
    return response.json()
  }
  
  async get<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`)
      return this.handleResponse<T>(response)
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error('Network error: Please check your connection')
      }
      throw error
    }
  }
  
  async post<T>(endpoint: string, data: any): Promise<T> {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      return this.handleResponse<T>(response)
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error('Network error: Please check your connection')
      }
      throw error
    }
  }
}

// Usage with error handling
function useApiCall<T>(apiCall: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const execute = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const result = await apiCall()
      setData(result)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unexpected error occurred')
      }
    } finally {
      setLoading(false)
    }
  }, [apiCall])
  
  return { data, loading, error, execute }
}
```

---

## ♿ Accessibility Standards

### Semantic HTML

```typescript
// ✅ Benar - Gunakan semantic HTML
function ArticlePage({ article }) {
  return (
    <main>
      <article>
        <header>
          <h1 className="typography-heading-1">{article.title}</h1>
          <p className="typography-caption text-gray-600">
            Published on <time dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
          </p>
        </header>
        
        <section>
          <h2 className="typography-heading-2">Introduction</h2>
          <p className="typography-body">{article.introduction}</p>
        </section>
        
        <section>
          <h2 className="typography-heading-2">Main Content</h2>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </section>
        
        <footer>
          <p className="typography-caption">Tags: {article.tags.join(', ')}</p>
        </footer>
      </article>
      
      <aside>
        <h2 className="typography-heading-3">Related Articles</h2>
        <nav aria-label="Related articles">
          <ul>
            {relatedArticles.map(related => (
              <li key={related.id}>
                <a href={`/articles/${related.slug}`}>
                  {related.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </main>
  )
}

// ❌ Salah - Gunakan div untuk semua
function ArticlePage({ article }) {
  return (
    <div>
      <div>
        <div className="typography-heading-1">{article.title}</div>
        <div className="typography-caption text-gray-600">
          Published on {formatDate(article.publishedAt)}
        </div>
      </div>
      
      <div>
        <div className="typography-heading-2">Introduction</div>
        <div className="typography-body">{article.introduction}</div>
      </div>
    </div>
  )
}
```

### ARIA Attributes

```typescript
// Modal dengan proper ARIA
function Modal({ isOpen, onClose, title, children }) {
  const modalRef = useRef<HTMLDivElement>(null)
  
  // Focus management
  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus()
    }
  }, [isOpen])
  
  // Escape key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])
  
  if (!isOpen) return null
  
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
        tabIndex={-1}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 id="modal-title" className="typography-heading-2">
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div>{children}</div>
      </div>
    </div>
  )
}

// Form dengan proper labels dan descriptions
function AccessibleForm() {
  return (
    <form>
      <div className="mb-4">
        <label htmlFor="email" className="typography-body font-medium">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          aria-describedby="email-help"
          className="w-full px-3 py-2 border rounded-md"
        />
        <p id="email-help" className="typography-caption text-gray-600 mt-1">
          We'll never share your email with anyone else.
        </p>
      </div>
      
      <fieldset className="mb-4">
        <legend className="typography-body font-medium mb-2">
          Notification Preferences
        </legend>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="typography-body">Email notifications</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="typography-body">SMS notifications</span>
          </label>
        </div>
      </fieldset>
    </form>
  )
}
```

### Keyboard Navigation

```typescript
// Dropdown dengan keyboard navigation
function Dropdown({ options, onSelect, placeholder }) {
  const [isOpen, setIsOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const dropdownRef = useRef<HTMLDivElement>(null)
  
  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault()
        if (focusedIndex >= 0) {
          onSelect(options[focusedIndex])
          setIsOpen(false)
        } else {
          setIsOpen(!isOpen)
        }
        break
        
      case 'ArrowDown':
        e.preventDefault()
        if (!isOpen) {
          setIsOpen(true)
        } else {
          setFocusedIndex(prev => 
            prev < options.length - 1 ? prev + 1 : 0
          )
        }
        break
        
      case 'ArrowUp':
        e.preventDefault()
        if (isOpen) {
          setFocusedIndex(prev => 
            prev > 0 ? prev - 1 : options.length - 1
          )
        }
        break
        
      case 'Escape':
        setIsOpen(false)
        setFocusedIndex(-1)
        break
    }
  }
  
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onKeyDown={handleKeyDown}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-2 border rounded-md text-left"
      >
        {placeholder}
      </button>
      
      {isOpen && (
        <ul
          role="listbox"
          className="absolute z-10 w-full bg-white border rounded-md shadow-lg mt-1"
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              role="option"
              aria-selected={focusedIndex === index}
              className={`
                px-3 py-2 cursor-pointer
                ${focusedIndex === index ? 'bg-blue-100' : 'hover:bg-gray-100'}
              `}
              onClick={() => {
                onSelect(option)
                setIsOpen(false)
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
```

### Color Contrast

```typescript
// Pastikan kontras warna yang cukup
const colorCombinations = {
  // ✅ Benar - Kontras yang cukup (4.5:1 minimum)
  primary: {
    background: 'bg-blue-600',    // #1d4ed8
    text: 'text-white'            // #ffffff
  },
  secondary: {
    background: 'bg-gray-100',    // #f3f4f6
    text: 'text-gray-900'         // #111827
  },
  success: {
    background: 'bg-green-600',   // #16a34a
    text: 'text-white'            // #ffffff
  },
  
  // ❌ Salah - Kontras tidak cukup
  // warning: {
  //   background: 'bg-yellow-300',  // #fde047
  //   text: 'text-white'            // #ffffff - kontras terlalu rendah
  // }
  
  // ✅ Benar - Perbaikan untuk warning
  warning: {
    background: 'bg-yellow-500',  // #eab308
    text: 'text-black'            // #000000
  }
}
```

---

## ⚡ Performance Optimization

### React.memo dan useMemo

```typescript
// Memoize komponen yang expensive
const ProductCard = memo(function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product.id)}>
        Add to Cart
      </button>
    </div>
  )
})

// Memoize expensive calculations
function ProductList({ products, filters }) {
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      return (
        (!filters.category || product.category === filters.category) &&
        (!filters.minPrice || product.price >= filters.minPrice) &&
        (!filters.maxPrice || product.price <= filters.maxPrice) &&
        (!filters.search || product.name.toLowerCase().includes(filters.search.toLowerCase()))
      )
    })
  }, [products, filters])
  
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'name':
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })
  }, [filteredProducts, filters.sortBy])
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
```

### useCallback untuk Event Handlers

```typescript
function TodoList({ todos, onToggle, onDelete, onEdit }) {
  // Memoize event handlers
  const handleToggle = useCallback((id: string) => {
    onToggle(id)
  }, [onToggle])
  
  const handleDelete = useCallback((id: string) => {
    onDelete(id)
  }, [onDelete])
  
  const handleEdit = useCallback((id: string, newText: string) => {
    onEdit(id, newText)
  }, [onEdit])
  
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </ul>
  )
}

// TodoItem juga di-memoize
const TodoItem = memo(function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)
  
  const handleSave = useCallback(() => {
    onEdit(todo.id, editText)
    setIsEditing(false)
  }, [todo.id, editText, onEdit])
  
  return (
    <li className="flex items-center gap-2 p-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      
      {isEditing ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleSave}
            onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          />
        </>
      ) : (
        <>
          <span 
            className={todo.completed ? 'line-through' : ''}
            onDoubleClick={() => setIsEditing(true)}
          >
            {todo.text}
          </span>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </>
      )}
    </li>
  )
})
```

### Code Splitting dan Lazy Loading

```typescript
// Lazy load komponen yang tidak immediately needed
const AdminPanel = lazy(() => import('./admin-panel'))
const UserDashboard = lazy(() => import('./user-dashboard'))
const ProductDetails = lazy(() => import('./product-details'))

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route 
            path="/products/:id" 
            element={<ProductDetails />} 
          />
          <Route 
            path="/admin" 
            element={<AdminPanel />} 
          />
          <Route 
            path="/dashboard" 
            element={<UserDashboard />} 
          />
        </Routes>
      </Suspense>
    </Router>
  )
}

// Dynamic import untuk utility functions
const loadChartLibrary = async () => {
  const { Chart } = await import('chart.js')
  return Chart
}

function ChartComponent({ data }) {
  const [Chart, setChart] = useState(null)
  
  useEffect(() => {
    loadChartLibrary().then(setChart)
  }, [])
  
  if