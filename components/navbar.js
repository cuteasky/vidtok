import { BsFillExclamationCircleFill } from 'react-icons/bs';
import { AiOutlineVideoCameraAdd } from 'react-icons/ai';

export default function Navbar() {
  return (
    <div className="bg-white shadow-md shadow-slate-300 py-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="text-5xl nav-brand tracking-normal">
            <div className="flex">
              <div className="mr-2 text-pink-500">
                <AiOutlineVideoCameraAdd />
              </div>
              <a className="block bg-gradient-to-br text-transparent bg-clip-text from-red-600 via-pink-600 to-purple-600">
                {process.env.appName}
              </a>
            </div>
          </div>
          <div className="text-pink-500 text-xl">
            <BsFillExclamationCircleFill />
          </div>
        </div>
      </div>
    </div>
  );
}
