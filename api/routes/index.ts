import {Router} from 'express'
const router = Router()

router.use((_req, _res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', (_req, res) => {
    res.send('Satellite Information API')
})

router.post('/getKey', (_req, res) => {
    // API KEY functionality
    res.send('This will be your key')
})

/**
 *  Routes Required:
 *  API KEY
 * Satellite Position
 * Satellite Information
 * List of all satellites
 */