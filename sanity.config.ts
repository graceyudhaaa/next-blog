import { codeInput } from '@sanity/code-input'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schema'
import { visionTool } from '@sanity/vision'


const config = defineConfig({
    projectId: process.env.NEXT_PUBLIC_SANITY_ID as string,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
    title: 'Dashboard',
    apiVersion: '2023-04-22',
    basePath: '/studio-dashboard',
    plugins: [deskTool(), codeInput(), visionTool()],
    schema: { types: schemas }
})

export default config