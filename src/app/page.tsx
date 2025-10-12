"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Textarea } from '@/components/ui/textarea'
import { 
  MapPin, 
  Navigation, 
  Search, 
  Settings, 
  User, 
  Bell, 
  Heart, 
  Star, 
  Calendar, 
  Clock, 
  TrendingUp, 
  Activity, 
  BarChart3, 
  PieChart, 
  Zap, 
  Shield, 
  Smartphone, 
  Wifi, 
  Battery, 
  Volume2,
  Camera,
  MessageSquare,
  Share2,
  Download,
  Upload,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Info,
  X,
  Plus,
  Minus,
  Edit,
  Trash2,
  Save,
  Copy,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Home,
  Building,
  Car,
  Plane,
  Train,
  Bus,
  FileText,
  Database,
  Phone,
  ThumbsUp,
  Award,
  DollarSign,
  CreditCard,
  Wallet,
  Route,
  Timer,
  UserCheck,
  Crown,
  Users,
  Map,
  AlertTriangle,
  Target,
  Truck,
  UserPlus,
  UserMinus,
  Ban,
  CheckSquare,
  XSquare,
  PlayCircle,
  PauseCircle,
  StopCircle,
  RotateCcw,
  Filter,
  SortAsc,
  SortDesc,
  Calendar as CalendarIcon,
  Globe,
  Headphones,
  HelpCircle,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Github,
  ExternalLink,
  QrCode,
  Scan,
  Receipt,
  TrendingDown,
  Percent,
  Gift,
  Sparkles,
  Flame,
  Zap as Lightning,
  Gauge,
  Radio,
  Satellite,
  Radar,
  Navigation2,
  Compass,
  MapPinned,
  Route as RouteIcon,
  Flag,
  FlagTriangleRight,
  Crosshair,
  Locate,
  LocateFixed,
  Move,
  MousePointer,
  MousePointer2,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Send,
  Power,
  Layers,
  Monitor,
  Cpu,
  HardDrive,
  Wifi as WifiIcon,
  Server,
  CloudLightning,
  Zap as ZapIcon,
  LineChart,
  TrendingUp as TrendingUpIcon,
  BarChart,
  PieChart as PieChartIcon,
  Activity as ActivityIcon,
  Pulse,
  Heart as HeartIcon,
  Brain,
  Eye as EyeIcon,
  Search as SearchIcon,
  Filter as FilterIcon,
  Calendar as CalendarIconAlt,
  Clock as ClockIcon,
  Timer as TimerIcon,
  Stopwatch,
  AlarmClock,
  History,
  RotateCcw as RotateCcwIcon,
  RefreshCw as RefreshCwIcon,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Play,
  Pause,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Pentagon,
  Diamond,
  Hash,
  AtSign,
  Asterisk,
  Dot,
  MoreHorizontal,
  MoreVertical,
  Menu,
  Grid,
  List,
  Columns,
  Rows,
  Layout,
  LayoutGrid,
  LayoutList,
  Sidebar,
  PanelLeft,
  PanelRight,
  PanelTop,
  PanelBottom,
  Split,
  SplitSquareHorizontal,
  SplitSquareVertical,
  Combine,
  Group,
  Ungroup,
  Link,
  Unlink,
  Chain,
  Anchor,
  Paperclip,
  Pin,
  Bookmark,
  Tag,
  Tags,
  Flag as FlagIcon,
  Folder,
  FolderOpen,
  File,
  FileImage,
  FileVideo,
  FileAudio,
  FilePlus,
  FileMinus,
  FileEdit,
  FileCheck,
  FileX,
  Archive,
  Package,
  Box,
  Container,
  Layers as LayersIcon,
  Stack,
  Pile,
  Warehouse,
  Store,
  ShoppingCart,
  ShoppingBag,
  Basket,
  Package2,
  Truck as TruckIcon,
  Van,
  Bike,
  Scooter,
  Motorcycle,
  Taxi,
  CarTaxiFront,
  PlaneTakeoff,
  PlaneLanding,
  Ship,
  Sailboat,
  Anchor as AnchorIcon,
  Waves,
  Mountain,
  TreePine,
  Sun,
  Moon,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning as CloudLightningIcon,
  Umbrella,
  Rainbow,
  Sunrise,
  Sunset,
  Wind,
  Tornado,
  Snowflake,
  Droplets,
  Thermometer,
  ThermometerSun,
  ThermometerSnowflake,
  Flame as Fire,
  Lightbulb,
  Flashlight,
  Candle,
  Lamp,
  LampCeiling,
  LampDesk,
  LampFloor,
  LampWallDown,
  LampWallUp,
  Lantern,
  Spotlight,
  FlashlightOff,
  BulbOff,
  PowerCircle,
  Plug,
  Unplug,
  Cable,
  Usb,
  Bluetooth,
  WifiOff,
  Signal,
  SignalHigh,
  SignalLow,
  SignalMedium,
  SignalZero,
  Antenna,
  Router,
  Rss,
  Cast,
  Airplay,
  Chromecast,
  Tv,
  Monitor as MonitorIcon,
  MonitorSpeaker,
  Laptop,
  Tablet,
  TabletSmartphone,
  Watch,
  Smartwatch,
  Gamepad,
  Gamepad2,
  Joystick,
  Dices,
  Dice1,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6,
  Spade,
  Club,
  Heart as HeartIconAlt,
  Diamond as DiamondIcon,
  Puzzle,
  Shapes,
  Paintbrush,
  Palette,
  Pipette,
  Brush,
  Pen,
  PenTool,
  Pencil,
  Eraser,
  Ruler,
  Scissors,
  Wrench,
  Hammer,
  Screwdriver,
  Drill,
  Saw,
  Pickaxe,
  Shovel,
  Axe,
  Knife,
  Sword,
  Shield as ShieldIcon,
  ShieldAlert,
  ShieldCheck,
  ShieldX,
  ShieldOff,
  Lock as LockIcon,
  LockKeyhole,
  LockOpen,
  Unlock as UnlockIcon,
  Key,
  KeyRound,
  KeySquare,
  Fingerprint,
  ScanFace,
  ScanEye,
  Eye as EyeIconAlt,
  EyeOff as EyeOffIcon,
  Glasses,
  Sunglasses,
  Contact,
  Contact2,
  UserCircle,
  UserSquare,
  UserRound,
  UserX,
  UserPlus as UserPlusIcon,
  UserMinus as UserMinusIcon,
  UserCheck as UserCheckIcon,
  Users as UsersIcon,
  Users2,
  UsersRound,
  UserCog,
  Crown as CrownIcon,
  Medal,
  Trophy,
  Award as AwardIcon,
  Star as StarIcon,
  StarHalf,
  StarOff,
  Sparkle,
  Sparkles as SparklesIcon,
  Wand,
  Wand2,
  Magic,
  Rabbit,
  Cat,
  Dog,
  Fish,
  Bird,
  Bug,
  Squirrel,
  Turtle,
  Snail,
  Ant,
  Bee,
  Butterfly,
  Flower,
  Flower2,
  Leaf,
  Seedling,
  TreeDeciduous,
  TreePalm,
  Cactus,
  Cherry,
  Apple,
  Banana,
  Grape,
  Orange,
  Lemon,
  Strawberry,
  Carrot,
  Corn,
  Wheat,
  Coffee,
  Wine,
  Beer,
  Martini,
  Soup,
  Pizza,
  Sandwich,
  Cookie,
  Cake,
  IceCream,
  Candy,
  Lollipop,
  Donut,
  Croissant,
  Bagel,
  Pretzel,
  Popcorn,
  Salad,
  Egg,
  EggFried,
  Milk,
  ChefHat,
  UtensilsCrossed,
  Utensils,
  Fork,
  Spoon,
  KnifeFork,
  Plate,
  Bowl,
  Cup,
  Mug,
  GlassWater,
  Bottle,
  WineOff,
  BeerOff,
  Cigarette,
  CigaretteOff,
  Smoking,
  SmokingOff,
  Pill,
  Capsule,
  Syringe,
  Stethoscope,
  Thermometer as ThermometerIcon,
  Bandage,
  HeartPulse,
  Activity as ActivityIconAlt,
  Pulse as PulseIcon,
  Zap as ZapIconAlt,
  Brain as BrainIcon,
  Skull,
  Bone,
  Footprints,
  Hand,
  HandMetal,
  Handshake,
  ThumbsUp as ThumbsUpIcon,
  ThumbsDown,
  Peace,
  Victory,
  Fingers,
  Fist,
  RaisedHand,
  OkHand,
  PointingUp,
  PointingDown,
  PointingLeft,
  PointingRight,
  Wave,
  Clap,
  Pray,
  Muscle,
  Leg,
  Foot,
  Ear,
  Nose,
  Mouth,
  Lips,
  Tongue,
  Tooth,
  Baby,
  Child,
  Person,
  PersonStanding,
  PersonWalking,
  PersonRunning,
  PersonSwimming,
  PersonBiking,
  PersonSkiing,
  PersonSurfing,
  PersonClimbing,
  PersonDancing,
  PersonSitting,
  PersonLying,
  PersonKneeling,
  PersonBowing,
  PersonRaising,
  PersonPointing,
  PersonWaving,
  PersonClapping,
  PersonPraying,
  PersonMeditating,
  PersonYoga,
  PersonExercising,
  PersonLifting,
  PersonBoxing,
  PersonFencing,
  PersonGolfing,
  PersonTennis,
  PersonBasketball,
  PersonFootball,
  PersonSoccer,
  PersonBaseball,
  PersonVolleyball,
  PersonBadminton,
  PersonPingPong,
  PersonBowling,
  PersonArchery,
  PersonFishing,
  PersonHunting,
  PersonCamping,
  PersonHiking,
  PersonMountainBiking,
  PersonRockClimbing,
  PersonSkydiving,
  PersonParachuting,
  PersonHangGliding,
  PersonKiteSurfing,
  PersonWindSurfing,
  PersonJetSkiing,
  PersonMotorboating,
  PersonSailing,
  PersonKayaking,
  PersonCanoeing,
  PersonRowing,
  PersonSwimming as PersonSwimmingIcon,
  PersonDiving,
  PersonSnorkeling,
  PersonScubaDiving,
  PersonSurfing as PersonSurfingIcon,
  PersonWaterSkiing,
  PersonWakeboarding,
  PersonStandUpPaddling,
  PersonIceSkating,
  PersonRollerSkating,
  PersonSkateboarding,
  PersonScootering,
  PersonBiking as PersonBikingIcon,
  PersonMotorcycling,
  PersonDriving,
  PersonFlying,
  PersonPiloting,
  PersonControllingPlane,
  PersonInHelicopter,
  PersonInRocket,
  PersonInSpaceship,
  PersonOnMoon,
  PersonOnMars,
  PersonInSpace,
  PersonFloating,
  PersonFalling,
  PersonJumping,
  PersonLeaping,
  PersonBouncing,
  PersonSpinning,
  PersonTwirling,
  PersonCartwheel,
  PersonBackflip,
  PersonFrontflip,
  PersonSomersault,
  PersonHandstand,
  PersonHeadstand,
  PersonSplit,
  PersonBridge,
  PersonCrabWalk,
  PersonBearCrawl,
  PersonArmy,
  PersonMilitary,
  PersonPolice,
  PersonFirefighter,
  PersonDoctor,
  PersonNurse,
  PersonTeacher,
  PersonStudent,
  PersonLawyer,
  PersonJudge,
  PersonPolitician,
  PersonBusinessman,
  PersonBusinesswoman,
  PersonWorker,
  PersonFarmer,
  PersonChef,
  PersonWaiter,
  PersonBartender,
  PersonCashier,
  PersonSalesperson,
  PersonCustomerService,
  PersonReceptionist,
  PersonSecretary,
  PersonAccountant,
  PersonBanker,
  PersonInvestor,
  PersonTrader,
  PersonBroker,
  PersonInsuranceAgent,
  PersonRealEstateAgent,
  PersonTravelAgent,
  PersonTourGuide,
  PersonHotelManager,
  PersonConcierge,
  PersonBellhop,
  PersonHousekeeping,
  PersonMaintenance,
  PersonSecurity,
  PersonGuard,
  PersonBouncer,
  PersonBodyguard,
  PersonDetective,
  PersonSpy,
  PersonAgent,
  PersonInvestigator,
  PersonForensic,
  PersonCrime,
  PersonVictim,
  PersonWitness,
  PersonSuspect,
  PersonCriminal,
  PersonPrisoner,
  PersonInmate,
  PersonConvict,
  PersonParolee,
  PersonProbationer,
  PersonDefendant,
  PersonPlaintiff,
  PersonJuror,
  PersonBailiff,
  PersonClerk,
  PersonStenographer,
  PersonInterpreter,
  PersonTranslator,
  PersonMediator,
  PersonArbitrator,
  PersonNegotiator,
  PersonDiplomat,
  PersonAmbassador,
  PersonConsul,
  PersonAttache,
  PersonCulturalAttache,
  PersonMilitaryAttache,
  PersonCommercialAttache,
  PersonPressAttache,
  PersonInformationOfficer,
  PersonPublicAffairsOfficer,
  PersonCommunicationsDirector,
  PersonMarketingManager,
  PersonSalesManager,
  PersonProductManager,
  PersonProjectManager,
  PersonOperationsManager,
  PersonGeneralManager,
  PersonExecutive,
  PersonCEO,
  PersonCOO,
  PersonCFO,
  PersonCTO,
  PersonCMO,
  PersonCHRO,
  PersonCLO,
  PersonCRO,
  PersonCDO,
  PersonCIO,
  PersonCSO,
  PersonCPO,
  PersonCVO,
  PersonPresident,
  PersonVicePresident,
  PersonDirector,
  PersonAssistantDirector,
  PersonDeputyDirector,
  PersonAssociateDirector,
  PersonSeniorDirector,
  PersonExecutiveDirector,
  PersonManagingDirector,
  PersonChairman,
  PersonChairwoman,
  PersonChairperson,
  PersonBoard,
  PersonTrustee,
  PersonGovernor,
  PersonRegent,
  PersonOverseer,
  PersonSupervisor,
  PersonForeman,
  PersonTeamLeader,
  PersonSquadLeader,
  PersonCaptain,
  PersonLieutenant,
  PersonSergeant,
  PersonCorporal,
  PersonPrivate,
  PersonRecruit,
  PersonCadet,
  PersonMidshipman,
  PersonOfficer,
  PersonCommander,
  PersonColonel,
  PersonMajor,
  PersonGeneral,
  PersonAdmiral,
  PersonMarshal,
  PersonFieldMarshal,
  PersonCommander as PersonCommanderIcon,
  PersonChief,
  PersonHead,
  PersonLeader,
  PersonBoss,
  PersonSuperior,
  PersonSenior,
  PersonJunior,
  PersonAssistant,
  PersonAssociate,
  PersonIntern,
  PersonTrainee,
  PersonApprentice,
  PersonMentor,
  PersonCoach,
  PersonInstructor,
  PersonProfessor,
  PersonLecturer,
  PersonTutor,
  PersonGuide,
  PersonCounselor,
  PersonTherapist,
  PersonPsychologist,
  PersonPsychiatrist,
  PersonSocialWorker,
  PersonCaseWorker,
  PersonAdvocate,
  PersonActivist,
  PersonVolunteer,
  PersonDonor,
  PersonSponsor,
  PersonPatron,
  PersonBenefactor,
  PersonPhilanthropist,
  PersonHumanitarian,
  PersonCharity,
  PersonNonProfit,
  PersonFoundation,
  PersonOrganization,
  PersonInstitution,
  PersonCorporation,
  PersonCompany,
  PersonBusiness,
  PersonEnterprise,
  PersonFirm,
  PersonAgency,
  PersonBureau,
  PersonDepartment,
  PersonDivision,
  PersonUnit,
  PersonSection,
  PersonBranch,
  PersonOffice,
  PersonHeadquarters,
  PersonSubsidiary,
  PersonAffiliate,
  PersonPartner,
  PersonAlliance,
  PersonCoalition,
  PersonConsortium,
  PersonSyndicate,
  PersonCartel,
  PersonMonopoly,
  PersonOligopoly,
  PersonDuopoly,
  PersonTrust,
  PersonHolding,
  PersonConglomerate,
  PersonMultinational,
  PersonTransnational,
  PersonGlobal,
  PersonInternational,
  PersonNational,
  PersonRegional,
  PersonLocal,
  PersonCommunity,
  PersonNeighborhood,
  PersonDistrict,
  PersonWard,
  PersonPrecinct,
  PersonCounty,
  PersonState,
  PersonProvince,
  PersonTerritory,
  PersonColony,
  PersonDependency,
  PersonProtectorate,
  PersonMandate,
  PersonTrusteeship,
  PersonCommonwealth,
  PersonFederation,
  PersonConfederation,
  PersonUnion,
  PersonLeague,
  PersonAlliance as PersonAllianceIcon,
  PersonTreaty,
  PersonAgreement,
  PersonContract,
  PersonDeal,
  PersonBargain,
  PersonNegotiation,
  PersonMediation,
  PersonArbitration,
  PersonLitigation,
  PersonDispute,
  PersonConflict,
  PersonWar,
  PersonBattle,
  PersonFight,
  PersonCombat,
  PersonStruggle,
  PersonContest,
  PersonCompetition,
  PersonTournament,
  PersonChampionship,
  PersonMatch,
  PersonGame,
  PersonSport,
  PersonAthletics,
  PersonOlympics,
  PersonParalympics,
  PersonWorldCup,
  PersonSuperbowl,
  PersonWorldSeries,
  PersonStanleyCup,
  PersonNBAFinals,
  PersonMarchMadness,
  PersonWimbledon,
  PersonUSOpen,
  PersonFrenchOpen,
  PersonAustralianOpen,
  PersonMasters,
  PersonPGAChampionship,
  PersonUSOpenGolf,
  PersonBritishOpen,
  PersonRyderCup,
  PersonPresidentsCup,
  PersonSolheimCup,
  PersonWalkerCup,
  PersonCurtisCup,
  PersonAmericasCup,
  PersonVolvoOceanRace,
  PersonVendeeGlobe,
  PersonFastnet,
  PersonSydneyHobart,
  PersonTranspac,
  PersonBermudaRace,
  PersonChicagoMackinac,
  PersonMarblehead,
  PersonCowes,
  PersonKiel,
  PersonCannes,
  PersonMonaco,
  PersonSaintTropez,
  PersonPortofino,
  PersonCapri,
  PersonMykonos,
  PersonSantorini,
  PersonIbiza,
  PersonMallorca,
  PersonMarbella,
  PersonNice,
  PersonCannes as PersonCannesIcon,
  PersonMonteCarlo,
  PersonGeneva,
  PersonZurich,
  PersonVienna,
  PersonPrague,
  PersonBudapest,
  PersonWarsaw,
  PersonKrakow,
  PersonBerlin,
  PersonMunich,
  PersonHamburg,
  PersonCologne,
  PersonFrankfurt,
  PersonDusseldorf,
  PersonStuttgart,
  PersonAmsterdam,
  PersonRotterdam,
  PersonTheHague,
  PersonUtrecht,
  PersonEindhoven,
  PersonGroningen,
  PersonTilburg,
  PersonAlmere,
  PersonBreda,
  PersonNijmegen,
  PersonApeldoorn,
  PersonHaarlem,
  PersonArnhem,
  PersonZaanstad,
  PersonHaarlemmermeer,
  PersonAmersfoort,
  PersonHertogenbosch,
  PersonZoetermeer,
  PersonZwolle,
  PersonMaastricht,
  PersonLeiden,
  PersonDordrecht,
  PersonAlkmaar,
  PersonEmmen,
  PersonEde,
  PersonDelft,
  PersonWestland,
  PersonVenlo,
  PersonDeventer,
  PersonBarneveld,
  PersonHelmond,
  PersonAssen,
  PersonLeeuwarden,
  PersonRoermond,
  PersonAlmelo,
  PersonHilversum,
  PersonWijchen,
  PersonHoorn,
  PersonVelsen,
  PersonMiddelburg,
  PersonPurmerend,
  PersonOosterhout,
  PersonSpijkenisse,
  PersonSchiedam,
  PersonCapelleAanDenIJssel,
  PersonLeidschendam,
  PersonKatwijk,
  PersonZeist,
  PersonWaalwijk,
  PersonGouda,
  PersonCastricum,
  PersonRijswijk,
  PersonPijnacker,
  PersonVoorschoten,
  PersonWassenaar,
  PersonOegstgeest,
  PersonNoorwijk,
  PersonSassenheim,
  PersonLisse,
  PersonHillegom,
  PersonBennebroek,
  PersonHeemstede,
  PersonBloemendaal,
  PersonZandvoort,
  PersonBeverwijk,
  PersonUitgeest,
  PersonKrommenie,
  PersonWormerveer,
  PersonZaandam,
  PersonKoog,
  PersonOostknollendam,
  PersonWestknollendam,
  PersonJisp,
  PersonNekkerSpeet,
  PersonAssendelft,
  PersonKrommenie as PersonKrommenieIcon
} from 'lucide-react'
import { toast } from 'sonner'

