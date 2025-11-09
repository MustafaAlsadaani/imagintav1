"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiClock, FiRefreshCw } from "react-icons/fi";

type AuthorKey = "mustafa" | "sero" | "falcon";

interface Post {
  author: AuthorKey;
  content: string;
}

const MASTER_POSTS: Post[] = [
  { author: "mustafa", content: "Your website is your 24/7 salesman. Make it fast, friendly, and mobile-ready. A happy visitor becomes a loyal customer. Ready to shine online? Let's talk! #WebDevLife" },
  { author: "mustafa", content: "SEO tip: Write like you talk to a friend. Use simple words, answer real questions. Google loves helpful content, and so do people. Start today! #MarketingMadeEasy" },
  { author: "sero", content: "Design quote: 'Good design is like a fridge – when it works, no one notices, but when it doesn’t, it stinks.' Keep it clean and fresh! #GraphicDesignVibes" },
  { author: "falcon", content: "Business growth hack: Smile, listen, and follow up. People buy from people they like. Build real connections, watch your network grow. #BizDevDaily" },
  { author: "mustafa", content: "Lifestyle tip: Take a 5-min walk after coding. Clear your mind, stretch your legs. A fresh brain solves bugs faster. Work smart, live better! #WebDevBalance" },
  { author: "sero", content: "Marketing truth: Share value before asking for a sale. Give tips, free tools, or smiles. Trust grows when you help first. Simple, human, effective. #GrowEasy" },
  { author: "falcon", content: "Design hack: Use warm colors for trust, cool for calm. Your palette speaks before words do. Choose wisely, connect deeply. #GraphicDesignTips" },
  { author: "mustafa", content: "Quote: 'Your network is your net worth.' Coffee chats beat cold emails. Be kind, stay curious. Opportunities follow real relationships. #BizDevWisdom" },
  { author: "sero", content: "Web tip: Test your site on a slow phone. If it loads in 3 seconds, you're winning. Speed = happy users = more sales. Optimize today! #WebDevHacks" },
  { author: "falcon", content: "Marketing lifestyle: Post when your audience is awake. Early birds? Night owls? Check insights, not guesses. Timing is a superpower. #SimpleMarketing" },
  { author: "mustafa", content: "Design vibe: Less is more. Remove one element and see if it still works. Clean space breathes life into your work. Try it! #MinimalDesign" },
  { author: "sero", content: "Biz tip: Celebrate small wins with your team. A 'great job' text or coffee treat builds morale. Happy team = happy clients. #AgencyLife" },
  { author: "falcon", content: "Web quote: 'Code is like humor. When you have to explain it, it’s bad.' Keep it clean, simple, and readable. Future you will thank you! #WebDevQuote" },
  { author: "mustafa", content: "Marketing hack: Ask customers what they loved. Turn happy words into testimonials. Real stories sell better than ads. Easy trust builder! #CustomerLove" },
  { author: "sero", content: "Design lifestyle: Sketch ideas on paper first. No rules, just flow. Digital comes later. Free your creativity, surprise yourself! #DesignerRoutine" },
  { author: "falcon", content: "Biz growth: Say thank you often. To clients, team, even competitors. Gratitude opens doors. Be the agency everyone loves working with. #HumanBiz" },
  { author: "mustafa", content: "Web tip: Add alt text to every image. Helps blind users and boosts SEO. Small effort, big impact. Inclusive web is smart web! #Accessibility" },
  { author: "sero", content: "Marketing quote: 'People don’t buy products, they buy better versions of themselves.' Show the transformation. Speak to dreams, not features. #SellWithHeart" },
  { author: "falcon", content: "Design hack: Match font to mood. Playful brand? Rounded fonts. Serious? Sharp serifs. Let type talk for you. Simple choices, big personality! #TypographyTips" },
  { author: "mustafa", content: "Biz lifestyle: End your day with 3 wins. Big or small, write them down. Keeps you motivated, reminds you progress is real. #AgencyMindset" },
  { author: "sero", content: "Web vibe: Broken link? Fix it fast. It’s like a pothole on your digital road. Smooth experience keeps visitors driving forward. #UserFirst" },
  { author: "falcon", content: "Marketing tip: Share behind-the-scenes. Show your team laughing, brainstorming. People connect with humans, not logos. Be real! #AuthenticBrand" },
  { author: "mustafa", content: "Design quote: 'Creativity is intelligence having fun.' Don’t overthink. Play with colors, shapes, ideas. Fun work wins hearts. #CreativeFlow" },
  { author: "sero", content: "Biz hack: Follow up within 24 hours. Quick reply shows respect. Turn warm leads into hot clients with simple speed. #CloseDeals" },
  { author: "falcon", content: "Web lifestyle: Backup your site weekly. One click, zero stress. Sleep better knowing your hard work is safe. Peace of mind is priceless! #WebSafety" },
  { author: "mustafa", content: "Marketing truth: Consistency beats perfection. Post okay content weekly instead of perfect monthly. Show up, build trust. #GrowSteady" },
  { author: "sero", content: "Design tip: Use contrast for focus. Dark text on light? Pops. Guide eyes to buttons, headlines. Make users click without thinking! #UXDesign" },
  { author: "falcon", content: "Biz quote: 'Your vibe attracts your tribe.' Be helpful, positive, real. Clients who match your energy become long-term partners. #AgencyCulture" },
  { author: "mustafa", content: "Web hack: Compress images without losing quality. Tools like TinyPNG save seconds. Faster site = happier Google = more traffic. Win! #SiteSpeed" },
  { author: "sero", content: "Marketing lifestyle: Read one customer email aloud daily. Hear their voice, feel their pain. Empathy fuels better campaigns. #HumanMarketing" },
  { author: "falcon", content: "Design vibe: White space is your friend. Let elements breathe. Crowded design confuses, calm design converts. Trust the gap! #CleanDesign" },
  { author: "mustafa", content: "Biz tip: Ask for referrals after a win. 'Who else needs this?' Happy clients love helping. Grow your network with zero ads. #ReferralMagic" },
  { author: "sero", content: "Web quote: 'The best error message is no error.' Prevent mistakes with clear forms, hints. Frustration-free = loyal users. #SmoothUX" },
  { author: "falcon", content: "Marketing hack: Use emojis in emails 💡😊. Warm tone, higher opens. Small touch, big connection. Test it this week! #EmailTips" },
  { author: "mustafa", content: "Design lifestyle: Change your workspace view weekly. New angle sparks new ideas. Fresh eyes see fresh solutions. Simple refresh! #CreativeBoost" },
  { author: "sero", content: "Biz growth: Track time on tasks. Spot leaks, fix fast. Work smarter, earn more, stress less. Knowledge is profit! #AgencyEfficiency" },
  { author: "falcon", content: "Web tip: Mobile-first design. Start small, scale up. 60% traffic is phone. Thumb-friendly = user-friendly. Build for real life! #MobileDev" },
  { author: "mustafa", content: "Marketing quote: 'Sell the problem you solve, not the product.' Pain points first, solution second. Customers nod, then buy. #StorySelling" },
  { author: "sero", content: "Design hack: Limit colors to 3-4. Harmony without chaos. Brand looks pro, memorable. Pick your palette, stick to it! #BrandColors" },
  { author: "falcon", content: "Biz vibe: Take breaks to daydream. Best ideas come when you’re not trying. 10 mins staring at clouds = breakthrough. #CreativeRest" },
  { author: "mustafa", content: "Web lifestyle: Name files clearly – homepage-v2.jpg. Future you finds things fast. Small habit, big time save. #OrganizedDev" },
  { author: "sero", content: "Marketing tip: Reply to every comment. Public love builds community. 2 mins effort = lifelong fans. Be present! #SocialLove" },
  { author: "falcon", content: "Design quote: 'Make it simple, but significant.' Clear message + strong visual = impact. Less noise, more meaning. #PowerfulDesign" },
  { author: "mustafa", content: "Biz hack: Offer payment plans. Lower barrier, more yeses. Cash flow steady, clients happy. Win-win growth! #SmartPricing" },
  { author: "sero", content: "Web tip: Use headings properly – H1, H2, H3. Helps users scan, helps SEO rank. Structure = success. Easy fix! #OnPageSEO" },
  { author: "falcon", content: "Marketing lifestyle: Walk and talk ideas into voice memos. Movement sparks flow. Capture gold before it fades. #IdeaCapture" },
  { author: "mustafa", content: "Design vibe: Hand-drawn elements add warmth. Perfect lines feel cold. A little wobble feels human. Try a sketch! #HumanDesign" },
  { author: "sero", content: "Biz quote: 'Done is better than perfect.' Launch the site, send the proposal. Improve later. Momentum beats waiting. #ShipIt" },
  { author: "falcon", content: "Web hack: Add a favicon. Tiny icon, big brand recall. Shows in tabs, bookmarks. Pro touch in seconds! #WebDetails" },
  { author: "mustafa", content: "Marketing truth: Stories sell, facts tell. Share client wins like bedtime tales. Emotion + proof = trust. #StoryMarketing" },
  { author: "sero", content: "Design tip: Align everything. Eyes love order. Grid it, snap it, wow them. Chaos distracts, alignment attracts! #DesignOrder" },
  { author: "falcon", content: "Biz lifestyle: Start meetings with good news. Sets positive tone. Team energized, ideas flow. Simple mood shift! #TeamVibes" },
  { author: "mustafa", content: "Web quote: 'Fast, beautiful, and useful – pick all three.' Compromise none. Users deserve the best experience. Aim high! #WebGoals" },
  { author: "sero", content: "Marketing hack: Reuse top content in new formats. Blog → video → tweet thread. One idea, many wins. Work smart! #ContentRepurpose" },
  { author: "falcon", content: "Design lifestyle: Collect inspiration daily. Save colors, fonts, layouts. Your swipe file fuels future magic. #DesignerHabit" },
  { author: "mustafa", content: "Biz tip: Under-promise, over-deliver. Surprise clients with extras. Word spreads, referrals follow. #ClientWow" },
  { author: "sero", content: "Web vibe: Test on real devices. Emulators lie. Borrow phones, see truth. Real-world ready = real results! #DeviceTesting" },
  { author: "falcon", content: "Marketing quote: 'Be so good they can’t ignore you.' Quality content, kind service. Fame follows value. #StandOut" },
  { author: "mustafa", content: "Design hack: Use real photos over stock when possible. Authentic faces build trust. Your team, your office – show it! #RealBrand" },
  { author: "sero", content: "Biz growth: Review goals monthly. Adjust, celebrate, push. Life changes, plans should too. Stay agile! #GoalCheck" },
  { author: "falcon", content: "Web tip: Minify CSS/JS. Remove extra spaces, shrink files. Faster load, happier users. One-click tools! #PerformanceWin" },
  { author: "mustafa", content: "Marketing lifestyle: Eat lunch away from desk. Recharge fully. Afternoon creativity soars. Small break, big return! #WorkLife" },
  { author: "sero", content: "Design quote: 'Design is not just what it looks like, it’s how it works.' Beauty + function = love. Balance both! #UXUI" },
  { author: "falcon", content: "Biz hack: Send thank-you notes. Handwritten if possible. Stands out in digital noise. Warmth remembered! #OldSchoolWin" },
  { author: "mustafa", content: "Web lifestyle: Comment your code. Explain why, not what. Helps team, helps future you. Kindness in lines! #CodeKindness" },
  { author: "sero", content: "Marketing tip: Use customer language in ads. Their words, their pain. Mirror = connection. Speak like them! #CustomerVoice" },
  { author: "falcon", content: "Design vibe: Break one rule on purpose. Perfect grid + one wild element = memorable. Safe with a twist! #RuleBreaker" },
  { author: "mustafa", content: "Biz quote: 'Hire slow, fire fast.' Right people save years. Culture fit > skills alone. Build your dream team! #HiringWisdom" },
  { author: "sero", content: "Web hack: Lazy load images below fold. Save data, speed up start. Scroll feels instant. Smooth magic! #LazyLoad" },
  { author: "falcon", content: "Marketing truth: Ask for the sale. Clear CTA: 'Book now', 'Start free'. Guide the next step. Don’t hint! #CloseEasy" },
  { author: "mustafa", content: "Design lifestyle: Change music with mood. Focus? Lo-fi. Creative? Upbeat. Sound shapes output. Curate your vibe! #MusicForDesign" },
  { author: "sero", content: "Biz tip: Track wins in a shared doc. Team sees progress, stays motivated. Visibility breeds pride. #WinBoard" },
  { author: "falcon", content: "Web quote: 'Make the logo bigger' – said no user ever. Function over ego. Serve, don’t show off! #UserFirstDesign" },
  { author: "mustafa", content: "Marketing hack: Run polls on social. Quick engagement, free insights. Know your audience better. Fun + smart! #KnowYourPeople" },
  { author: "sero", content: "Design tip: Test colors with color-blind tools. 8% men see differently. Inclusive = professional. Check it! #InclusiveDesign" },
  { author: "falcon", content: "Biz lifestyle: Friday wins roundup email. Share team highs. End week strong, start next inspired. #TeamBoost" },
  { author: "mustafa", content: "Web vibe: Secure forms with HTTPS. Padlock = trust. Users share data freely. Safety first, always! #WebTrust" },
  { author: "sero", content: "Marketing quote: 'The best marketing feels like helping.' Solve problems, answer questions. Sales follow service. #HelpToSell" },
  { author: "falcon", content: "Design hack: Use consistent button styles. One look for action. Users learn fast, click more. #UIConsistency" },
  { author: "mustafa", content: "Biz growth: Learn to say no nicely. Protect time, focus on best fits. Quality over quantity clients. #SmartBoundaries" },
  { author: "sero", content: "Web tip: Cache everything safe. Pages, images, queries. Repeat visits fly. Speed without effort! #CachingWin" },
  { author: "falcon", content: "Marketing lifestyle: Celebrate client wins publicly. Tag them, share joy. Strengthens bond, attracts similar. #ClientSpotlight" },
  { author: "mustafa", content: "Design quote: 'Perfection is achieved when there is nothing left to take away.' Edit ruthlessly. Clarity wins! #LessIsMore" },
  { author: "sero", content: "Biz hack: Automate invoicing. Save hours, get paid faster. Tools like FreshBooks. Set it, forget it! #CashFlow" },
  { author: "falcon", content: "Web lifestyle: Stand while debugging. Blood flows, ideas spark. 20 mins up = breakthrough. Try it! #DevHealth" },
  { author: "mustafa", content: "Marketing tip: Use numbers in headlines. '7 Ways to Grow' beats 'Grow Tips'. Specific = clickable. #HeadlineHack" },
  { author: "sero", content: "Design vibe: Add micro-animations. Button hover glow, page fade. Delight in details. Users smile! #LittleJoys" },
  { author: "falcon", content: "Biz quote: 'Revenue is vanity, profit is sanity.' Track costs, not just sales. Healthy business, happy life. #ProfitMindset" },
  { author: "mustafa", content: "Web hack: Validate forms live. Red error as they type. Fix before submit. Friction gone! #FormLove" },
  { author: "sero", content: "Marketing truth: Listen more than you speak. Client needs hide in silence. Ask, wait, learn. #ListenToWin" },
  { author: "falcon", content: "Design lifestyle: Mood board before mockup. Images, words, feelings. Align vision early. Saves revisions! #PrepWork" },
  { author: "mustafa", content: "Biz tip: Gift small surprises. Sticker pack, early access. Cost little, delight much. Loyalty boost! #ClientGifts" },
  { author: "sero", content: "Web quote: 'If it’s not on mobile, it doesn’t exist.' 2025 truth. Design thumb-first. Reach everyone! #MobileReality" },
  { author: "falcon", content: "Marketing hack: User-generated content. Repost client photos. Real proof, free promo. Community grows! #UGC" },
  { author: "mustafa", content: "Design tip: Kerning matters. Tighten letters in logos. Pro look in minutes. Details elevate! #TypeNerd" },
  { author: "sero", content: "Biz lifestyle: Walk meetings for 1:1s. Side by side opens hearts. Better talks, stronger bonds. #WalkAndTalk" },
  { author: "falcon", content: "Web vibe: Progressive enhancement. Basic works everywhere, extras for modern. Inclusive speed! #BuildSmart" },
  { author: "mustafa", content: "Marketing quote: 'Don’t find customers for your product, find products for your customers.' Solve first. #CustomerFirst" },
  { author: "sero", content: "Design hack: Export at 2x for retina. Crisp on all screens. One setting, future-proof. #SharpDesign" },
  { author: "falcon", content: "Biz growth: Reflect Sunday night. What worked? What’s next? 15 mins planning = calm week. End strong, start stronger! #WeeklyReset" },
];

