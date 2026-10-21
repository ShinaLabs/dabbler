import { useEffect, useRef, useState } from "react";
import "./styles/Dabbler.css";
import crochetHats from "./assets/crochet-hats.jpg";
import crochetCloseup from "./assets/crochet-closeup.jpg";

type ProductCategory = "all" | "keychains" | "home" | "gifts";

const products = [
  {
    name: "Mini Hat Keychains",
    description: "Tiny hat. Big charm.",
    image: crochetHats,
    imageAlt: "Handmade grey, burgundy, and tan crochet mini hats",
    badge: "Made by hand",
    price: "Ask for details",
    categories: ["keychains", "gifts"],
  },
  {
    name: "Crochet Keepsakes",
    description: "One-of-a-kind, stitch by stitch.",
    image: crochetCloseup,
    imageAlt: "Close-up of a handmade crochet mini hat keychain",
    badge: "Little details",
    price: "Ask for details",
    categories: ["home", "gifts"],
  },
  {
    name: "Custom Crochet Gifts",
    description: "A thoughtful little something.",
    image: crochetHats,
    imageAlt: "A collection of colourful handmade crochet mini hats",
    badge: "Made your way",
    price: "Custom orders",
    categories: ["keychains", "gifts"],
  },
];

const filters: { label: string; value: ProductCategory }[] = [
  { label: "Everything", value: "all" },
  { label: "Keychains", value: "keychains" },
  { label: "Home & décor", value: "home" },
  { label: "Gift ideas", value: "gifts" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<ProductCategory>("all");
  const [toast, setToast] = useState("");
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    },
    [],
  );

  const showEnquiry = (productName: string) => {
    setToast(
      `Lovely choice! Message Dabbler to ask about ${productName}.`,
    );
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2800);
  };

  const visibleProducts = products.filter(
    (product) =>
      activeFilter === "all" || product.categories.includes(activeFilter),
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="announcement">
        <span>✿</span> Little things, lovingly handmade <span>✿</span> Custom
        colours available
      </div>

      <header className="site-header" id="top">
        <a className="brand" href="#top" aria-label="Dabbler home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            ✿
          </span>
          <span className="brand-name">
            DABBLER
            <small>little details. lovely finds.</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mainNav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          className={`main-nav${menuOpen ? " open" : ""}`}
          id="mainNav"
          aria-label="Main navigation"
        >
          <a href="#shop" onClick={closeMenu}>
            Shop
          </a>
          <a href="#story" onClick={closeMenu}>
            Our story
          </a>
          <a href="#made-with-love" onClick={closeMenu}>
            Made with love
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <a className="nav-cta" href="#shop" onClick={closeMenu}>
            Explore collection <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" /> A little handmade happiness
            </div>
            <h1>
              Small things.
              <br />
              <em>Big</em> feelings.
            </h1>
            <p className="hero-description">
              Colourful crochet treasures, made slowly and thoughtfully — for
              your keys, your space, and your favourite people.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#shop">
                Shop the collection <span>↗</span>
              </a>
              <a className="text-link" href="#story">
                Get to know Dabbler <span>↓</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="tiny-flower">✿</span>
              <span>
                Handmade in small batches
                <br />
                <b>Each piece has its own little story.</b>
              </span>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-image-frame">
              <img
                src={crochetHats}
                alt="Handmade grey, burgundy, and tan crochet mini hat keychains"
              />
              <span className="image-sticker sticker-top">
                made by hand <span>♡</span>
              </span>
              <span className="image-sticker sticker-bottom">
                a little joy
                <br />
                to carry around
              </span>
            </div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <span className="floating-flower flower-one">✿</span>
            <span className="floating-flower flower-two">✽</span>
            <div className="yarn-tag">
              <span className="yarn-dot dot-pink" />
              <span className="yarn-dot dot-yellow" />
              <span className="yarn-dot dot-blue" />
              <span>made with a little extra love</span>
            </div>
          </div>
          <div className="hero-bottom-line">
            <span>COLOURFUL</span>
            <span>•</span>
            <span>HANDMADE</span>
            <span>•</span>
            <span>FULL OF CHARACTER</span>
          </div>
        </section>

        <section className="ticker" aria-label="Dabbler values">
          <div className="ticker-track">
            <span>✿ LITTLE DETAILS</span>
            <span>♡ HANDMADE WITH LOVE</span>
            <span>✳ COLOUR YOUR EVERYDAY</span>
            <span>✿ LITTLE DETAILS</span>
            <span>♡ HANDMADE WITH LOVE</span>
            <span>✳ COLOUR YOUR EVERYDAY</span>
          </div>
        </section>

        <section className="collection section-wrap" id="shop">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" /> The happy little shop
              </div>
              <h2>
                Meet your new <em>favourites.</em>
              </h2>
            </div>
            <p>
              Each stitch brings a little texture, colour, and character. Find
              a tiny treasure for yourself — or someone you love.
            </p>
          </div>
          <div className="filter-row" role="group" aria-label="Filter products">
            {filters.map((filter) => (
              <button
                className={`filter-btn${activeFilter === filter.value ? " active" : ""}`}
                type="button"
                key={filter.value}
                aria-pressed={activeFilter === filter.value}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="product-grid">
            {visibleProducts.map((product, index) => (
              <article className="product-card" key={product.name}>
                <a
                  className={`product-image${index === 0 ? " product-image-hat" : ""}`}
                  href="#contact"
                  aria-label={`Ask about ${product.name}`}
                >
                  <img src={product.image} alt={product.imageAlt} loading="lazy" />
                  <span
                    className={`product-badge${index === 1 ? " badge-yellow" : index === 2 ? " badge-green" : ""}`}
                  >
                    {product.badge}
                  </span>
                  <span className="product-arrow">↗</span>
                </a>
                <div className="product-meta">
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>
                  <span className="product-price">{product.price}</span>
                </div>
                <button
                  className="product-link"
                  type="button"
                  onClick={() => showEnquiry(product.name)}
                >
                  Ask about this piece <span>↗</span>
                </button>
              </article>
            ))}
          </div>
          <p className="price-note">
            Each piece is handmade. Message us for current prices, availability,
            and custom colours.
          </p>
        </section>

        <section className="story" id="story">
          <div className="story-image">
            <img
              src={crochetCloseup}
              alt="Close-up of yarn and stitches in a handmade crochet keychain"
              loading="lazy"
            />
            <div className="story-stamp">
              <span>✿</span>
              <b>slow made</b>
              <small>with love</small>
            </div>
          </div>
          <div className="story-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" /> The Dabbler feeling
            </div>
            <h2>
              Not factory-perfect.
              <br />
              <em>People-perfect.</em>
            </h2>
            <p>
              We believe the little things can make an ordinary day feel
              special. A pop of colour on your keys. A tiny handmade treasure.
              A thoughtful gift that says, “I saw this and thought of you.”
            </p>
            <p>
              Every crochet piece celebrates the charm of handmade work — the
              texture, the tiny variations, and the care in every stitch.
            </p>
            <a className="button button-outline" href="#made-with-love">
              Why handmade matters <span>↗</span>
            </a>
            <div className="scribble">one stitch at a time ♡</div>
          </div>
        </section>

        <section className="values section-wrap" id="made-with-love">
          <div className="section-heading centered">
            <div className="eyebrow">
              <span className="eyebrow-line" /> The little things we love{" "}
              <span className="eyebrow-line" />
            </div>
            <h2>
              Made for the <em>moments that matter.</em>
            </h2>
          </div>
          <div className="value-grid">
            <article className="value-card value-pink">
              <span className="value-icon">♡</span>
              <h3>Made by hand</h3>
              <p>Thoughtfully crafted, stitch by stitch, with care in the details.</p>
              <span className="value-decoration">✿</span>
            </article>
            <article className="value-card value-yellow">
              <span className="value-icon">✳</span>
              <h3>Made your way</h3>
              <p>Ask about colours and custom ideas to make your piece feel like you.</p>
              <span className="value-decoration">♡</span>
            </article>
            <article className="value-card value-blue">
              <span className="value-icon">♧</span>
              <h3>Made to gift</h3>
              <p>Little keepsakes for birthdays, thank-yous, and just-because days.</p>
              <span className="value-decoration">✽</span>
            </article>
          </div>
        </section>

        <section className="colour-section">
          <div className="colour-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" /> Pick your palette
            </div>
            <h2>
              A little colour
              <br />
              goes a <em>long way.</em>
            </h2>
            <p>
              Soft and subtle? Bright and playful? Tell us your favourite shades
              and let&apos;s make something lovely.
            </p>
            <a className="button button-light" href="#contact">
              Create something custom <span>↗</span>
            </a>
          </div>
          <div className="colour-swatches" aria-label="Colour palette">
            <div className="swatch swatch-berry"><span>Berry</span></div>
            <div className="swatch swatch-mustard"><span>Mustard</span></div>
            <div className="swatch swatch-sage"><span>Sage</span></div>
            <div className="swatch swatch-blue"><span>Dusty blue</span></div>
            <div className="swatch swatch-cream"><span>Oat cream</span></div>
            <div className="swatch swatch-coral"><span>Coral</span></div>
          </div>
          <span className="colour-flower">✿</span>
        </section>

        <section className="cta-section section-wrap" id="contact">
          <div className="cta-card">
            <span className="cta-flower">✿</span>
            <div className="eyebrow">Your next little treasure</div>
            <h2>
              Found something <em>lovely?</em>
            </h2>
            <p>
              Tell us what caught your eye. For orders, custom colours, or a
              gift idea, send Dabbler a message.
            </p>
            <a
              className="button button-dark"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              DM to order <span>↗</span>
            </a>
            <small>Update this link with your Dabbler Instagram profile.</small>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">✿</span>
          <span className="brand-name">
            DABBLER
            <small>little details. lovely finds.</small>
          </span>
        </a>
        <p>Little things, made with a lot of love.</p>
        <div className="footer-links">
          <a href="#shop">Shop</a>
          <a href="#story">Our story</a>
          <a href="#contact">Contact</a>
          <a href="#top">Back to top ↑</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Dabbler. Made with love.</span>
          <span>Colour outside the lines. ✿</span>
        </div>
      </footer>

      <div className={`toast${toast ? " show" : ""}`} role="status" aria-live="polite">
        {toast}
      </div>
    </>
  );
}

export default App;
