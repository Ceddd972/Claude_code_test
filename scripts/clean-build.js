import { rmSync } from 'fs'
import { resolve } from 'path'

const projectRoot = resolve(process.cwd())

try {
  // Remove .next directory
  const nextDir = resolve(projectRoot, '.next')
  try {
    rmSync(nextDir, { recursive: true, force: true })
    console.log('Removed .next directory')
  } catch (e) {
    console.log('.next directory not found or already removed')
  }

  // Remove node_modules cache
  const cacheDir = resolve(projectRoot, 'node_modules/.cache')
  try {
    rmSync(cacheDir, { recursive: true, force: true })
    console.log('Removed node_modules cache')
  } catch (e) {
    console.log('node_modules cache not found or already removed')
  }

  console.log('Build cache cleaned successfully')
} catch (error) {
  console.error('Error cleaning build cache:', error.message)
  process.exit(1)
}
