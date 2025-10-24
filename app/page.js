import Image from "next/image"
import porträtt from "@/images/porträtt.png"
import BlogPostCard from "@/components/BlogPostCard"

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-12">
      {/* Header */}
      <section id="header-section">
        <div className="flex flex-col items-center top-10 pt-10 gap-2">
          <Image
            src={porträtt}
            alt="Vitality Duo Hero Image"
            className="w-20 h-20 rounded-full"
          />
          <p>Mattis Hallberg and Martin Ankel</p>
          <p>
            Founders of <span className="font-bold">Vitality Duo</span>. The
            most beloved company in the whole world.{" "}
          </p>
          <p>Made this, made that, ...</p>
          <p>Join newsletter to get future posts via email</p>

          <div className="join">
            <div>
              <label className="input validator join-item">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="mail@site.com" required />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </div>
            <button className="btn btn-neutral join-item">Join</button>
          </div>
        </div>
      </section>

      {/** Blog posts */}
      <section className="gap-12">
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
      </section>
    </div>
  )
}
