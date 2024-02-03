import { IoBarChartSharp } from 'react-icons/io5'
import { MdOutlineMoreTime } from 'react-icons/md'
import { FaTasks, FaProjectDiagram } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import { RiUserAddFill } from 'react-icons/ri'
import { HiUserGroup, HiOutlineUserCircle } from 'react-icons/hi'
import { VscGitPullRequestClosed } from 'react-icons/vsc'
const links = [
  {
    id: 1,
    text: 'home',
    path: '/',
    icon: <IoBarChartSharp />,
    accessByUser: true,
  },
  {
    id: 2,
    text: 'Services',
    path: 'services',
    icon: <FaTasks />,
    accessByUser: true,
  },
  {
    id: 3,
    text: 'Kontakt',
    path: 'kontakt',
    icon: <HiOutlineUserCircle />,
    accessByUser: true,
  },
]

export default links
