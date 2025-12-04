import path from 'node:path'
import fs from 'node:fs/promises'
import { getData } from '../utils/getData.js'

export async function addNewSighting(newSighting) {
    try {
        const sightings = await getData() 
        sightings.push(newSighting)
        const filePath = path.join('data', 'data.json')

        await fs.writeFile(filePath, JSON.stringify(sightings, null, 2), 'utf-8')
    } catch (err) {
        throw new Error(`Error writing to the data. ${err}`)
    }
}