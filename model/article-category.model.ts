import { Schema, model } from "mongoose";


const articleCategorySchema = new Schema({
  name: String,
  description: String,
  parent_id: {
    type: Schema.Types.ObjectId,
    ref: "Article Category"
  }
}, {
  timestamps: true,
  autoCreate: true
})

const ArticleCategory = model("Article Category", articleCategorySchema);

export default ArticleCategory;