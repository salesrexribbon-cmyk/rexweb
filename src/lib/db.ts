import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/rexinternational";

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) return;
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  company: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  status: { type: String, default: 'new' },
}, { timestamps: true });

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  relatedServiceSlug: { type: String },
  author: { type: String, default: 'Rex Technical Team' },
  publishedAt: { type: Date, default: Date.now }
}, { timestamps: true });

// Prevent mongoose from recompiling the model upon hot reload
export const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);
export const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
