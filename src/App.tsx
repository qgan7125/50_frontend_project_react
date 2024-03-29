import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import IncrementCounter from './components/15-increment-counter/incrementCounter';
import MovieApp from './components/17-movie-app/movieApp';
import BackgroundSlider from './components/18-background-slider/backgroundSlider';
import ThemeClock from './components/19-theme-clock/themeClock';
import ButtonRippleEffect from './components/20-button-ripple-effect/buttonRippleEffect';
import DragNdrap from './components/21-drag-n-drop/dragNdrop';
import DrawingApp from './components/22-drawing-app/drawingApp';
import KineticLoader from './components/23-kinetic-loader/kineticLoader';
import ContentPlaceholder from './components/24-content-placeholder/contentPlaceholder';
import StickyNavigation from './components/25-sticky-navigation/stickyNavigation';
import DoubleVerticalSlider from './components/26-double-vertical-slider/doubleVerticalSlider';
import ToastNotification from './components/27-toast-notification/toastNotification';
import GithubProfile from './components/28-github-profile/githubProgile';
import DoubleClickHeart from './components/29-double-click-heart/doubleClickHeart';
import AutoTextEffect from './components/30-auto-text-effect/autoTextEffect';
import ScrollAnimation from './components/06-scroll-animation/scrollAnimation';
import FormWave from './components/08-form-wave/formWave';
import SoundBoard from './components/09-sound-board/soundBoard';
import DadJoke from './components/10-dad-joke/dadJoke';
import EventkeyCode from './components/11-event-keycode/eventKeycode';
import FaqCollapse from './components/12-faq-collapse/faqCollapse';
import RandomChoicePicker from './components/13-random-choice-picker/randomChoicePicker';
import AnimatedNavigation from './components/14-animated-navigation/animatedNavigation';
import DrinkWater from './components/16-drink-water/drinkWater';
import HiddenSearch from './components/04-hidden-search/hiddenSearch';
import BlurryLoading from './components/05-blurry-loading/blurryLoading';
import SplitLandingPage from './components/07-split-landing-page/splitLandingPage';
import RotationNavAnimation from './components/03-rotation-navigation-animation/rotationNavAnimation';
import ExpandingCards from './components/01-expanding-cards/expandingCards';
import ProgressStep from './components/02-progress-step/progressStep';
import NavBar from './components/navBar';
import Footer from './components/footer';
import GoToTop from './components/GotoTop/GotoTop';
import './App.scss';
import PasswordGenerator from "./components/31-password-generator/passwordGenerator";
import GoodCheapFast from "./components/32-good-cheap-fast/goodCheapFast";
import NotesApp from "./components/33-notes-app/notesApp";
import AnimatedCountdown from "./components/34-animated-countdown/animatedCountdown";
import ImageCarousel from "./components/35-image-carousel/imageCarousel";
import HoverBoard from "./components/36-hover-board/hoverBoard";
import PokeDev from "./components/37-poke-dev/pokeDev";
import MobileTabNavigation from "./components/38-moblie-tab-navigation";
import PassordStrengthBackground from "./components/39-password-strength-background";
import BoxesBackground from "./components/40-boxes-background";
import VerifyAccountUI from "./components/41-verify-account-ui";
import LiveUserFilter from "./components/42-live-user-filter";
import FacebookUIDesign from "./components/43-facebook-ui-design";
import CustomRangeSlider from "./components/44-custom-range-slider";
import NetflixMobileNavigation from "./components/45-netflix-mobile-navigation";
import QuizApp from "./components/46-quiz-app";
import TestimonialBoxSwitcher from "./components/47-testimonial-box-switcher";
import RandomImageGenerator from "./components/48-random-image-generator";
import TodoList from "./components/49-todo-list";
import CatchTheInsect from "./components/50-catch-the-insect";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/01ExpandingCards" element={<ExpandingCards />} />
        <Route path="/02ProgressStep" element={<ProgressStep />} />
        <Route path="/03RotationNavAnimation" element={<RotationNavAnimation />} />
        <Route path="/04HiddenSearch" element={<HiddenSearch />} />
        <Route path="/05BlurryLoading" element={<BlurryLoading />} />
        <Route path="/06ScrollAnimation" element={<ScrollAnimation />} />
        <Route path="/07SplitLandingPage" element={<SplitLandingPage />} />
        <Route path="/08FormWave" element={<FormWave />} />
        <Route path="/09SoundBoard" element={<SoundBoard />} />
        <Route path="/10DadJoke" element={<DadJoke />} />
        <Route path="/11EventkeyCode" element={<EventkeyCode />} />
        <Route path="/12FaqCollapse" element={<FaqCollapse />} />
        <Route path="/13RandomChoicePicker" element={<RandomChoicePicker />} />
        <Route path="/14AnimatedNavigation" element={<AnimatedNavigation />} />
        <Route path="/15IncrementCounter" element={<IncrementCounter />} />
        <Route path="/16DrinkWater" element={<DrinkWater />} />
        <Route path="/17MovieApp" element={<MovieApp />} />
        <Route path="/18BackgroundSlider" element={<BackgroundSlider />} />
        <Route path="/19ThemeClock" element={<ThemeClock />} />
        <Route path="/20ButtonRippleEffect" element={<ButtonRippleEffect />} />
        <Route path="/21DragNdrap" element={<DragNdrap />} />
        <Route path="/22DrawingApp" element={<DrawingApp />} />
        <Route path="/23KineticLoader" element={<KineticLoader />} />
        <Route path="/24ContentPlaceholder" element={<ContentPlaceholder />} />
        <Route path="/25StickyNavigation" element={<StickyNavigation />} />
        <Route path="/26DoubleVerticalSlider" element={<DoubleVerticalSlider />} />
        <Route path="/27ToastNotification" element={<ToastNotification />} />
        <Route path="/28GithubProfile" element={<GithubProfile />} />
        <Route path="/29DoubleClickHeart" element={<DoubleClickHeart />} />
        <Route path="/30AutoTextEffect" element={<AutoTextEffect />} />
        <Route path="/31PasswordGenerator" element={<PasswordGenerator />} />
        <Route path="/32GoodCheapFast" element={<GoodCheapFast />} />
        <Route path="/33NotsApp" element={<NotesApp />} />
        <Route path="/34AnimatedCountdown" element={<AnimatedCountdown />} />
        <Route path="/35ImageCarousel" element={<ImageCarousel />} />
        <Route path="/36HoverBoard" element={<HoverBoard />} />
        <Route path="/37PokeDev" element={<PokeDev />} />
        <Route path="/38MobileTabNavigation" element={<MobileTabNavigation />} />
        <Route path="/39PasswordStrengthBackground" element={<PassordStrengthBackground />} />
        <Route path="/40BoxesBackground" element={<BoxesBackground />} />
        <Route path="/41VerifyAccountUI" element={<VerifyAccountUI />} />
        <Route path="/42LiveUserFilter" element={<LiveUserFilter />} />
        <Route path="/43FacebookUIDesign" element={<FacebookUIDesign />} />
        <Route path="/44CustomRangeSlider" element={<CustomRangeSlider />} />
        <Route path="/45NetflixMobileNavigation" element={<NetflixMobileNavigation />} />
        <Route path="/46QuizApp" element={<QuizApp />} />
        <Route path="/47TestimonialBoxSwitcher" element={<TestimonialBoxSwitcher />} />
        <Route path="/48RandomImageGenerator" element={<RandomImageGenerator />} />
        <Route path="/49TodoList" element={<TodoList />} />
        <Route path="/50CatchTheInsect" element={<CatchTheInsect />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <GoToTop />
      <Footer />
    </HashRouter>
  );
}

export default App;
