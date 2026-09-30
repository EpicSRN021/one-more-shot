import { useState } from 'react'
import './App.css'

const CrosshairSVG = ({ className }) => (
  <svg className={className} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#FF0077">
    <circle cx="30" cy="30" r="20" strokeWidth="3" />
    <line x1="30" y1="2"  x2="30" y2="18" strokeWidth="3" />
    <line x1="30" y1="42" x2="30" y2="58" strokeWidth="3" />
    <line x1="2"  y1="30" x2="18" y2="30" strokeWidth="3" />
    <line x1="42" y1="30" x2="58" y2="30" strokeWidth="3" />
    <circle cx="30" cy="30" r="5" fill="#FF0077" stroke="none" />
  </svg>
)

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <CrosshairSVG />
        NE MORE <span className="pink">SHOT</span>
      </div>
      <button
        className="nav-cta"
        onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Join Waitlist
      </button>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" aria-hidden="true" />

      <div className="wordmark">
        <div className="wordmark-one">
          <CrosshairSVG className="crosshair-lg" />
          NE
        </div>
        <div className="wordmark-more">MORE</div>
        <div className="wordmark-shot">SHOT</div>
      </div>

      <div className="cure-label">Hangover Cure</div>

      <div className="pillars-hero">
        {[['💧','Rehydrate'],['⚡','Replenish'],['⊕','Restore']].map(([icon, label]) => (
          <div className="pillar-hero" key={label}>
            <span className="pillar-hero-icon">{icon}</span>
            <span className="pillar-hero-label">{label}</span>
          </div>
        ))}
      </div>

      <div className="feel-better-badge">Feel Better. Fast.</div>

      <p className="hero-desc">
        A 2oz shot taken after drinking. Science-backed natural ingredients that
        boost your body's own alcohol-fighting enzyme — so you wake up ready to go.
      </p>

      <div className="hero-buttons">
        <button
          className="btn-primary"
          onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Join the Waitlist
        </button>
        <button
          className="btn-outline"
          onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
        >
          How It Works
        </button>
      </div>

      <div className="launch-badge">
        <span className="live-dot" aria-hidden="true" />
        Launching at UCSB · Isla Vista · Coming Soon
      </div>
    </section>
  )
}

const problems = [
  { emoji: '🤢', title: 'Nausea & Vomiting',   desc: "Toxic acetaldehyde buildup in your liver causes brutal nausea — and it's 10–30× more toxic than alcohol itself." },
  { emoji: '🧠', title: 'Headache & Brain Fog', desc: 'Alcohol suppresses vasopressin, flushing fluids and causing dehydration, pounding headaches, and zero focus.' },
  { emoji: '💀', title: 'Body Aches & Fatigue', desc: 'Inflammatory cytokines triggered by alcohol leave your muscles sore and your whole body drained.' },
  { emoji: '😰', title: 'Hangover Anxiety',     desc: 'Disrupted sleep and glucose regulation leave you shaky, anxious, and unable to show up the next day.' },
]

