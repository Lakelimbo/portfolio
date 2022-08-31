import Link from 'next/link'
import Image from '@/components/Image'
import Masonry from 'react-masonry-component'
import ReactPlayer from 'react-player/soundcloud'
import BGShapes from '@/components/Backgrounds'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { sortedBlogPost, allCoreContent } from '@/lib/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'

import Logo from '@/data/logos/logo_color_lg.svg'

import PkmnArchive from '../public/static/works/pkmn_archive.png'
import Koopacabana from '../public/static/works/koopacabana.png'
import WiKirby from '../public/static/works/wikirby.png'
import Grifkuba from '../public/static/works/grifkuba.png'
import FanonWiki from '../public/static/works/fanon_wiki.png'
import Miraheze from '../public/static/works/miraheze.png'

import Art1 from '../public/static/art/1.jpg'
import Art2 from '../public/static/art/2.jpg'
import Art3 from '../public/static/art/3.png'
import Art4 from '../public/static/art/4.jpg'
import Art5 from '../public/static/art/5.jpg'
import Art6 from '../public/static/art/6.jpg'

export const getStaticProps = async () => {
  // TODO: move computation to get only the essential frontmatter to contentlayer.config
  const sortedPosts = sortedBlogPost(allBlogs)
  const posts = allCoreContent(sortedPosts)

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <section className="mx-auto h-screen max-w-3xl px-4 text-white sm:px-6 xl:max-w-7xl xl:px-0">
        <div className="md:top-1/5 relative top-1/3 z-20 text-end">
          <h1 className="mb-5 text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            hello.
          </h1>
          <p className="text-3xl">
            I'm <span className="font-extrabold">Lake</span>. I'm a web designer, programmer, artist
            and amateaur composer.
          </p>
        </div>
        <div className="absolute top-0 left-0 -z-10 h-screen w-full overflow-hidden">
          <div
            className="h-screen w-full bg-[url('../public/static/backgrounds/grid.png')] bg-contain bg-bottom bg-repeat-x"
            style={{
              transform: 'perspective(500px) rotateX(75deg)',
              animation: 'top-grid 30s linear infinite',
            }}
          />
        </div>
      </section>
      <section className="bg-gradient-to-r from-slate-900 to-rose-900 py-10 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-7xl xl:px-0">
          <h1 className="mb-10 text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            works
          </h1>
          <div className="grid grid-cols-2 items-baseline gap-3 text-center md:grid-cols-3 lg:grid-cols-5">
            <div className="rounded-xl bg-fuchsia-100/10 p-5 text-center">
              <Image src={PkmnArchive} alt="PKMN Archive" />
              <h2 className="mt-3 text-2xl font-bold">Pokémon Archive</h2>
              <p>coming soon!</p>
            </div>
            <div className="rounded-xl bg-fuchsia-100/10 p-5 text-center">
              <Image src={Koopacabana} alt="Koopacabana" />
              <h2 className="mt-3 text-2xl font-bold">Koopacabana</h2>
              <p>work in progress</p>
            </div>
            <div className="rounded-xl bg-fuchsia-100/10 p-5 text-center">
              <Image src={WiKirby} alt="WiKirby" width={300} height={222} />
              <h2 className="mt-3 text-2xl font-bold">WiKirby</h2>
              <p>with frontend and backend</p>
            </div>
            <div className="rounded-xl bg-fuchsia-100/10 p-5 text-center">
              <Image src={FanonWiki} alt="Fanon Wiki" />
              <h2 className="mt-3 text-2xl font-bold">Fanon Wiki</h2>
              <p>with frontend and backend</p>
            </div>
            <div className="rounded-xl bg-fuchsia-100/10 p-5 text-center">
              <Image src={Grifkuba} alt="Grifkuba" />
              <h2 className="mt-3 text-2xl font-bold">Grifkuba</h2>
              <p>as a frontend specialist</p>
            </div>
            <div className="rounded-xl bg-fuchsia-100/10 p-5 text-center">
              <Image src={Miraheze} alt="Miraheze" width={300} height={300} />
              <h2 className="mt-3 text-2xl font-bold">Miraheze</h2>
              <p>with CSS and JS</p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-[#3d639d] py-10 text-white bg-blend-multiply"
        style={{
          backgroundImage:
            'radial-gradient(circle at center center, #476d1f, #3d639d), repeating-radial-gradient(circle at center center, #476d1f, #476d1f, 33px, transparent 66px, transparent 33px)',
        }}
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-7xl xl:px-0">
          <h1 className="mb-10 text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            experience
          </h1>
          <div className="grid grid-cols-2 items-baseline gap-3 text-center md:grid-cols-3 lg:grid-cols-5">
            <div className="rounded-xl bg-gray-600/30 p-5 text-center backdrop-blur-md">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png"
                alt="HTML"
                height={120}
                width={120}
              />
              <h2 className="mt-3 text-2xl font-bold">HTML</h2>
            </div>
            <div className="rounded-xl bg-gray-600/30 p-5 text-center backdrop-blur-md">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/200px-CSS3_logo_and_wordmark.svg.png"
                alt="CSS"
                height={141}
                width={100}
              />
              <h2 className="mt-3 text-2xl font-bold">CSS</h2>
            </div>
            <div className="rounded-xl bg-gray-600/30 p-5 text-center backdrop-blur-md">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png"
                alt="JS"
                height={120}
                width={120}
              />
              <h2 className="mt-3 text-2xl font-bold">JavaScript</h2>
            </div>
            <div className="rounded-xl bg-gray-600/30 p-5 text-center backdrop-blur-md">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/320px-Nextjs-logo.svg.png"
                alt="NextJS"
                height={120}
                width={192}
                className="invert"
              />
              <h2 className="mt-3 text-2xl font-bold">NextJS</h2>
            </div>
            <div className="rounded-xl bg-gray-600/30 p-5 text-center backdrop-blur-md">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/MediaWiki-2020-icon.svg/240px-MediaWiki-2020-icon.svg.png"
                alt="MediaWiki"
                height={120}
                width={120}
              />
              <h2 className="mt-3 text-2xl font-bold">MediaWiki</h2>
            </div>
            <div className="rounded-xl bg-gray-600/30 p-5 text-center backdrop-blur-md">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/246px-Adobe_Photoshop_CC_icon.svg.png"
                alt="Photoshop"
                height={123}
                width={123}
              />
              <h2 className="mt-3 text-2xl font-bold">Photoshop</h2>
            </div>
            <div className="rounded-xl bg-gray-600/30 p-5 text-center backdrop-blur-md">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/246px-Adobe_Illustrator_CC_icon.svg.png"
                alt="Illustrator"
                height={123}
                width={123}
              />
              <h2 className="mt-3 text-2xl font-bold">Illustrator</h2>
            </div>
            <div className="rounded-xl bg-gray-600/30 p-5 text-center backdrop-blur-md">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Inkscape_logo_%282-colour%29.svg/240px-Inkscape_logo_%282-colour%29.svg.png"
                alt="Inkscape"
                height={120}
                width={120}
                className="invert"
              />
              <h2 className="mt-3 text-2xl font-bold">Inkscape</h2>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-[#584f4f] py-10 text-white bg-blend-multiply"
        style={{
          backgroundImage:
            'radial-gradient(circle at center center, #476d1f, #3d639d), repeating-radial-gradient(circle at center center, #476d1f, #476d1f, 33px, transparent 66px, transparent 33px)',
        }}
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-7xl xl:px-0">
          <h1 className="mb-10 text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            art
          </h1>
          <Masonry>
            <div className="w-full md:w-1/2">
              <Image src={Art1} layout="responsive" className="rounded-xl" alt="Art 1" />
            </div>
            <div className="w-full md:w-1/2">
              <Image src={Art2} layout="responsive" className="rounded-xl" alt="Art 2" />
            </div>
            <div className="w-full md:w-1/2">
              <Image src={Art3} layout="responsive" className="rounded-xl" alt="Art 3" />
            </div>
            <div className="w-full md:w-1/2">
              <Image src={Art4} layout="responsive" className="rounded-xl" alt="Art 4" />
            </div>
            <div className="w-full md:w-1/2">
              <Image src={Art5} layout="responsive" className="rounded-xl" alt="Art 5" />
            </div>
            <div className="w-full md:w-1/2">
              <Image src={Art6} layout="responsive" className="rounded-xl" alt="Art 6" />
            </div>
          </Masonry>
        </div>
      </section>
      <section className="overflow-x-hidden bg-gradient-to-r from-violet-900 to-green-900 py-10 text-white bg-blend-color-dodge">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-7xl xl:px-0">
          <h1 className="mb-10 text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            music
          </h1>
          <div className="flex flex-wrap">
            <div>
              <ReactPlayer url="https://soundcloud.com/lakelimbo/carnival" />
            </div>
            <div>
              <ReactPlayer url="https://soundcloud.com/lakelimbo/magnets" />
            </div>
            <div>
              <ReactPlayer url="https://soundcloud.com/lakelimbo/jibjig" />
            </div>
            <div>
              <ReactPlayer url="https://soundcloud.com/lakelimbo/edo" />
            </div>
            <div>
              <ReactPlayer url="https://soundcloud.com/lakelimbo/mill-fever" />
            </div>
            <div>
              <ReactPlayer url="https://soundcloud.com/lakelimbo/cascade-capers" />
            </div>
            <div>
              <ReactPlayer url="https://soundcloud.com/lakelimbo/stilt-village" />
            </div>
            <div>
              <ReactPlayer url="https://soundcloud.com/lakelimbo/smb2-overworld" />
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen pt-20 text-white">
        <div className="relative top-1/4 mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-7xl xl:px-0">
          <Logo className="absolute left-[-10rem] m-auto scale-50 sm:left-0 lg:relative lg:scale-100" />
          <div className="mt-10 flex flex-wrap justify-center gap-10">
            <Link href="https://github.com/Lakelimbo">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="h-20 w-20"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
            </Link>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="h-20 w-20"
              >
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
              </svg>
              <p>Lake#1494</p>
            </div>
            <div>
              <Link href="https://twitter.com/Lakelimbo">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="h-20 w-20"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <style>{`.navbar { position: absolute }`}</style>
    </main>
  )
}
