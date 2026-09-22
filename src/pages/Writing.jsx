import React from 'react';
import { motion } from 'framer-motion';
import { writing } from '../constant';

const Writing = () => {
  const hasPosts = writing.length > 0;

  return (
    <section id="writing" className="py-20 px-6 bg-[#f1ede6] border-t border-black/7">
      <div className="max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-10"
        >
          <p className="section-label mb-4">Writing</p>
          <h2 className="text-xl font-semibold text-[#111]">
            Things I've written
          </h2>
        </motion.div>

        {hasPosts ? (
          <div className="divide-y divide-black/7 border-t border-black/7">
            {writing.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="py-5"
              >
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline gap-5"
                >
                  <span className="text-xs text-[#888] shrink-0 tabular-nums w-16">
                    {post.date}
                  </span>
                  <span className="text-sm text-[#111] leading-[1.65] group-hover:underline group-hover:underline-offset-4 transition-all">
                    {post.title}
                    <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="border-t border-black/7 pt-8">
            <p className="text-sm text-[#888]">
              Writing on AI, systems, and security - coming soon.{' '}
              <a
                href="https://medium.com/@nitin_dahiya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#111] underline underline-offset-4 decoration-black/30 hover:decoration-black transition-all"
              >
                Follow on Medium →
              </a>
            </p>
          </div>
        )}

        {/* Medium link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="mt-8 pt-6 border-t border-black/7"
        >
          <a
            href="https://medium.com/@nitin_dahiya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#666] hover:text-[#111] transition-colors"
          >
            <span>Read more articles on Medium</span>
            <span>→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Writing;
