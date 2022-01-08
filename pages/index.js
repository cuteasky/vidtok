import Layout from '../components/layout';
import { BiSearchAlt } from 'react-icons/bi';

export async function getServerSideProps(ctx) {
  let url = ctx.query.url;
  if (ctx.query.url) {
    url = ctx.query.url;
  } else {
    url = '';
  }
  const res = await fetch(
    'https://hadi-api.herokuapp.com/api/tiktok?url=' + url
  );
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      vidlink: data,
    },
  };
}

export default function Home({ vidlink }) {
  let res = vidlink;
  if (res) {
    res = vidlink;
  } else {
    res = '';
  }
  let result = res.result;

  return (
    <Layout title="VIDTOK">
      <div className="text-center">
        <h1 className="text-7xl leading-7">
          <strong className="nav-brand bg-gradient-to-br bg-clip-text text-transparent from-red-500 via-pink-500 to-purple-600">
            VidTok. <br />
          </strong>
          <span className="text-gray-700 font-normal md:text-3xl text-xl">
            Download any videos from TikTok
          </span>{' '}
        </h1>
      </div>

      <div className="bg-white rounded-2xl w-full p-5 my-10 shadow-md">
        <div className="text-center md:text-5xl text-2xl flex justify-center text-gray-800">
          <BiSearchAlt className="mr-1" /> Search
        </div>
        <form>
          <input
            type="text"
            name="url"
            placeholder="Example: https://www.tiktok.com/@kucingsiapaini/video/7016660836626337051?is_from_webapp=1&sender_device=pc&web_id7048440335769290241"
            className="border-4 w-full rounded-full mt-3 p-3 text-xl text-center focus:outline-2 focus:outline-pink-500"
          ></input>
          <div className="text-center mt-4">
            <button
              type="submit"
              className="bg-pink-500 rounded-full px-5 py-2 font-semibold text-white"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>

      <div
        className={
          result ? 'bg-white rounded-2xl w-full p-5 my-10 shadow-md' : 'hidden'
        }
      >
        <div className="text-center md:text-5xl text-2xl flex justify-center text-gray-800">
          Results
        </div>

        <div className="md:flex justify-between">
          <div className="bg-white rounded-2xl w-full p-5 my-1 shadow-md md:mr-3">
            <div className="text-center font-semibold text-gray-700 md:text-xl">
              Video Links
            </div>
            <div className="mt-2 flex justify-center items-center gap-5">
              <a
                href={result ? result.video.nowm : ''}
                className="bg-pink-500 rounded-full px-3 py-1 font-semibold text-white md:text-sm text-xs"
              >
                No WM
              </a>
              <a
                href={result ? result.video.mp4 : ''}
                className="bg-pink-500 rounded-full px-3 py-1 font-semibold text-white md:text-sm text-xs"
              >
                MP4
              </a>
              <a
                href={result ? result.video.original : ''}
                className="bg-pink-500 rounded-full px-3 py-1 font-semibold text-white md:text-sm text-xs"
              >
                Original
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl w-full p-5 my-1 shadow-md md:ml-3">
            <div className="text-center font-semibold text-gray-700 md:text-xl">
              Audio Links
            </div>
            <div className="mt-2 flex justify-center gap-5">
              <a
                href={result ? result.audio_only.audio1 : ''}
                className="bg-pink-500 rounded-full px-3 py-1 font-semibold text-white md:text-sm text-xs"
              >
                Audio 1
              </a>
              <a
                href={result ? result.audio_only.audio2 : ''}
                className="bg-pink-500 rounded-full px-3 py-1 font-semibold text-white md:text-sm text-xs"
              >
                Audio 2
              </a>
              <a
                href={result ? result.audio_only.original : ''}
                className="bg-pink-500 rounded-full px-3 py-1 font-semibold text-white md:text-sm text-xs"
              >
                Original
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          result
            ? 'text-center pb-3 pt-5'
            : 'absolute bottom-0 left-1/2 transform -translate-x-1/2 w-fit pb-3 pt-5'
        }
      >
        <span>
          Developed with &#10084; by <strong>{process.env.appBy}</strong>
        </span>
      </div>
    </Layout>
  );
}