const AUTHORS: Record<
  AuthorKey,
  {
    name: string;
    handle: string;
    role: string;
    accent: string;
    badge: string;
  }
> = {
  mustafa: {
    name: "Mustafa",
    handle: "@mustafa.codes",
    role: "Creative Technologist",
    accent: "from-cyber-primary to-cyber-highlight",
    badge: "CT",
  },
  sero: {
    name: "Sero",
    handle: "@sero.designs",
    role: "Experience Director",
    accent: "from-[#b026ff] to-[#ff35a6]",
    badge: "SD",
  },
  falcon: {
    name: "Falcon",
    handle: "@falcon.growth",
    role: "Growth Strategist",
    accent: "from-[#39ff14] to-[#00ff95]",
    badge: "FG",
  },
};

function getCollectionSeed() {
  if (typeof window !== "undefined") {
    const now = new Date();
    return Math.floor(now.getTime() / (60 * 60 * 1000));
  }
  return 0;
}

function getPseudoRandom(index: number, salt = 1) {
  return Math.abs(Math.sin((index + 1) * 42.17 * salt));
}

function buildFeed() {
  const seed = getCollectionSeed();
  const offset = seed % MASTER_POSTS.length;
  const slice = [...MASTER_POSTS.slice(offset), ...MASTER_POSTS.slice(0, offset)].slice(0, 8);

  return slice.map((post, index) => {
    const hoursAgo = index + (seed % 3);
    const minutesOffset = Math.floor(getPseudoRandom(index, 1.7) * 40);
    const postedAt = new Date(Date.now() - hoursAgo * 60 * 60 * 1000 - minutesOffset * 60 * 1000);
    return {
      ...post,
      id: `${post.author}-${seed}-${index}`,
      postedAt,
      order: index,
    };
  });
}