export default function XinguMoveApp() {
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 })
  const [searchQuery, setSearchQuery] = useState('')
  const [destination, setDestination] = useState('')
  const [isOnline, setIsOnline] = useState(true)
  const [batteryLevel, setBatteryLevel] = useState(85)
  const [notifications, setNotifications] = useState(3)
  const [selectedDriver, setSelectedDriver] = useState<number | null>(null)
  const [showDrivers, setShowDrivers] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('pix')
  const [rideInProgress, setRideInProgress] = useState(false)
  const [favoriteDrivers, setFavoriteDrivers] = useState([1, 4])
  const [activeTab, setActiveTab] = useState('ride')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [volume, setVolume] = useState([75])
  const [brightness, setBrightness] = useState([60])
  const [userType, setUserType] = useState<'passenger' | 'driver' | 'admin'>('admin')
  const [driverStatus, setDriverStatus] = useState<'available' | 'busy' | 'offline'>('offline')
  const [adminView, setAdminView] = useState('dashboard')
  const [walletBalance, setWalletBalance] = useState(127.50)
  const [loyaltyPoints, setLoyaltyPoints] = useState(850)
  const [currentRide, setCurrentRide] = useState<any>(null)
  const [earnings, setEarnings] = useState({ today: 245.80, week: 1247.50, month: 4892.30 })
  const [fraudAlerts, setFraudAlerts] = useState(2)
  const [dynamicPricing, setDynamicPricing] = useState(1.2) // Multiplicador de tarifa
  const [supportTickets, setSupportTickets] = useState(5)
  const [chatMessages, setChatMessages] = useState<any[]>([])
  const [newMessage, setNewMessage] = useState('')

  // Estados para painel administrativo
  const [totalUsers, setTotalUsers] = useState({ passengers: 15847, drivers: 2341 })
  const [activeRides, setActiveRides] = useState(127)
  const [dailyRevenue, setDailyRevenue] = useState(28947.50)
  const [systemHealth, setSystemHealth] = useState(98.7)
  const [fraudCases, setFraudCases] = useState(3)
  const [pendingDrivers, setPendingDrivers] = useState(12)
  const [blockedUsers, setBlockedUsers] = useState(7)
  const [systemUptime, setSystemUptime] = useState(99.8)
  const [apiResponseTime, setApiResponseTime] = useState(145)
  const [databaseConnections, setDatabaseConnections] = useState(234)
  const [serverLoad, setServerLoad] = useState(67)
  const [totalRevenue, setTotalRevenue] = useState(1247890.50)
  const [monthlyGrowth, setMonthlyGrowth] = useState(12.5)
  const [completionRate, setCompletionRate] = useState(96.8)
  const [averageRating, setAverageRating] = useState(4.7)
  const [peakHours, setPeakHours] = useState('18:00-20:00')
  const [topRoute, setTopRoute] = useState('Centro → Aeroporto')
  const [fraudRate, setFraudRate] = useState(0.02)
  const [platformFee, setPlatformFee] = useState(15)
  const [maintenanceMode, setMaintenanceMode] = useState(false)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [autoBackup, setAutoBackup] = useState(true)
  const [auditLogs, setAuditLogs] = useState(true)

  const [availableDrivers, setAvailableDrivers] = useState([
    {
      id: 1,
      name: 'Carlos Silva',
      rating: 4.9,
      reviews: 1247,
      distance: '2 min',
      price: 'R$ 12,50',
      vehicle: 'Honda Civic Prata',
      plate: 'ABC-1234',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      isOnline: true,
      specialties: ['Executivo', 'Aeroporto'],
      totalRides: 2847,
      yearsExperience: 5,
      languages: ['Português', 'Inglês'],
      earnings: { today: 245.80, week: 1247.50, month: 4892.30 },
      status: 'available',
      documents: { cnh: true, crlv: true, background: true },
      joinDate: '2019-03-15',
      lastActive: '2 min atrás'
    },
    {
      id: 2,
      name: 'Maria Santos',
      rating: 4.8,
      reviews: 892,
      distance: '3 min',
      price: 'R$ 11,80',
      vehicle: 'Toyota Corolla Branco',
      plate: 'DEF-5678',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      isOnline: true,
      specialties: ['Mulher', 'Seguro'],
      totalRides: 1654,
      yearsExperience: 3,
      languages: ['Português'],
      earnings: { today: 189.40, week: 987.20, month: 3456.80 },
      status: 'available',
      documents: { cnh: true, crlv: true, background: true },
      joinDate: '2021-07-22',
      lastActive: '1 min atrás'
    },
    {
      id: 3,
      name: 'João Oliveira',
      rating: 4.7,
      reviews: 654,
      distance: '5 min',
      price: 'R$ 10,90',
      vehicle: 'Hyundai HB20 Azul',
      plate: 'GHI-9012',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      isOnline: true,
      specialties: ['Econômico', 'Conversador'],
      totalRides: 987,
      yearsExperience: 2,
      languages: ['Português'],
      earnings: { today: 156.70, week: 743.90, month: 2891.40 },
      status: 'busy',
      documents: { cnh: true, crlv: true, background: true },
      joinDate: '2022-11-08',
      lastActive: '5 min atrás'
    },
    {
      id: 4,
      name: 'Ana Costa',
      rating: 4.9,
      reviews: 1456,
      distance: '4 min',
      price: 'R$ 13,20',
      vehicle: 'Volkswagen Jetta Preto',
      plate: 'JKL-3456',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      isOnline: true,
      specialties: ['Premium', 'Silencioso'],
      totalRides: 3241,
      yearsExperience: 7,
      languages: ['Português', 'Espanhol'],
      earnings: { today: 298.60, week: 1456.80, month: 5789.20 },
      status: 'available',
      documents: { cnh: true, crlv: true, background: true },
      joinDate: '2017-05-12',
      lastActive: 'Agora'
    },
    {
      id: 5,
      name: 'Pedro Almeida',
      rating: 4.6,
      reviews: 423,
      distance: '7 min',
      price: 'R$ 9,50',
      vehicle: 'Chevrolet Onix Vermelho',
      plate: 'MNO-7890',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      isOnline: false,
      specialties: ['Barato', 'Rápido'],
      totalRides: 756,
      yearsExperience: 1,
      languages: ['Português'],
      earnings: { today: 87.30, week: 456.70, month: 1789.50 },
      status: 'offline',
      documents: { cnh: true, crlv: false, background: true },
      joinDate: '2023-09-03',
      lastActive: '2 horas atrás'
    }
  ])

  const [recentTrips, setRecentTrips] = useState([
    { 
      id: 1, 
      from: 'Casa', 
      to: 'Shopping Center', 
      duration: '15 min', 
      distance: '8.2 km', 
      driver: 'Carlos Silva',
      passenger: 'João Silva',
      price: 'R$ 12,50',
      date: '2024-03-15',
      time: '14:30',
      rating: 5,
      paymentMethod: 'Pix',
      status: 'completed',
      earnings: 'R$ 10,63'
    },
    { 
      id: 2, 
      from: 'Trabalho', 
      to: 'Restaurante', 
      duration: '8 min', 
      distance: '2.1 km', 
      driver: 'Ana Costa',
      passenger: 'Maria Oliveira',
      price: 'R$ 8,90',
      date: '2024-03-15',
      time: '12:15',
      rating: 5,
      paymentMethod: 'Cartão',
      status: 'completed',
      earnings: 'R$ 7,57'
    },
    { 
      id: 3, 
      from: 'Academia', 
      to: 'Casa', 
      duration: '12 min', 
      distance: '5.5 km', 
      driver: 'Maria Santos',
      passenger: 'Pedro Costa',
      price: 'R$ 11,20',
      date: '2024-03-15',
      time: '18:45',
      rating: 4,
      paymentMethod: 'Dinheiro',
      status: 'completed',
      earnings: 'R$ 9,52'
    },
    { 
      id: 4, 
      from: 'Aeroporto', 
      to: 'Hotel', 
      duration: '25 min', 
      distance: '18.7 km', 
      driver: 'Carlos Silva',
      passenger: 'Ana Rodrigues',
      price: 'R$ 28,90',
      date: '2024-03-15',
      time: '09:20',
      rating: 5,
      paymentMethod: 'Pix',
      status: 'completed',
      earnings: 'R$ 24,57'
    },
    { 
      id: 5, 
      from: 'Hospital', 
      to: 'Farmácia', 
      duration: '6 min', 
      distance: '1.8 km', 
      driver: 'João Oliveira',
      passenger: 'Carlos Mendes',
      price: 'R$ 7,50',
      date: '2024-03-15',
      time: '16:10',
      rating: 4,
      paymentMethod: 'Cartão',
      status: 'completed',
      earnings: 'R$ 6,38'
    }
  ])

  // Dados para painel administrativo
  const [systemStats, setSystemStats] = useState({
    totalRides: 45892,
    totalRevenue: 1247890.50,
    averageRating: 4.7,
    completionRate: 96.8,
    responseTime: '2.3 min',
    peakHours: '18:00-20:00',
    topRoute: 'Centro → Aeroporto',
    fraudRate: 0.02
  })

  const [pendingDriverApplications, setPendingDriverApplications] = useState([
    {
      id: 101,
      name: 'Roberto Silva',
      email: 'roberto@email.com',
      phone: '(11) 99999-1234',
      vehicle: 'Honda City Prata',
      plate: 'XYZ-9876',
      cnh: 'Aprovado',
      crlv: 'Pendente',
      background: 'Aprovado',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
      appliedDate: '2024-03-10',
      status: 'pending'
    },
    {
      id: 102,
      name: 'Fernanda Costa',
      email: 'fernanda@email.com',
      phone: '(11) 99999-5678',
      vehicle: 'Nissan March Branco',
      plate: 'ABC-5432',
      cnh: 'Aprovado',
      crlv: 'Aprovado',
      background: 'Pendente',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face',
      appliedDate: '2024-03-12',
      status: 'pending'
    }
  ])

  // Estados adicionais para o painel administrativo
  const [realTimeActivity, setRealTimeActivity] = useState([
    { action: 'Nova corrida iniciada', user: 'João Silva → Carlos Motorista', time: '2 min atrás', type: 'ride' },
    { action: 'Motorista aprovado', user: 'Maria Santos', time: '5 min atrás', type: 'approval' },
    { action: 'Pagamento processado', user: 'R$ 28,90 via Pix', time: '7 min atrás', type: 'payment' },
    { action: 'Alerta de fraude', user: 'Usuário ID: 4521', time: '12 min atrás', type: 'fraud' },
    { action: 'Corrida concluída', user: 'Ana Costa → Pedro Passageiro', time: '15 min atrás', type: 'completed' }
  ])

  const [fraudAlertsList, setFraudAlertsList] = useState([
    {
      id: 1,
      type: 'Múltiplas contas',
      user: 'João Silva (ID: 4521)',
      description: 'Mesmo dispositivo usado em 3 contas diferentes',
      severity: 'Alta',
      time: '2 horas atrás'
    },
    {
      id: 2,
      type: 'Pagamento suspeito',
      user: 'Maria Santos (ID: 7892)',
      description: 'Tentativa de pagamento com cartão clonado',
      severity: 'Crítica',
      time: '4 horas atrás'
    },
    {
      id: 3,
      type: 'Localização anômala',
      user: 'Pedro Costa (ID: 1234)',
      description: 'Corrida impossível: 200km em 10 minutos',
      severity: 'Média',
      time: '6 horas atrás'
    }
  ])

  const [topRoutes, setTopRoutes] = useState([
    { route: 'Centro → Aeroporto', count: 1247, revenue: 'R$ 35.890', avg: 'R$ 28,80' },
    { route: 'Shopping → Residencial', count: 892, revenue: 'R$ 12.456', avg: 'R$ 13,96' },
    { route: 'Universidade → Centro', count: 654, revenue: 'R$ 8.934', avg: 'R$ 13,66' },
    { route: 'Hospital → Farmácia', count: 423, revenue: 'R$ 3.247', avg: 'R$ 7,68' },
    { route: 'Estação → Shopping', count: 387, revenue: 'R$ 5.891', avg: 'R$ 15,23' }
  ])

  const [apiServices, setApiServices] = useState([
    { service: 'Google Maps API', status: 'Conectado', health: 99.9 },
    { service: 'Pagamentos (Stripe)', status: 'Conectado', health: 98.7 },
    { service: 'Notificações (OneSignal)', status: 'Conectado', health: 99.2 },
    { service: 'SMS (Twilio)', status: 'Conectado', health: 97.8 },
    { service: 'Email (SendGrid)', status: 'Conectado', health: 99.5 }
  ])

  const [recentUsers, setRecentUsers] = useState([
    { name: 'João Silva', email: 'joao@email.com', type: 'Passageiro', joined: '2024-03-15', status: 'Ativo' },
    { name: 'Maria Santos', email: 'maria@email.com', type: 'Motorista', joined: '2024-03-14', status: 'Online' },
    { name: 'Pedro Costa', email: 'pedro@email.com', type: 'Passageiro', joined: '2024-03-14', status: 'Ativo' },
    { name: 'Ana Oliveira', email: 'ana@email.com', type: 'Motorista', joined: '2024-03-13', status: 'Offline' },
    { name: 'Carlos Mendes', email: 'carlos@email.com', type: 'Passageiro', joined: '2024-03-13', status: 'Suspenso' }
  ])

  // Simular localização atual
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
        },
        () => {
          // Localização padrão (São Paulo)
          setCurrentLocation({ lat: -23.5505, lng: -46.6333 })
        }
      )
    }
  }, [])

  // Simular atualizações em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      // Atualizar estatísticas em tempo real
      setActiveRides(prev => Math.max(50, prev + Math.floor(Math.random() * 6) - 3))
      setDailyRevenue(prev => prev + Math.random() * 100)
      setBatteryLevel(prev => Math.max(20, prev - 0.1))
      setSystemHealth(prev => Math.max(95, Math.min(100, prev + (Math.random() - 0.5) * 0.5)))
      setApiResponseTime(prev => Math.max(100, Math.min(300, prev + Math.floor((Math.random() - 0.5) * 20))))
      setServerLoad(prev => Math.max(30, Math.min(90, prev + Math.floor((Math.random() - 0.5) * 10))))
      
      // Simular chegada de novas mensagens de suporte
      if (Math.random() < 0.1) {
        setSupportTickets(prev => prev + 1)
        setNotifications(prev => prev + 1)
      }

      // Simular atividade em tempo real
      if (Math.random() < 0.3) {
        const activities = [
          { action: 'Nova corrida iniciada', user: 'Usuário → Motorista', time: 'Agora', type: 'ride' },
          { action: 'Pagamento processado', user: `R$ ${(Math.random() * 50 + 10).toFixed(2)} via Pix`, time: 'Agora', type: 'payment' },
          { action: 'Motorista ficou online', user: 'Motorista Premium', time: 'Agora', type: 'status' },
          { action: 'Corrida concluída', user: 'Avaliação 5 estrelas', time: 'Agora', type: 'completed' }
        ]
        const newActivity = activities[Math.floor(Math.random() * activities.length)]
        setRealTimeActivity(prev => [newActivity, ...prev.slice(0, 9)])
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleSearch = () => {
    if (destination.trim()) {
      toast.success(`Buscando motoristas para: ${destination}`)
      setShowDrivers(true)
      
      // Aplicar tarifa dinâmica baseada na demanda
      const updatedDrivers = availableDrivers.map(driver => {
        const basePrice = parseFloat(driver.price.replace('R$ ', '').replace(',', '.'))
        const dynamicPrice = basePrice * dynamicPricing
        return {
          ...driver,
          price: `R$ ${dynamicPrice.toFixed(2).replace('.', ',')}`
        }
      })
      
      // Priorizar motoristas favoritos
      const sortedDrivers = updatedDrivers.sort((a, b) => {
        const aIsFavorite = favoriteDrivers.includes(a.id)
        const bIsFavorite = favoriteDrivers.includes(b.id)
        if (aIsFavorite && !bIsFavorite) return -1
        if (!aIsFavorite && bIsFavorite) return 1
        return b.rating - a.rating
      })
      
      setAvailableDrivers(sortedDrivers)
    }
  }

  const selectDriver = (driverId: number) => {
    setSelectedDriver(driverId)
    const driver = availableDrivers.find(d => d.id === driverId)
    if (driver) {
      toast.success(`Motorista ${driver.name} selecionado! Chegará em ${driver.distance}.`)
    }
  }

  const toggleFavoriteDriver = (driverId: number) => {
    if (favoriteDrivers.includes(driverId)) {
      setFavoriteDrivers(favoriteDrivers.filter(id => id !== driverId))
      toast.success('Motorista removido dos favoritos!')
    } else {
      setFavoriteDrivers([...favoriteDrivers, driverId])
      toast.success('Motorista adicionado aos favoritos!')
    }
  }

  const confirmRide = () => {
    if (selectedDriver) {
      const driver = availableDrivers.find(d => d.id === selectedDriver)
      if (driver) {
        setRideInProgress(true)
        setCurrentRide({
          driver,
          destination,
          startTime: new Date(),
          status: 'confirmed'
        })
        toast.success(`Viagem confirmada com ${driver.name}! Acompanhe no mapa.`)
        setShowDrivers(false)
        setSelectedDriver(null)
        
        // Simular chegada do motorista
        setTimeout(() => {
          toast.info(`${driver.name} chegou! Boa viagem!`)
          setCurrentRide(prev => ({ ...prev, status: 'in_progress' }))
        }, 3000)
        
        // Simular fim da viagem
        setTimeout(() => {
          setRideInProgress(false)
          setCurrentRide(null)
          toast.success('Viagem concluída! Avalie seu motorista.')
          setDestination('')
          
          // Adicionar ao histórico
          const newTrip = {
            id: recentTrips.length + 1,
            from: 'Localização Atual',
            to: destination,
            duration: '12 min',
            distance: '6.8 km',
            driver: driver.name,
            passenger: 'João Silva',
            price: driver.price,
            date: new Date().toISOString().split('T')[0],
            time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
            rating: 5,
            paymentMethod: paymentMethod === 'pix' ? 'Pix' : paymentMethod === 'card' ? 'Cartão' : 'Dinheiro',
            status: 'completed',
            earnings: `R$ ${(parseFloat(driver.price.replace('R$ ', '').replace(',', '.')) * 0.85).toFixed(2).replace('.', ',')}`
          }
          setRecentTrips(prev => [newTrip, ...prev])
          
          // Atualizar pontos de fidelidade
          setLoyaltyPoints(prev => prev + 50)
        }, 15000)
      }
    }
  }

  const toggleDriverStatus = () => {
    const statuses: ('available' | 'busy' | 'offline')[] = ['offline', 'available', 'busy']
    const currentIndex = statuses.indexOf(driverStatus)
    const nextStatus = statuses[(currentIndex + 1) % statuses.length]
    setDriverStatus(nextStatus)
    
    const statusMessages = {
      available: 'Você está disponível para corridas!',
      busy: 'Status alterado para ocupado',
      offline: 'Você está offline'
    }
    
    toast.success(statusMessages[nextStatus])
  }

  const approveDriver = (driverId: number) => {
    setPendingDriverApplications(prev => 
      prev.filter(driver => driver.id !== driverId)
    )
    toast.success('Motorista aprovado com sucesso!')
    setPendingDrivers(prev => prev - 1)
  }

  const rejectDriver = (driverId: number) => {
    setPendingDriverApplications(prev => 
      prev.filter(driver => driver.id !== driverId)
    )
    toast.error('Solicitação de motorista rejeitada')
    setPendingDrivers(prev => prev - 1)
  }

  const blockUser = (userId: number) => {
    toast.success('Usuário bloqueado com sucesso!')
    setBlockedUsers(prev => prev + 1)
  }

  const resolveFraudAlert = (alertId: number) => {
    setFraudAlertsList(prev => prev.filter(alert => alert.id !== alertId))
    setFraudCases(prev => prev - 1)
    toast.success('Alerta de fraude resolvido!')
  }

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: chatMessages.length + 1,
        text: newMessage,
        sender: userType,
        timestamp: new Date(),
        type: 'text'
      }
      setChatMessages(prev => [...prev, message])
      setNewMessage('')
      
      // Simular resposta automática do suporte
      if (userType !== 'admin') {
        setTimeout(() => {
          const response = {
            id: chatMessages.length + 2,
            text: 'Obrigado pela sua mensagem! Nossa equipe irá analisá-la e responder em breve.',
            sender: 'support',
            timestamp: new Date(),
            type: 'text'
          }
          setChatMessages(prev => [...prev, response])
        }, 2000)
      }
    }
  }

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  const getPaymentIcon = (method: string) => {
    switch (method.toLowerCase()) {
      case 'pix': return <Zap className="w-4 h-4 text-green-500" />
      case 'cartão': 
      case 'card': return <CreditCard className="w-4 h-4 text-blue-500" />
      case 'dinheiro':
      case 'cash': return <DollarSign className="w-4 h-4 text-yellow-500" />
      default: return <Wallet className="w-4 h-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'text-green-500'
      case 'busy': return 'text-yellow-500'
      case 'offline': return 'text-gray-500'
      case 'completed': return 'text-blue-500'
      case 'pending': return 'text-orange-500'
      case 'cancelled': return 'text-red-500'
      default: return 'text-gray-500'
    }
  }

  const getStatusBadge = (status: string) => {
    const colors = {
      available: 'bg-green-100 text-green-800',
      busy: 'bg-yellow-100 text-yellow-800',
      offline: 'bg-gray-100 text-gray-800',
      completed: 'bg-blue-100 text-blue-800',
      pending: 'bg-orange-100 text-orange-800',
      cancelled: 'bg-red-100 text-red-800'
    }
    
    const labels = {
      available: 'Disponível',
      busy: 'Ocupado',
      offline: 'Offline',
      completed: 'Concluída',
      pending: 'Pendente',
      cancelled: 'Cancelada'
    }
    
    return (
      <Badge className={colors[status as keyof typeof colors] || colors.offline}>
        {labels[status as keyof typeof labels] || status}
      </Badge>
    )
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-slate-50 to-yellow-50'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-yellow-500 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <div className="relative">
                  <MapPin className="w-7 h-7 text-white" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold">XINGU MOVE</h1>
                <p className="text-sm opacity-90">Painel Administrativo</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* User Type Selector */}
              <Select value={userType} onValueChange={(value: 'passenger' | 'driver' | 'admin') => setUserType(value)}>
                <SelectTrigger className="w-32 bg-white/20 border-white/30 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="passenger">Passageiro</SelectItem>
                  <SelectItem value="driver">Motorista</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="hidden sm:flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Server className={`w-4 h-4 ${systemHealth > 95 ? 'text-green-400' : 'text-yellow-400'}`} />
                  <span className="text-sm font-medium">{systemHealth.toFixed(1)}%</span>
                </div>
                <Badge variant="secondary" className="gap-1 bg-white/20 text-white border-white/30">
                  <AlertTriangle className="w-3 h-3" />
                  {fraudCases + pendingDrivers}
                </Badge>
              </div>
              
              <div className="flex items-center gap-2">
                <Switch
                  checked={isDarkMode}
                  onCheckedChange={setIsDarkMode}
                />
                <Settings className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Admin Panel */}
      <main className="container mx-auto px-4 py-6">
        <Tabs value={adminView} onValueChange={setAdminView} className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-6 mb-6">
            <TabsTrigger value="dashboard" className="gap-2">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="users" className="gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Usuários</span>
            </TabsTrigger>
            <TabsTrigger value="drivers" className="gap-2">
              <UserCheck className="w-4 h-4" />
              <span className="hidden sm:inline">Motoristas</span>
            </TabsTrigger>
            <TabsTrigger value="rides" className="gap-2">
              <Map className="w-4 h-4" />
              <span className="hidden sm:inline">Corridas</span>
            </TabsTrigger>
            <TabsTrigger value="fraud" className="gap-2">
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">Antifraude</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="gap-2">
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Config</span>
            </TabsTrigger>
          </TabsList>

          {/* Admin Dashboard */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* System Health Alert */}
            <Alert className={`${systemHealth > 95 ? 'border-green-200 bg-green-50 dark:bg-green-900/20' : 'border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20'}`}>
              <Activity className={`h-4 w-4 ${systemHealth > 95 ? 'text-green-500' : 'text-yellow-500'}`} />
              <AlertDescription className={systemHealth > 95 ? 'text-green-700 dark:text-green-300' : 'text-yellow-700 dark:text-yellow-300'}>
                <strong>Sistema XINGU MOVE:</strong> {systemHealth.toFixed(1)}% de saúde • {activeRides} corridas ativas • {fraudCases} alertas de fraude • Uptime: {systemUptime}%
              </AlertDescription>
            </Alert>

            {/* Key Performance Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">Usuários Totais</p>
                      <p className="text-2xl font-bold">{(totalUsers.passengers + totalUsers.drivers).toLocaleString()}</p>
                      <p className="text-blue-200 text-xs">+{Math.floor(Math.random() * 50)} hoje</p>
                    </div>
                    <Users className="w-8 h-8 text-blue-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">Corridas Ativas</p>
                      <p className="text-2xl font-bold">{activeRides}</p>
                      <p className="text-green-200 text-xs">Tempo real</p>
                    </div>
                    <Car className="w-8 h-8 text-green-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-yellow-100 text-sm">Receita Hoje</p>
                      <p className="text-2xl font-bold">R$ {dailyRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                      <p className="text-yellow-200 text-xs">+{monthlyGrowth}% vs ontem</p>
                    </div>
                    <DollarSign className="w-8 h-8 text-yellow-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-red-100 text-sm">Alertas Fraude</p>
                      <p className="text-2xl font-bold">{fraudCases}</p>
                      <p className="text-red-200 text-xs">Requer atenção</p>
                    </div>
                    <Shield className="w-8 h-8 text-red-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* System Performance Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Monitor className="w-5 h-5 text-blue-500" />
                    Performance do Sistema
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Server className="w-4 h-4 text-blue-500" />
                        Saúde do Sistema
                      </span>
                      <div className="flex items-center gap-2">
                        <Progress value={systemHealth} className="w-20" />
                        <span className="text-sm font-semibold">{systemHealth.toFixed(1)}%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-yellow-500" />
                        Carga do Servidor
                      </span>
                      <div className="flex items-center gap-2">
                        <Progress value={serverLoad} className="w-20" />
                        <span className="text-sm font-semibold">{serverLoad}%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Database className="w-4 h-4 text-green-500" />
                        Conexões BD
                      </span>
                      <span className="text-sm font-semibold">{databaseConnections}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-purple-500" />
                        Tempo Resposta API
                      </span>
                      <span className="text-sm font-semibold">{apiResponseTime}ms</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-orange-500" />
                        Uptime
                      </span>
                      <span className="text-sm font-semibold">{systemUptime}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-green-500" />
                    Atividade em Tempo Real
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {realTimeActivity.map((activity, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.type === 'ride' ? 'bg-blue-500' :
                          activity.type === 'approval' ? 'bg-green-500' :
                          activity.type === 'payment' ? 'bg-yellow-500' :
                          activity.type === 'fraud' ? 'bg-red-500' : 'bg-purple-500'
                        }`}></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{activity.action}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{activity.user}</p>
                        </div>
                        <span className="text-xs text-gray-500">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Business Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-blue-500" />
                    Métricas de Negócio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Taxa de conclusão</span>
                      <div className="flex items-center gap-2">
                        <Progress value={completionRate} className="w-20" />
                        <span className="text-sm font-semibold">{completionRate}%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Tempo de resposta médio</span>
                      <span className="text-sm font-semibold">{systemStats.responseTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Avaliação média</span>
                      <div className="flex items-center gap-1">
                        {getRatingStars(averageRating)}
                        <span className="text-sm font-semibold ml-1">{averageRating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Horário de pico</span>
                      <span className="text-sm font-semibold">{peakHours}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Rota mais popular</span>
                      <span className="text-sm font-semibold">{topRoute}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-500" />
                    Financeiro
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Receita Total</p>
                      <p className="text-2xl font-bold text-green-600">R$ {totalRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Crescimento Mensal</p>
                      <p className="text-lg font-semibold text-blue-600">+{monthlyGrowth}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Taxa da Plataforma</p>
                      <p className="text-lg font-semibold">{platformFee}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Receita da Plataforma</p>
                      <p className="text-lg font-semibold text-purple-600">
                        R$ {(totalRevenue * platformFee / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                    Ações Pendentes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-2">
                        <UserPlus className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">Motoristas pendentes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{pendingDrivers}</Badge>
                        <Button size="sm" onClick={() => setAdminView('drivers')}>
                          Revisar
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm">Tickets de suporte</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{supportTickets}</Badge>
                        <Button size="sm">
                          Atender
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-red-500" />
                        <span className="text-sm">Alertas de fraude</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{fraudCases}</Badge>
                        <Button size="sm" onClick={() => setAdminView('fraud')}>
                          Investigar
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Users Management */}
          <TabsContent value="users" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-500" />
                    Passageiros
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <p className="text-3xl font-bold text-blue-600">{totalUsers.passengers.toLocaleString()}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Usuários ativos</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Novos hoje:</span>
                      <span className="font-semibold">+{Math.floor(Math.random() * 50)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxa de retenção:</span>
                      <span className="font-semibold">87%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avaliação média:</span>
                      <span className="font-semibold">4.6</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Viagens por usuário:</span>
                      <span className="font-semibold">2.8/mês</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-green-500" />
                    Motoristas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <p className="text-3xl font-bold text-green-600">{totalUsers.drivers.toLocaleString()}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Motoristas ativos</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Online agora:</span>
                      <span className="font-semibold">{Math.floor(totalUsers.drivers * 0.3)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxa de aceitação:</span>
                      <span className="font-semibold">91%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avaliação média:</span>
                      <span className="font-semibold">4.8</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ganho médio/dia:</span>
                      <span className="font-semibold">R$ 187</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* User Management Tools */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5 text-blue-500" />
                  Gerenciamento de Usuários
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  <Input placeholder="Buscar usuário por nome, email ou ID..." className="flex-1" />
                  <Select defaultValue="all">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="passengers">Passageiros</SelectItem>
                      <SelectItem value="drivers">Motoristas</SelectItem>
                      <SelectItem value="active">Ativos</SelectItem>
                      <SelectItem value="suspended">Suspensos</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button>
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Users */}
            <Card>
              <CardHeader>
                <CardTitle>Usuários Recentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentUsers.map((user, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <Badge className={
                            user.status === 'Ativo' || user.status === 'Online' ? 'bg-green-100 text-green-800' :
                            user.status === 'Offline' ? 'bg-gray-100 text-gray-800' : 'bg-red-100 text-red-800'
                          }>
                            {user.status}
                          </Badge>
                          <p className="text-xs text-gray-500 mt-1">{user.type} • {user.joined}</p>
                        </div>
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline">
                            <Eye className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="w-3 h-3" />
                          </Button>
                          {user.status !== 'Suspenso' && (
                            <Button size="sm" variant="outline" onClick={() => blockUser(index)}>
                              <Ban className="w-3 h-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* User Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <UserPlus className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">+{Math.floor(Math.random() * 100)}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Novos hoje</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{Math.floor(totalUsers.passengers * 0.75)}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Ativos hoje</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Ban className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{blockedUsers}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Bloqueados</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <TrendingUp className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">+{monthlyGrowth}%</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Crescimento</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Drivers Management */}
          <TabsContent value="drivers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="w-5 h-5 text-blue-500" />
                  Solicitações Pendentes ({pendingDriverApplications.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingDriverApplications.map((driver) => (
                    <div key={driver.id} className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={driver.photo} alt={driver.name} />
                            <AvatarFallback>{driver.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{driver.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{driver.email}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{driver.phone}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{driver.vehicle}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{driver.plate}</p>
                          <p className="text-xs text-gray-500">Aplicou em: {driver.appliedDate}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <p className="text-sm font-medium">CNH</p>
                          <Badge className={driver.cnh === 'Aprovado' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                            {driver.cnh}
                          </Badge>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium">CRLV</p>
                          <Badge className={driver.crlv === 'Aprovado' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                            {driver.crlv}
                          </Badge>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium">Antecedentes</p>
                          <Badge className={driver.background === 'Aprovado' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                            {driver.background}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="flex-1 bg-green-500 hover:bg-green-600"
                          onClick={() => approveDriver(driver.id)}
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Aprovar
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => rejectDriver(driver.id)}
                        >
                          <X className="w-4 h-4 mr-2" />
                          Rejeitar
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  {pendingDriverApplications.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <UserCheck className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                      <p>Nenhuma solicitação pendente</p>
                      <p className="text-sm">Todas as solicitações foram processadas</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Active Drivers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-green-500" />
                  Motoristas Ativos ({availableDrivers.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {availableDrivers.map((driver) => (
                    <div key={driver.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={driver.photo} alt={driver.name} />
                            <AvatarFallback>{driver.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                            driver.status === 'available' ? 'bg-green-500' :
                            driver.status === 'busy' ? 'bg-yellow-500' : 'bg-gray-400'
                          }`}></div>
                        </div>
                        <div>
                          <p className="font-medium">{driver.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{driver.vehicle} • {driver.plate}</p>
                          <div className="flex items-center gap-1 mt-1">
                            {getRatingStars(driver.rating)}
                            <span className="text-xs text-gray-500 ml-1">{driver.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        {getStatusBadge(driver.status)}
                        <p className="text-xs text-gray-500 mt-1">
                          {driver.totalRides} corridas • {driver.yearsExperience} anos
                        </p>
                        <p className="text-xs text-green-600 font-medium">
                          R$ {driver.earnings.today.toFixed(0)} hoje
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Driver Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Car className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{availableDrivers.filter(d => d.status === 'available').length}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Online agora</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">91%</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Taxa aceitação</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">4.8</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Avaliação média</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <DollarSign className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">R$ 187</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Ganho médio/dia</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Rides Management */}
          <TabsContent value="rides" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Car className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{systemStats.totalRides.toLocaleString()}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total de corridas</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{completionRate}%</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Taxa de conclusão</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Clock className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{systemStats.responseTime}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tempo resposta</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Star className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{averageRating}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Avaliação média</p>
                </CardContent>
              </Card>
            </div>

            {/* Real-time Rides */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Map className="w-5 h-5 text-blue-500" />
                  Corridas em Tempo Real ({activeRides})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentTrips.slice(0, 8).map((trip) => (
                    <div key={trip.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <div>
                          <p className="font-medium">{trip.from} → {trip.to}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {trip.driver} • {trip.passenger}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">{trip.price}</p>
                        <p className="text-xs text-gray-500">{trip.duration} • {trip.distance}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {getPaymentIcon(trip.paymentMethod)}
                          <span className="text-xs">{trip.paymentMethod}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Route Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Route className="w-5 h-5 text-purple-500" />
                  Análise de Rotas Populares
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topRoutes.map((route, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-blue-600">#{index + 1}</span>
                        </div>
                        <div>
                          <p className="font-medium">{route.route}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{route.count} corridas</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">{route.revenue}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Média: {route.avg}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Ride Filters and Search */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-blue-500" />
                  Filtros e Busca
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="active">Ativas</SelectItem>
                      <SelectItem value="completed">Concluídas</SelectItem>
                      <SelectItem value="cancelled">Canceladas</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select defaultValue="today">
                    <SelectTrigger>
                      <SelectValue placeholder="Período" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Hoje</SelectItem>
                      <SelectItem value="week">Esta semana</SelectItem>
                      <SelectItem value="month">Este mês</SelectItem>
                      <SelectItem value="custom">Personalizado</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Pagamento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="pix">Pix</SelectItem>
                      <SelectItem value="card">Cartão</SelectItem>
                      <SelectItem value="cash">Dinheiro</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button className="gap-2">
                    <Download className="w-4 h-4" />
                    Exportar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Fraud Detection */}
          <TabsContent value="fraud" className="space-y-6">
            <Alert className="border-red-200 bg-red-50 dark:bg-red-900/20">
              <Shield className="h-4 w-4 text-red-500" />
              <AlertDescription className="text-red-700 dark:text-red-300">
                <strong>Sistema Antifraude Ativo:</strong> {fraudCases} alertas requerem investigação imediata. Taxa de fraude: {(fraudRate * 100).toFixed(3)}%
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
                <CardContent className="p-4 text-center">
                  <AlertTriangle className="w-8 h-8 text-red-200 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{fraudCases}</p>
                  <p className="text-red-100 text-sm">Alertas ativos</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                <CardContent className="p-4 text-center">
                  <Ban className="w-8 h-8 text-orange-200 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{blockedUsers}</p>
                  <p className="text-orange-100 text-sm">Usuários bloqueados</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                <CardContent className="p-4 text-center">
                  <Shield className="w-8 h-8 text-green-200 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{((1 - fraudRate) * 100).toFixed(1)}%</p>
                  <p className="text-green-100 text-sm">Taxa de segurança</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <CardContent className="p-4 text-center">
                  <Eye className="w-8 h-8 text-blue-200 mx-auto mb-2" />
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="text-blue-100 text-sm">Monitoramento</p>
                </CardContent>
              </Card>
            </div>

            {/* Fraud Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  Alertas de Fraude Ativos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fraudAlertsList.map((alert) => (
                    <div key={alert.id} className="p-4 border rounded-lg border-red-200 bg-red-50 dark:bg-red-900/20">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Badge className={
                            alert.severity === 'Crítica' ? 'bg-red-500 text-white' :
                            alert.severity === 'Alta' ? 'bg-orange-500 text-white' : 'bg-yellow-500 text-white'
                          }>
                            {alert.severity}
                          </Badge>
                          <span className="font-semibold">{alert.type}</span>
                        </div>
                        <span className="text-sm text-gray-500">{alert.time}</span>
                      </div>
                      <p className="text-sm mb-2 font-medium">{alert.user}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{alert.description}</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-3 h-3 mr-1" />
                          Investigar
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => blockUser(alert.id)}>
                          <Ban className="w-3 h-3 mr-1" />
                          Bloquear
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => resolveFraudAlert(alert.id)}>
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Resolver
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="w-3 h-3 mr-1" />
                          Contatar
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  {fraudAlertsList.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <Shield className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                      <p>Nenhum alerta de fraude ativo</p>
                      <p className="text-sm">Sistema funcionando normalmente</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Fraud Prevention Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-blue-500" />
                  Configurações Antifraude
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <Label className="font-medium">Detecção automática de múltiplas contas</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Identifica usuários com múltiplas contas no mesmo dispositivo</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <Label className="font-medium">Verificação de localização em tempo real</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Detecta corridas impossíveis baseadas em localização</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <Label className="font-medium">Análise de padrões de pagamento</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Monitora transações suspeitas e cartões clonados</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <Label className="font-medium">Bloqueio automático para casos críticos</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Bloqueia automaticamente usuários em situações de alta gravidade</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <Label className="font-medium">Análise comportamental de motoristas</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Detecta padrões anômalos no comportamento de motoristas</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <Label className="font-medium">Verificação de documentos com IA</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Usa inteligência artificial para validar documentos</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fraud Statistics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Estatísticas de Fraude</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Taxa de fraude geral</span>
                      <span className="font-semibold">{(fraudRate * 100).toFixed(3)}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Casos resolvidos este mês</span>
                      <span className="font-semibold">47</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Tempo médio de resolução</span>
                      <span className="font-semibold">2.3 horas</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Economia estimada</span>
                      <span className="font-semibold text-green-600">R$ 89.450</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tipos de Fraude Mais Comuns</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { type: 'Múltiplas contas', percentage: 35, count: 12 },
                      { type: 'Pagamentos fraudulentos', percentage: 28, count: 9 },
                      { type: 'Localização falsa', percentage: 20, count: 7 },
                      { type: 'Documentos falsos', percentage: 12, count: 4 },
                      { type: 'Outros', percentage: 5, count: 2 }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{item.type}</span>
                        <div className="flex items-center gap-2">
                          <Progress value={item.percentage} className="w-20" />
                          <span className="text-sm font-semibold w-8">{item.count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* System Settings */}
          <TabsContent value="settings" className="space-y-6">
            {/* Pricing Configuration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-500" />
                  Configurações de Tarifa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <Label className="font-medium">Tarifa dinâmica ativa</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Ajusta preços automaticamente baseado na demanda</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Multiplicador atual: {dynamicPricing.toFixed(1)}x</Label>
                    <Slider
                      value={[dynamicPricing]}
                      onValueChange={(value) => setDynamicPricing(value[0])}
                      max={3}
                      min={1}
                      step={0.1}
                      className="w-full"
                    />
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Ajuste baseado na demanda em tempo real (1.0x = preço normal, 3.0x = preço máximo)
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Taxa da plataforma: {platformFee}%</Label>
                    <Slider
                      value={[platformFee]}
                      onValueChange={(value) => setPlatformFee(value[0])}
                      max={25}
                      min={10}
                      step={1}
                      className="w-full"
                    />
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Percentual retido pela XINGU MOVE de cada corrida
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Receita da Plataforma</p>
                      <p className="text-lg font-bold text-green-600">
                        R$ {(dailyRevenue * platformFee / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </p>
                      <p className="text-xs text-gray-500">Hoje</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Ganhos dos Motoristas</p>
                      <p className="text-lg font-bold text-blue-600">
                        R$ {(dailyRevenue * (100 - platformFee) / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </p>
                      <p className="text-xs text-gray-500">Hoje</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Preço Médio</p>
                      <p className="text-lg font-bold text-purple-600">R$ 15,80</p>
                      <p className="text-xs text-gray-500">Por corrida</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Configuration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-blue-500" />
                  Configurações do Sistema
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <Label className="font-medium">Modo de manutenção</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Desativa temporariamente o sistema para manutenção</p>
                    </div>
                    <Switch 
                      checked={maintenanceMode}
                      onCheckedChange={setMaintenanceMode}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <Label className="font-medium">Notificações push para motoristas</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Envia notificações automáticas para motoristas</p>
                    </div>
                    <Switch 
                      checked={pushNotifications}
                      onCheckedChange={setPushNotifications}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <Label className="font-medium">Backup automático diário</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Realiza backup completo do sistema diariamente</p>
                    </div>
                    <Switch 
                      checked={autoBackup}
                      onCheckedChange={setAutoBackup}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <Label className="font-medium">Logs detalhados de auditoria</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Registra todas as ações para auditoria</p>
                    </div>
                    <Switch 
                      checked={auditLogs}
                      onCheckedChange={setAuditLogs}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <Label className="font-medium">Aprovação automática de motoristas</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Aprova automaticamente motoristas com documentos válidos</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <Label className="font-medium">Análise de sentimento em avaliações</Label>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Usa IA para analisar comentários de usuários</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* API Integration Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-purple-500" />
                  Integração com APIs Externas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {apiServices.map((api, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${
                          api.health > 99 ? 'bg-green-500' :
                          api.health > 95 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></div>
                        <div>
                          <p className="font-medium">{api.service}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Saúde: {api.health}%</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={
                          api.status === 'Conectado' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }>
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {api.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Settings className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Database and Performance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-blue-500" />
                    Banco de Dados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Conexões ativas</span>
                      <span className="font-semibold">{databaseConnections}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Tamanho do banco</span>
                      <span className="font-semibold">2.4 GB</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Último backup</span>
                      <span className="font-semibold">Hoje, 03:00</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Tempo de resposta</span>
                      <span className="font-semibold">12ms</span>
                    </div>
                    <Button className="w-full gap-2">
                      <Download className="w-4 h-4" />
                      Fazer Backup Manual
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Monitor className="w-5 h-5 text-green-500" />
                    Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>CPU do servidor</span>
                      <div className="flex items-center gap-2">
                        <Progress value={serverLoad} className="w-20" />
                        <span className="font-semibold">{serverLoad}%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Memória RAM</span>
                      <div className="flex items-center gap-2">
                        <Progress value={45} className="w-20" />
                        <span className="font-semibold">45%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Armazenamento</span>
                      <div className="flex items-center gap-2">
                        <Progress value={23} className="w-20" />
                        <span className="font-semibold">23%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Largura de banda</span>
                      <span className="font-semibold">1.2 GB/h</span>
                    </div>
                    <Button variant="outline" className="w-full gap-2">
                      <Activity className="w-4 h-4" />
                      Ver Métricas Detalhadas
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Emergency Controls */}
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-600">
                  <AlertTriangle className="w-5 h-5" />
                  Controles de Emergência
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                    <Power className="w-4 h-4 mr-2" />
                    Parar Sistema
                  </Button>
                  <Button variant="outline" className="border-yellow-200 text-yellow-600 hover:bg-yellow-50">
                    <Pause className="w-4 h-4 mr-2" />
                    Modo Manutenção
                  </Button>
                  <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Reiniciar Serviços
                  </Button>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  ⚠️ Use estes controles apenas em situações de emergência. Todas as ações são registradas nos logs de auditoria.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Status Alerts */}
        <div className="mt-6 space-y-4">
          <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-900/20">
            <CheckCircle className="h-4 w-4 text-blue-500" />
            <AlertDescription className="text-blue-700 dark:text-blue-300">
              <strong>Painel Administrativo XINGU MOVE ativo!</strong> Sistema completo de gestão: controle de usuários, 
              monitoramento em tempo real, sistema antifraude, configurações de tarifa e análise de performance.
            </AlertDescription>
          </Alert>
          
          {systemHealth < 98 && (
            <Alert className="border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20">
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
              <AlertDescription className="text-yellow-700 dark:text-yellow-300">
                <strong>Atenção:</strong> Saúde do sistema em {systemHealth.toFixed(1)}%. 
                Monitore a performance e considere ações de manutenção.
              </AlertDescription>
            </Alert>
          )}

          {(fraudCases > 0 || pendingDrivers > 0) && (
            <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-900/20">
              <AlertTriangle className="h-4 w-4 text-orange-500" />
              <AlertDescription className="text-orange-700 dark:text-orange-300">
                <strong>Ações Pendentes:</strong> {fraudCases} alertas de fraude e {pendingDrivers} motoristas 
                aguardando aprovação requerem sua atenção imediata.
              </AlertDescription>
            </Alert>
          )}

          {maintenanceMode && (
            <Alert className="border-red-200 bg-red-50 dark:bg-red-900/20">
              <Power className="h-4 w-4 text-red-500" />
              <AlertDescription className="text-red-700 dark:text-red-300">
                <strong>Modo de Manutenção Ativo:</strong> O sistema está temporariamente indisponível para usuários. 
                Desative quando a manutenção for concluída.
              </AlertDescription>
            </Alert>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-blue-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-blue-600">XINGU MOVE</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Painel Administrativo Completo
              </p>
              <p className="text-xs text-gray-500">
                Sistema de gestão avançado com monitoramento em tempo real, 
                antifraude, controle de usuários e análise de performance.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Funcionalidades</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Dashboard em tempo real</li>
                <li>• Gestão de usuários</li>
                <li>• Aprovação de motoristas</li>
                <li>• Sistema antifraude</li>
                <li>• Configurações de tarifa</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Monitoramento</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Performance do sistema</li>
                <li>• Corridas em tempo real</li>
                <li>• Análise de rotas</li>
                <li>• Métricas financeiras</li>
                <li>• Logs de auditoria</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Status do Sistema</h4>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${systemHealth > 95 ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                  Saúde: {systemHealth.toFixed(1)}%
                </p>
                <p className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  {activeRides} corridas ativas
                </p>
                <p className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${fraudCases === 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  {fraudCases} alertas de fraude
                </p>
              </div>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-xs text-gray-500">
              © 2024 XINGU MOVE - Painel Administrativo. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <Badge variant="outline" className="text-xs">
                <Shield className="w-3 h-3 mr-1" />
                Sistema Seguro
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Activity className="w-3 h-3 mr-1" />
                Tempo Real
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Database className="w-3 h-3 mr-1" />
                Backup Ativo
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}