function Problem() {
  return (
    <section className="section">
      <div className="section-label">The Problem</div>
      <h2 className="section-title">
        You drank last night.<br /><span className="pink">Today is gone.</span>
      </h2>
      <div className="divider-bar" />

      <blockquote className="quote-block">
        <p className="quote-text">"Woke up in a hospital bed… couldn't hold down food."</p>
        <cite className="quote-author">— Andrew, UCSB Student</cite>
      </blockquote>

      <div className="problem-grid">
        {problems.map(p => (
          <div className="problem-card" key={p.title}>
            <div className="problem-emoji">{p.emoji}</div>
            <div className="problem-title">{p.title}</div>
            <p className="problem-desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function BottleMockup() {
  return (
    <div className="bottle-wrap">
      <div className="bottle">
        <div className="bottle-cap" />
        <div className="bottle-logo">
          <div className="bl-one">
            <svg className="crosshair-sm" viewBox="0 0 60 60" fill="none" stroke="#FF0077">
              <circle cx="30" cy="30" r="20" strokeWidth="4" />
              <line x1="30" y1="2"  x2="30" y2="18" strokeWidth="4" />
              <line x1="30" y1="42" x2="30" y2="58" strokeWidth="4" />
              <line x1="2"  y1="30" x2="18" y2="30" strokeWidth="4" />
              <line x1="42" y1="30" x2="58" y2="30" strokeWidth="4" />
              <circle cx="30" cy="30" r="5" fill="#FF0077" stroke="none" />
            </svg>
            NE
          </div>
          <div className="bl-more">MORE</div>
          <div className="bl-shot">SHOT</div>
        </div>
        <div className="bottle-cure">Hangover Cure</div>
        <div className="bottle-pillars">
          <span>💧 Rehydrate</span>
          <span>⚡ Replenish</span>
          <span>⊕ Restore</span>
        </div>
        <div className="bottle-fb">FEEL BETTER. FAST.</div>
        <div className="bottle-size">2 FL OZ (59 ML)</div>
      </div>
    </div>
  )
}

function Solution() {
  return (
    <section className="solution-section" id="how-it-works">
      <div className="solution-inner">
        <BottleMockup />
        <div>
          <div className="section-label">The Solution</div>
          <h2 className="section-title">
            One Shot.<br /><span className="pink">Feel Human Again.</span>
          </h2>
          <div className="divider-bar" />
          <p className="solution-text">
            One More Shot is a 2oz hangover cure packed with natural ingredients proven
            to boost ALDH — the enzyme your liver uses to break down the toxic byproducts
            of alcohol.
          </p>
          <p className="solution-text">
            Take it right after your last drink or first thing in the morning. No mixing,
            no prep — just shoot it and get on with your day.
          </p>
          <div className="pillars-grid">
            {[['💧','Rehydrate'],['⚡','Replenish'],['⊕','Restore']].map(([icon, label]) => (
              <div className="pillar-card" key={label}>
                <div className="pillar-card-icon">{icon}</div>
                <div className="pillar-card-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const ingredients = [
  { name: 'Sea Salt or Pink Himalayan Salt (⅛ tsp)',        benefit: 'Provides ~250–300mg of sodium to expand blood volume and fight the pounding hangover headache.' },
  { name: 'Lite Salt / Nu-Salt (⅟16 tsp)',                  benefit: 'Potassium chloride rebalances cells dehydrated by alcohol.' },
  { name: 'Magnesium Glycinate or Malate (50mg)',           benefit: 'Soothes muscles and nerves — gentler on the stomach than magnesium oxide.' },
  { name: 'Coconut Water or Tart Cherry Juice (2 fl oz)',   benefit: 'Naturally rich in potassium and antioxidants that target alcohol-induced inflammation.' },
  { name: 'Fresh Lemon or Lime Juice (1 tbsp)',             benefit: 'High acidity cuts through the heavy, metallic taste of concentrated minerals.' },
  { name: 'Water Chaser (8–12 oz)',                         benefit: 'A full glass right after the shot keeps concentrated minerals from drawing water into your gut and causing nausea or cramping.' },
]

function Ingredients() {
  return (
    <section className="section">
      <div className="section-label">What's Inside</div>
      <h2 className="section-title">
        Natural Ingredients.<br /><span className="pink">Real Science.</span>
      </h2>
      <div className="divider-bar" />
      <div className="ingredients-grid">
        {ingredients.map(ing => (
          <div className="ingredient-card" key={ing.name}>
            <div className="ingredient-name">{ing.name}</div>
            <p className="ingredient-benefit">{ing.benefit}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function UCSBSection() {
  return (
    <section className="ucsb-section">
      <div className="ucsb-inner">
        <div className="launch-tag">
          <span className="live-dot" aria-hidden="true" />
          Launching Soon
        </div>
        <h2 className="section-title">
          Starting at <span className="pink">UCSB.</span><br />
          Isla Vista First.
        </h2>
        <p className="ucsb-desc">
          We're hitting IV first — at your corner stores, through campus orgs, Greek houses,
          and right at Del Playa parties. Be the first person on your floor who actually
          shows up the morning after.
        </p>

        <div className="stats-row">
          {[['19M','US College Students'],['55%','Regular Drinkers'],['2oz','All You Need']].map(([num, label]) => (
            <div className="stat" key={label}>
              <div className="stat-num">{num}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>

        <button
          className="btn-primary"
          onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get Early Access
        </button>
      </div>
    </section>
  )
}

function WaitlistForm() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', affiliation: '', interest: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.firstName.trim() || !form.email.trim()) {
      setError('Please enter your name and email.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    const existing = JSON.parse(localStorage.getItem('oms_waitlist') || '[]')
    existing.push({ ...form, ts: new Date().toISOString() })
    localStorage.setItem('oms_waitlist', JSON.stringify(existing))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="success-box">
        <h3>You're In.</h3>
        <p>Welcome to the One More Shot early access list. We'll hit your inbox when we launch in IV — stay ready.</p>
      </div>
    )
  }

  return (
    <form className="wl-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <input className="form-input" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
        <input className="form-input" name="lastName"  placeholder="Last Name"  value={form.lastName}  onChange={handleChange} />
      </div>
      <input className="form-input" name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} />
      <div className="select-wrap">
        <select className="form-select" name="affiliation" value={form.affiliation} onChange={handleChange}>
          <option value="" disabled>Your Affiliation</option>
          <option value="ucsb-student">UCSB Student</option>
          <option value="greek-life">Greek Life</option>
          <option value="ucsb-other">UCSB (Other)</option>
          <option value="other-college">Other College</option>
          <option value="general">Just Interested</option>
        </select>
        <span className="select-arrow">▼</span>
      </div>
      <div className="select-wrap">
        <select className="form-select" name="interest" value={form.interest} onChange={handleChange}>
          <option value="" disabled>I'm interested in…</option>
          <option value="waitlist">Waitlist — Notify me at launch</option>
          <option value="preorder-single">Preorder — Single Shot</option>
          <option value="preorder-6pack">Preorder — 6-Pack</option>
          <option value="bulk">Bulk / Event Order</option>
        </select>
        <span className="select-arrow">▼</span>
      </div>
      {error && <p style={{ color: 'var(--pink)', fontSize: '0.82rem', textAlign: 'center' }}>{error}</p>}
      <button type="submit" className="form-submit">Claim My Spot →</button>
      <p className="privacy-note">No spam. Just launch updates and your spot in line. Unsubscribe anytime.</p>
    </form>
  )
}

function Waitlist() {
  return (
    <section className="waitlist-section" id="waitlist">
      <div className="waitlist-inner">
        <div className="section-label">Early Access</div>
        <h2 className="section-title">
          Be the First to <span className="pink">Shoot It.</span>
        </h2>
        <p className="waitlist-desc">
          Sign up for early access and preorder pricing. UCSB students get priority —
          we're hitting your campus first.
        </p>
        <WaitlistForm />
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <svg width="16" height="16" viewBox="0 0 60 60" fill="none" stroke="#FF0077">
          <circle cx="30" cy="30" r="20" strokeWidth="3" />
          <line x1="30" y1="2"  x2="30" y2="18" strokeWidth="3" />
          <line x1="30" y1="42" x2="30" y2="58" strokeWidth="3" />
          <line x1="2"  y1="30" x2="18" y2="30" strokeWidth="3" />
          <line x1="42" y1="30" x2="58" y2="30" strokeWidth="3" />
          <circle cx="30" cy="30" r="5" fill="#FF0077" stroke="none" />
        </svg>
        NE MORE <span className="pink">SHOT</span>
      </div>
      <div className="footer-tagline">Feel Better. Fast.</div>
      <p className="footer-legal">
        *These statements have not been evaluated by the Food and Drug Administration.
        This product is not intended to diagnose, treat, cure, or prevent any disease.
        Please drink responsibly.
      </p>
      <p className="footer-copy">© 2025 One More Shot. All rights reserved.</p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Ingredients />
      <UCSBSection />
      <Waitlist />
      <Footer />
    </>
  )
}
