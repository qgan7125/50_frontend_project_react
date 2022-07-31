import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
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
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<App />} />
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
      </Routes>
      <GoToTop />
      <Footer />
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
