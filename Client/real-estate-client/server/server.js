import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import OpenAI from "openai"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

app.post("/ai-search", async (req, res) => {
  try {
    const { query } = req.body

    if (!query) {
      return res.status(400).json({ error: "Query is required" })
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Extract real estate filters from user query. Return ONLY valid JSON with keys: city (string or null), maxPrice (number or null), rooms (number or null)."
        },
        {
          role: "user",
          content: query
        }
      ],
      temperature: 0
    })

    let aiText = completion.choices[0].message.content

// ניקוי אם ה-AI החזיר ```json
aiText = aiText.replace(/```json/g, "").replace(/```/g, "").trim()

const parsed = JSON.parse(aiText)

    res.json({ filters: parsed })

  } catch (error) {
    console.error("AI ERROR:", error)
    res.status(500).json({ error: error.message })
  }
})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})