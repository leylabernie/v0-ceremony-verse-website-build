import type { LucideIcon, LucideProps } from "lucide-react"
import {
  AlertCircle as LucideAlertCircle,
  ArrowLeft as LucideArrowLeft,
  ArrowRight as LucideArrowRight,
  Calendar as LucideCalendar,
  Camera as LucideCamera,
  Car as LucideCar,
  Calculator as LucideCalculator,
  Check as LucideCheck,
  CheckCircle as LucideCheckCircle,
  ChevronDown as LucideChevronDown,
  ChevronRight as LucideChevronRight,
  Clock as LucideClock,
  Download as LucideDownload,
  Facebook as LucideFacebook,
  Flower2 as LucideFlower2,
  Gift as LucideGift,
  Globe as LucideGlobe,
  Heart as LucideHeart,
  Home as LucideHome,
  Instagram as LucideInstagram,
  Link as LucideLink,
  Linkedin as LucideLinkedin,
  Lock as LucideLock,
  Mail as LucideMail,
  MapPin as LucideMapPin,
  Menu as LucideMenu,
  MessageCircle as LucideMessageCircle,
  Minus as LucideMinus,
  Moon as LucideMoon,
  Music as LucideMusic,
  Palette as LucidePalette,
  Phone as LucidePhone,
  Plus as LucidePlus,
  Search as LucideSearch,
  Send as LucideSend,
  Shield as LucideShield,
  ShoppingBag as LucideShoppingBag,
  Sparkles as LucideSparkles,
  Star as LucideStar,
  Sun as LucideSun,
  TrendingDown as LucideTrendingDown,
  Twitter as LucideTwitter,
  Users as LucideUsers,
  Utensils as LucideUtensils,
  UtensilsCrossed as LucideUtensilsCrossed,
  Video as LucideVideo,
  X as LucideX,
  Youtube as LucideYoutube,
} from "lucide-react"

export type IconProps = LucideProps

function createIcon(Icon: LucideIcon) {
  return function IconComponent({ className = "", ...props }: IconProps) {
    return <Icon className={className} {...props} />
  }
}

export const AlertCircle = createIcon(LucideAlertCircle)
export const ArrowLeft = createIcon(LucideArrowLeft)
export const ArrowRight = createIcon(LucideArrowRight)
export const Calendar = createIcon(LucideCalendar)
export const Camera = createIcon(LucideCamera)
export const Car = createIcon(LucideCar)
export const Calculator = createIcon(LucideCalculator)
export const Check = createIcon(LucideCheck)
export const CheckCircle = createIcon(LucideCheckCircle)
export const ChevronDown = createIcon(LucideChevronDown)
export const ChevronRight = createIcon(LucideChevronRight)
export const Clock = createIcon(LucideClock)
export const Download = createIcon(LucideDownload)
export const Facebook = createIcon(LucideFacebook)
export const Flower2 = createIcon(LucideFlower2)
export const Gift = createIcon(LucideGift)
export const Globe = createIcon(LucideGlobe)
export const Heart = createIcon(LucideHeart)
export const Home = createIcon(LucideHome)
export const Instagram = createIcon(LucideInstagram)
export const LinkIcon = createIcon(LucideLink)
export const Linkedin = createIcon(LucideLinkedin)
export const Lock = createIcon(LucideLock)
export const Mail = createIcon(LucideMail)
export const MapPin = createIcon(LucideMapPin)
export const Menu = createIcon(LucideMenu)
export const MessageCircle = createIcon(LucideMessageCircle)
export const Minus = createIcon(LucideMinus)
export const Moon = createIcon(LucideMoon)
export const Music = createIcon(LucideMusic)
export const Palette = createIcon(LucidePalette)
export const Phone = createIcon(LucidePhone)
export const Plus = createIcon(LucidePlus)
export const Search = createIcon(LucideSearch)
export const Send = createIcon(LucideSend)
export const Shield = createIcon(LucideShield)
export const ShoppingBag = createIcon(LucideShoppingBag)
export const Sparkles = createIcon(LucideSparkles)
export const Star = createIcon(LucideStar)
export const Sun = createIcon(LucideSun)
export const TrendingDown = createIcon(LucideTrendingDown)
export const Twitter = createIcon(LucideTwitter)
export const Users = createIcon(LucideUsers)
export const Utensils = createIcon(LucideUtensils)
export const UtensilsCrossed = createIcon(LucideUtensilsCrossed)
export const Video = createIcon(LucideVideo)
export const X = createIcon(LucideX)
export const Youtube = createIcon(LucideYoutube)
