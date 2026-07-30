import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import { BLOGS_DATA } from '../data/blogs';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';
import NotFoundPage from './NotFoundPage';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOGS_DATA.find((b) => b.slug === slug);

  if (!post) {
    return <NotFoundPage />;
  }

  return (
    <>
      <SEOHead title={post.title} description={post.excerpt} />

      <article className="py-16 bg-solar-bg min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-solar-primary hover:text-solar-primary-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Articles
          </Link>

          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 space-y-6">
            
            <span className="inline-block bg-solar-secondary text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>

            <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-500 border-y border-slate-100 py-3">
              <span className="flex items-center gap-1 font-semibold text-slate-700">
                <User className="w-4 h-4 text-solar-primary" /> {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-solar-primary" /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-solar-primary" /> {post.readTime}
              </span>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Article Rendered Body */}
            <div 
              className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="pt-8 border-t border-slate-200 flex items-center justify-between">
              <Link
                to="/calculator"
                className="bg-gradient-solar text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-solar-glow transition-all"
              >
                Calculate Your Solar Savings Now
              </Link>
            </div>

          </div>

        </div>
      </article>
    </>
  );
}
