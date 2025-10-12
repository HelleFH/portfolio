import React, {
  useState,
  useMemo,
  useRef,
  useEffect,
} from "react";
import TinderCard, { API, Direction } from "./components/react-tinder-card";
import profilesData from "./data/profiles";
import { FaTimes, FaHeart, FaUndo, FaInfoCircle } from "react-icons/fa";
import Modal from './components/modal.tsx'
import { Link } from "react-router-dom";
import './css/findMatches.css'

// Profile type
interface Profile {
  id: string | number;
  name: string;
  age: number;
  occupation: string;
  location: string;
  image: string;
  profile_text?: string;
  interests?: string[];
  children?: string;
  smoking_habits?: string;
  alcohol_habits?: string;
  zodiac_sign?: string;
  education_level?: string;
  hometown?: string;
}

function FindMatches() {
  const [showSwipedMessage, setShowSwipedMessage] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(profilesData.length - 1);
  const [lastDirection, setLastDirection] = useState<Direction | undefined>(undefined);
  const [cards, setCards] = useState<Profile[]>(profilesData);

  const currentIndexRef = useRef(currentIndex);

  // Typed refs
  const childRefs: React.RefObject<API | null>[] = useMemo(
    () => Array.from({ length: cards.length }, () => React.createRef<API>()),
    [cards.length]
  );

  const updateCurrentIndex = (val: number) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < cards.length - 1;
  const canSwipe = currentIndex >= 0;

  const swiped = (direction: Direction, _nameToDelete: string, index: number) => {
    setLastDirection(direction);

    // Remove swiped card from array
    setCards((prev: Profile[]) =>
      prev.filter((_: Profile, i: number) => i !== index)
    );

    updateCurrentIndex(index - 1);
    setShowSwipedMessage(true);

    setTimeout(() => setShowSwipedMessage(false), 1000);
  };

  const outOfFrame = (_name: string, idx: number) => {
    if (currentIndexRef.current >= idx) {
      childRefs[idx].current?.restoreCard();
    }
  };

  const swipe = async (dir: Direction) => {
    if (canSwipe && currentIndex < cards.length) {
      await childRefs[currentIndex].current?.swipe(dir);
    }
  };

  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current?.restoreCard();
  };

  // Modal state
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [storedProfile, setStoredProfile] = useState<Profile | null>(null);

  const openModal = (profile: Profile) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };

  const handleViewProfileClick = (profile: Profile) => {
    setSelectedProfile(profile);
    localStorage.setItem("selectedProfile", JSON.stringify(profile));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProfile(storedProfile);
  };

  useEffect(() => {
    const storedProfileString = localStorage.getItem("selectedProfile");
    if (storedProfileString) {
      const parsedProfile: Profile = JSON.parse(storedProfileString);
      setStoredProfile(parsedProfile);
      setSelectedProfile(parsedProfile);
    }
  }, []);

  return (
    <div className="find-matches-content">
      {isModalOpen && selectedProfile && (
        <Modal closeModal={() => setIsModalOpen(false)}>
          <div className="modal-content">
            <div key={selectedProfile.id} className="other-profile">
              <div className="other-profile-personal-info">
                <img
                  src={selectedProfile.image}
                  alt={`${selectedProfile.name}'s profile`}
                />
                <h3>
                  {selectedProfile.name}, {selectedProfile.age}
                </h3>
                <h4>
                  {selectedProfile.occupation} - {selectedProfile.location}
                </h4>
                <div className="additional-info">
                  {selectedProfile.profile_text && (
                    <div>
                      <p>
                        {selectedProfile.profile_text.substring(0, 100)}...
                      </p>
                    </div>
                  )}
                </div>
                <div className="other-profile-buttons">
                  <button className="otherProfile-button" onClick={closeModal}>
                    Back
                  </button>
                  <button
                    className="otherProfile-button"
                    onClick={() => handleViewProfileClick(selectedProfile)}
                  >
                    <Link to={`/individualProfiles/${selectedProfile.id}`}>
                      View Profile
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}

      <h2>Swipe left or right</h2>
      {showSwipedMessage ? (
        <h3 className="infoText">You swiped {lastDirection}</h3>
      ) : (
        <h3 className="infoText"></h3>
      )}

      <div className="card-container">
        {cards.map((character: Profile, index: number) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={character.id}
            onSwipe={(dir) => swiped(dir, character.name, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
          >
            <div className="card">
              <div className="card-image-container">
                <img
                  src={character.image}
                  draggable="false"
                  alt={`${character.name}'s profile`}
                />
                <div className="card-information">
                  <p>{character.name}, {character.age}</p>
                  <p>{character.occupation}, {character.location}</p>
                  <div className="info-button">
                    <Link
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                        openModal(character);
                      }}
                    >
                      <FaInfoCircle />
                    </ Link> 
                  </div>
                </div>
              </div>

              <div className="card-buttons">
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    swipe("left");
                  }}
                >
                  <FaTimes />
                </ Link> 
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    goBack();
                  }}
                >
                  <FaUndo />
                </ Link> 
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    swipe("right");
                  }}
                >
                  <FaHeart />
                </ Link> 
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default FindMatches;
