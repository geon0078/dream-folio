import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

// MongoDB 연결
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB Atlas 연결 성공')
}).catch((err) => {
  console.error('❌ MongoDB 연결 실패', err)
})

const ActivitySchema = new mongoose.Schema({
  type: String,
  value: String
}, { _id: false }) // _id 제거 (선택)

const Profile = mongoose.model('Profile', new mongoose.Schema({
  name: String,
  birth: String,
  university: String,
  major: String,
  activities: [ActivitySchema] // ✅ 객체 배열로 명시
}))

// POST 저장 라우터
app.post('/api/portfolio', async (req, res) => {
  try {
    console.log('📥 받은 데이터:', req.body)  // ← 이게 중요
    const saved = await new Profile(req.body).save()
    res.status(201).json(saved)
  } catch (e) {
    console.error('❌ 저장 실패:', e)
    res.status(500).json({ error: e.message })
  }
})

app.listen(3000, () => console.log('✅ 서버 실행 중: http://localhost:3000'))
