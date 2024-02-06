import { FaHandshake } from 'react-icons/fa6'
import { RiTimerFlashFill } from 'react-icons/ri'
import { GiStarsStack } from 'react-icons/gi'
const cards = [
  {
    id: 1,
    text: 'Wir stehen stets für erstklassige Leistungen und die zuverlässige Erfüllung Ihrer An­forde­rungen ein.',
    title: 'Zuverlässigkeit',
    icon: <FaHandshake />,
  },
  {
    id: 2,
    text: 'Vertrauen Sie auf unsere Pünktlichkeit – wir halten unser Wort, immer rechtzeitig zu liefern.',
    title: 'Pünktlichkeit',
    icon: <RiTimerFlashFill />,
  },
  {
    id: 3,
    text: 'Unsere langjährige Erfahrung spricht für sich – Ihr Umzug in erfahrenen Händen.',
    title: 'Erfahrung',
    icon: <GiStarsStack />,
  },
]

export default cards
