import Redis from 'ioredis'

const redis = new Redis(process.env.REDID_URL!)

export default redis
