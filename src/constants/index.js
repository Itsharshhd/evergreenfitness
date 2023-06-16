import { 
	BasicPlan,
	PremiumPlan,
	ProPlan,
	Timage1,
	Timage2,
	Timage3,
	StrengthTraining,
	CardioTraining,
	FatBurning,
	HealthFitness,
  CardioArea,
  GallImg,
  GallImg1,
  GallImg2,
  GallImg3,
  GallImg4,
  GallImg5,
  GallImg6,
  JuiceParlour,
  Supplement1,
  Supplement2,
  Treadmills
	
} from '../assets';


const plansData = [
  {
    icon: BasicPlan,
    name: "BASIC PLAN",
    price: "700",
    features: [
      "2 hours of excercises",
      "Free consultaion to coaches",
      "Access to The Community",
    ]
  },
  {
    icon: PremiumPlan,
    name: "PREMIUM PLAN",
    price: "1200",
    features: [
      "5 hour of excercises",
      "Free consultaion of Coaches",
      "Accessto minibar",
    ]
  },
  {
    icon: ProPlan,
    name: "PRO PLAN",
    price: "2000",
    features: [
      "8 hours of excercises",
      "Consultation of Private Coach",
      "Free Fitness Merchandises",
    ]
  }
];



const tData = [
  {
    image: Timage1,
    review:
      "I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!",
    name: 'MATHEW HENDRICKSON',
    status : 'ENTREPRENEUR'
  },
  {
    image: Timage2,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint ',
    name: 'JOHN KEVIN',
    status: 'COACH'
  },
  {
    image : Timage3,
    review:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aspernatur quod voluptatem',
    name: 'FRANKLIN',
    status: "CUSTOMER"
  }
];



const programsData = [
  {
    image: StrengthTraining,
    heading: "Strength Training",
    details:
      "In this program, you are trained to improve your strength through many exercises.",
  },
  {
    image: CardioTraining,
    heading: "Cardio Training",
    details:
      "In this program, you are trained to do sequential moves in range of 20 until 30 minutes.",
  },
  {
    image: FatBurning,
    heading: "Fat Burning",
    details:
      "This program is suitable for you who wants to get rid of your fat and lose their weight.",
  },
  {
    image: HealthFitness,
    heading: "Health Fitness",
    details:
      "This programs is designed for those who exercises only for their body fitness not body building.",
  },
];


const galleryImages = [
  CardioArea,
  GallImg,
  GallImg1,
  GallImg2,
  GallImg3,
  GallImg4,
  GallImg5,
  GallImg6,
  JuiceParlour,
  Supplement1,
  Supplement2,
  Treadmills
];


export {
  programsData,
  tData,
  plansData,
  galleryImages
}
