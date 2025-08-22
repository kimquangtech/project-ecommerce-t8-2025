import { Schema, model } from "mongoose";


const articleCategorySchema = new Schema({
  name: String,
  description: String,
}, {
  timestamps: true,
  autoCreate: true
})

const ArticleCategory = model("Article Category", articleCategorySchema);

export default ArticleCategory;