export default function BlogStream() {
  const prefersReducedMotion = useReducedMotion();
  const { feed, generatedAt } = useMemo(() => {
    const posts = buildFeed();
    return { feed: posts, generatedAt: new Date() };
  }, []);

  if (!feed.length) return null;

  const [headlinePost, ...otherPosts] = feed;
  const accentAuthor = AUTHORS[headlinePost.author];
  const gridPosts = otherPosts.slice(0, 3);
  const timelinePosts = otherPosts.slice(3);

  const lastUpdatedLabel = generatedAt.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
  const nextRefresh = new Date(generatedAt);
  nextRefresh.setMinutes(0, 0, 0);
  nextRefresh.setHours(nextRefresh.getHours() + 1);
  const nextRefreshLabel = nextRefresh.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

  return (
    <section id="signal-stream" className="relative overflow-hidden border-b border-cyber-neutral/20 bg-cyber-bg py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(57,255,20,0.12),transparent_60%),radial-gradient(circle_at_90%_20%,rgba(176,38,255,0.14),transparent_62%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="mb-10 grid gap-4 rounded-[32px] border border-cyber-neutral/35 bg-cyber-bg/82 px-6 py-5 text-xs uppercase tracking-[0.32em] text-cyber-text-secondary md:grid-cols-2">
          <span className="inline-flex items-center gap-2">
            <FiClock className="h-4 w-4 text-cyber-primary" />
            Last updated · {lastUpdatedLabel}
          </span>
          <span className="inline-flex items-center gap-2">
            <FiRefreshCw className="h-4 w-4 text-cyber-highlight" />
            Next refresh · {nextRefreshLabel}
          </span>
        </div>

        <motion.article
          className="mb-12 overflow-hidden rounded-[36px] border border-cyber-neutral/35 bg-cyber-bg/88"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="relative flex flex-col gap-0 lg:grid lg:grid-cols-[0.7fr_0.3fr]">
            <div className="border-b border-cyber-neutral/30 bg-[radial-gradient(circle_at_20%_8%,rgba(0,255,255,0.2),transparent_64%)] p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] uppercase tracking-[0.32em] text-cyber-text-secondary/85">
                <span>{accentAuthor.name}</span>
                <span>{headlinePost.postedAt.toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}</span>
              </div>
              <h2 className="mt-6 text-3xl font-heading font-semibold text-white md:text-[2.3rem]">
                {headlinePost.content.split(" ").slice(0, 18).join(" ")}
                {headlinePost.content.split(" ").length > 18 ? "…" : ""}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-cyber-text-secondary">{headlinePost.content}</p>
            </div>
            <div className="flex flex-col justify-between gap-6 p-8 text-sm text-cyber-text">
              <div>
                <div className={`inline-flex items-center gap-3 rounded-full border border-cyber-primary/30 bg-gradient-to-r ${accentAuthor.accent} px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-white`}>
                  <span>{accentAuthor.badge}</span>
                  <span>{accentAuthor.role}</span>
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.32em] text-cyber-text-secondary">{accentAuthor.handle}</p>
              </div>
              <p className="text-xs uppercase tracking-[0.32em] text-cyber-text-secondary/80">
                Signal strength measured across launch velocity, experience scores, and growth telemetry.
              </p>
            </div>
          </div>
        </motion.article>

        <div className="grid gap-6 md:grid-cols-3">
          {gridPosts.map((post, index) => {
            const author = AUTHORS[post.author];
            return (
              <motion.article
                key={post.id}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-cyber-neutral/35 bg-cyber-bg/86 p-6 text-sm text-cyber-text transition-all duration-300 hover:border-cyber-primary/50 hover:bg-cyber-neutral/40"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.05, ease: "easeOut" }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(176,38,255,0.22),transparent_72%)] blur-2xl" />
                </div>
                <div className="relative">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-cyber-neutral/35 bg-cyber-bg/72 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-cyber-text-secondary">
                        {author.name}
                      </div>
                      <p className="mt-2 text-xs uppercase tracking-[0.32em] text-cyber-text-secondary/80">{author.role}</p>
                    </div>
                    <div className={`flex h-11 w-11 flex-none items-center justify-center rounded-full border border-cyber-primary/30 bg-gradient-to-br ${author.accent} text-xs font-semibold text-white`}>
                      {author.badge}
                    </div>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-cyber-text">{post.content}</p>
                </div>
                <div className="relative mt-6 flex items-center justify-between text-[11px] uppercase tracking-[0.32em] text-cyber-text-secondary/80">
                  <span>{author.handle}</span>
                  <span>{post.postedAt.toLocaleString("en-US", { hour: "numeric", minute: "2-digit" })}</span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {timelinePosts.length > 0 && (
          <motion.div
            className="relative mt-16 rounded-[32px] border border-cyber-neutral/35 bg-cyber-bg/85 p-8"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.32em] text-cyber-text-secondary/85">
              <span>Signal timeline</span>
              <span>Telemetry across the last cycle</span>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyber-primary/40 via-cyber-neutral/40 to-transparent sm:left-1/2" />
              <div className="space-y-10 sm:space-y-0 sm:[&>article:nth-child(odd)]:mr-auto sm:[&>article:nth-child(odd)]:translate-x-[-12%] sm:[&>article:nth-child(even)]:ml-auto sm:[&>article:nth-child(even)]:translate-x-[12%]">
                {timelinePosts.map((post, index) => {
                  const author = AUTHORS[post.author];
                  return (
                    <motion.article
                      key={post.id}
                      className="relative mt-10 max-w-xl rounded-[24px] border border-cyber-neutral/30 bg-cyber-bg/82 p-6 text-sm text-cyber-text shadow-[0_24px_90px_rgba(4,10,24,0.42)] sm:mt-12"
                      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24, scale: 0.97 }}
                      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.55 }}
                      transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.04, ease: "easeOut" }}
                    >
                      <div className="absolute left-[-15px] top-6 hidden size-3 rounded-full bg-cyber-primary shadow-[0_0_12px_rgba(0,255,255,0.65)] sm:block" />
                      <div className="flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.32em] text-cyber-text-secondary/75">
                        <span>{author.handle}</span>
                        <span>{post.postedAt.toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}</span>
                      </div>
                      <p className="mt-4 text-base leading-relaxed text-cyber-text">{post.content}</p>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

