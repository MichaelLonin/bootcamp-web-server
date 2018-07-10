import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    title: { type: String, trim: true, unique: false, required: true },
    username: { type: String, required: true, unique: false },
    media: { type: String, unique: true, required: true },
  },
  { timestamps: true },
);

postSchema.pre('save', async next => {
  next();
});

const PostModel = mongoose.model('Post', postSchema);

const save = async model => new PostModel(model).save();

const getPostByUser = async username => PostModel.findOne({ username });

const getPostById = async _id => PostModel.findById({ _id });

const getRandomPosts = async () => PostModel.find();

export { save, getPostByUser, getRandomPosts, getPostById };
