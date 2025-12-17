import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const GitHubStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const githubUsername = 'punam114';

  return (
    <section id="github-stats" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              className="text-5xl md:text-7xl font-black mb-6 text-foreground tracking-tighter uppercase"
            >
              GitHub <span className="text-primary">Statistics</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              className="h-2 w-40 bg-primary mx-auto border-4 border-foreground"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg p-6 rounded-xl"
            >
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=dark&bg_color=0d1117&title_color=c8ff00&icon_color=c8ff00&text_color=ffffff&border_color=30363d&cache_seconds=1800`}
                alt="GitHub Stats"
                className="w-full rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg p-6 rounded-xl"
            >
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=dark&bg_color=0d1117&title_color=c8ff00&text_color=ffffff&border_color=30363d&cache_seconds=1800`}
                alt="Top Languages"
                className="w-full rounded-lg"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.6 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg p-6 rounded-xl"
          >
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=dark&background=0d1117&ring=c8ff00&fire=c8ff00&currStreakLabel=c8ff00&sideLabels=ffffff&currStreakNum=ffffff&dates=ffffff&sideNums=ffffff&border=30363d&cache_seconds=1800`}
              alt="GitHub Streak"
              className="w-full rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;