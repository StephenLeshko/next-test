/* eslint-disable import/no-anonymous-default-export */
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.ingredients),
    temperature: 0.8,
    max_tokens: 400
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(ingredients) {
  return `Write me a recipe given that I have the following ingredients: ${ingredients}:`;
}
